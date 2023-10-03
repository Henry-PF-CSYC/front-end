import { Table } from 'react-bootstrap';
import './Cart.module.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteServiceCart } from '../../redux/actions';
import { Wallet, initMercadoPago } from '@mercadopago/sdk-react';
import axios from 'axios';
import Swal from 'sweetalert2';

// Loader
import { Rings } from "react-loader-spinner";
import { showLoader, hideLoader } from '../../redux/actions';


export const Cart = ({ isTerms }) => {

    // Accedemos al estado global del loader
    const isLoading = useSelector((state) => state.isLoading); 

    initMercadoPago('APP_USR-4cc18a60-413f-4ac0-ae3e-9c9772649256')
    const [preferenceId, setPreferenceId] = useState(null)
    const [proceed, setProceed] = useState(true)
    const user = useSelector(state => state.dataUser)

    const dispatch = useDispatch()
    const checkProceed = () => {
        setProceed(!proceed)
    }

    const deleteService = (name) => {
        dispatch(deleteServiceCart(name))
    }

    const viewMercadoPago = async () => {
        dispatch(showLoader());
        if(Object.keys(user).length > 0){
            const data = []
            servicesCart.forEach(service => data.push({id:service.id, title: service.titulo, unit_price: service.precio, quantity: service.quantity, currency_id: 'ARS'}))
    
            // const responseMercado = await axios.post('http://localhost:3001/mercadopago/order', data)
            const responseMercado = await axios.post('https://csyc.onrender.com/mercadopago/order', data)
    
            setPreferenceId(responseMercado.data.response.body.id)
            dispatch(hideLoader());
        }else{
            Swal.fire({
                title: 'Atencion',
                text: 'Debe iniciar sesion para completar su compra',
                icon: 'error'
            })
            dispatch(hideLoader());
        }
    }

    const servicesCart = useSelector(state => state.cartServices)
    let sumTotal = servicesCart.reduce((acummulator, currentValue) => acummulator + Number(currentValue.precio), 0)
    servicesCart.forEach(service => {
        if (service.quantity > 1) sumTotal = sumTotal + (Number(service.precio) * (service.quantity - 1))
    });


    
    return (
        <div className={isTerms ? 'pt-5' : ''}>

{isLoading && (
      <div className="loader-overlay">
        <div className="loader-container"><Rings color="#007bff" /></div>
      </div>
    )}

            {
                isTerms && (
                    <div className='d-flex justify-content-center m-5'>
                        <h1>Mi carrito</h1>
                    </div>
                )
            }
            {
                servicesCart.length > 0 ? (
                    <div className={isTerms ? 'row m-5 d-flex justify-content-between' : 'row'}>
                        <div className={isTerms ? 'col-8' : "col-12"}  >
                            {/* <h3 className='mb-3'>Tienes {productos.length} producto en tu carrito</h3> */}
                            <Table variant='secondary' striped hover style={{borderCollapse: 'collapse', borderRadius: '4px', overflow: 'hidden'}}>
                                <thead>
                                    <tr>
                                        <th className='col-2' style={{ fontSize: '17px' }}>Producto</th>
                                        <th className='col-2' style={{ fontSize: '17px' }}>Nombre</th>
                                        <th className='col-2' style={{ fontSize: '17px' }}>Precio</th>
                                        <th className='col-2' style={{ fontSize: '17px' }}>Cantidad</th>
                                        <th className='col-1' style={{ fontSize: '17px' }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        servicesCart.map((service, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='p-0 col-2'><img className='m-3' style={{borderRadius: '4px'}} width={'80px'} height={'50px'} src={service.imagen} alt='service'/></td>
                                                    <td className='col-3' style={{verticalAlign: 'middle'}}>
                                                        <p>{service.titulo}</p>
                                                    </td>
                                                    <td className='col-2' style={{verticalAlign: 'middle'}}>
                                                    <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'ARS' }).format(service.precio)}</p>
                                                    </td>
                                                    <td style={{verticalAlign: 'middle'}}>
                                                        <p>{service.quantity}</p>
                                                    </td>
                                                    <td style={{verticalAlign: 'middle'}} className='col-1'><button onClick={() => deleteService(service.titulo)} type="button" class="btn btn-outline-dark px-2 py-1 mb-2">X</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                        {
                            isTerms && (
                                <div className="col-3 mt-5">
                                    <div className='d-flex justify-content-between align-items-center border rounded-4' style={{ backgroundColor: '#F5F5F5' }}>
                                        <div className='my-3 mx-3'>
                                            <p className='fs-4 fw-bold'>Total</p>
                                        </div>
                                        <div className='my-3 mx-3'>
                                            <p className='fs-4 fw-bold' style={{ textAlign: 'end' }}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'ARS' }).format(sumTotal)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-check my-3 px-5 border rounded-4" style={{ backgroundColor: '#F5F5F5' }}>
                                            <input className="form-check-input my-3" type="checkbox" onClick={checkProceed} value={proceed} id="flexCheckDefault" />
                                            <label className="form-check-label my-3" style={{ textAlign: 'justify' }} htmlFor="flexCheckDefault">
                                                Al finalizar la compra aceptas haber leído y estar de acuerdo con nuestros Términos y Condiciones así como las así como las Preguntas Frecuentes del sitio. Aceptas también las Politicas de Privacidad y tratamiento de datos personales.
                                            </label>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: '#F5F5F5' }}>
                                        <div className='my-3'>
                                            <button onClick={viewMercadoPago} disabled={proceed} type="button" class="btn btn-outline-success w-100 border rounded-4">Continuar con el pago</button>
                                        </div>
                                        {
                                            preferenceId && (
                                                <div className='my-3'>
                                                    <Wallet initialization={{preferenceId}}/>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <div className='d-flex align-items-center justify-content-center' style={{ height: '284px' }}>
                        <h1>Actualmente no tienes productos agregados al carrito</h1>
                    </div>
                )
            }

        </div>
    )
}
