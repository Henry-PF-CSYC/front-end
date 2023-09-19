import { Table } from 'react-bootstrap';
import agua from '../../assets/Servicios/agua.jpg';
import './Cart.module.css'
import { useState } from 'react';

export const Cart = () => {

    const [proceed, setProceed] = useState(true)

    const checkProceed = () => {
        setProceed(!proceed)
    }

    const productos = [
        {
            picture: agua,
            name: 'Agua',
            price: '$1.000'
        },
        {
            picture: agua,
            name: 'Agua',
            price: '$1.000'
        },
        {
            picture: agua,
            name: 'Agua',
            price: '$1.000'
        },
        {
            picture: agua,
            name: 'Agua',
            price: '$1.000'
        },
        {
            picture: agua,
            name: 'Agua',
            price: '$1.000'
        },
        {
            picture: agua,
            name: 'Agua',
            price: '$1.000'
        }
    ]

    return (
        <>
            <div className='d-flex justify-content-center m-4'>
                <h1>Mi carrito</h1>
            </div>
            {
                productos.length > 0 ? (
                    <div className="row m-5 d-flex justify-content-between">
                        <div className="col-8">
                            <h3 className='mb-3'>Tienes {productos.length} producto en tu carrito</h3>
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
                                        productos.map((producto, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='p-0 col-2'><img className='m-3' width={'80px'} height={'50px'} src={producto.picture} /></td>
                                                    <td className='col-3'>
                                                        <p>{producto.name}</p>
                                                    </td>
                                                    <td className='col-2'>
                                                        <p>{producto.price}</p>
                                                    </td>
                                                    <td className='col-1'><button type="button" class="btn btn-outline-danger">X</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <div className="col-3 mt-5" >
                            <div className='row' style={{ backgroundColor: '#F5F5F5' }}>
                                <div className='col-6 my-3'>
                                    <p className='fs-4 fw-bold'>Total</p>
                                </div>
                                <div className='col-6 my-3'>
                                    <p className='fs-4 fw-bold' style={{ textAlign: 'end' }}>$1.000</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-check col-12 my-3 ps-5" style={{ backgroundColor: '#F5F5F5' }}>
                                    <input className="form-check-input my-3" type="checkbox" onClick={checkProceed} value={proceed} id="flexCheckDefault" />
                                    <label className="form-check-label my-3" htmlFor="flexCheckDefault">
                                        Al finalizar la compra aceptas haber leído y estar de acuerdo con nuestros Términos y Condiciones así como las así como las Preguntas Frecuentes del sitio. Aceptas también las Politicas de Privacidad y tratamiento de datos personales.
                                    </label>
                                </div>
                            </div>
                            <div className='row' style={{ backgroundColor: '#F5F5F5' }}>
                                <div className='col-12 my-3'>
                                <button disabled={proceed} type="button" class="btn btn-outline-success w-100">Continuar con el pago</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>Actualmente no tienes productos agregados al carrito</h1>
                )
            }

        </>
    )
}
