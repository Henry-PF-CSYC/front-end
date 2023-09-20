import { Table } from 'react-bootstrap';
import agua from '../../assets/Servicios/agua.jpg';
import './Cart.module.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteServiceCart } from '../../redux/actions';

export const Cart = ({ isTerms }) => {

    const [proceed, setProceed] = useState(true)
    const dispatch = useDispatch()
    const checkProceed = () => {
        setProceed(!proceed)
    }

    const deleteService = (name) => {
        dispatch(deleteServiceCart(name))
    }

    const servicesCart = useSelector(state => state.cartServices)

    return (
        <div className={isTerms ? 'pt-5' : ''}>
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
                            <Table variant='dark' striped hover>
                                <thead>
                                    <tr>
                                        <th className='col-2'>Producto</th>
                                        <th className='col-3'>Nombre</th>
                                        <th className='col-2'>Precio</th>
                                        <th className='col-1'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        servicesCart.map((service, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='p-0 col-2'><img className='m-3' width={'80px'} height={'50px'} src={service.imagen} /></td>
                                                    <td className='col-3'>
                                                        <p>{service.titulo}</p>
                                                    </td>
                                                    <td className='col-2'>
                                                        <p>{service.precio}</p>
                                                    </td>
                                                    <td className='col-1'><button onClick={() => deleteService(service.titulo)} type="button" class="btn btn-outline-danger">X</button></td>
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
                                            <p className='fs-4 fw-bold' style={{ textAlign: 'end' }}>$1.000</p>
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
                                            <button disabled={proceed} type="button" class="btn btn-outline-success w-100 border rounded-4">Continuar con el pago</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <div className='d-flex align-items-center justify-content-center' style={{height: '284px'}}>
                        <h1>Actualmente no tienes productos agregados al carrito</h1>
                    </div>
                )
            }

        </div>
    )
}
