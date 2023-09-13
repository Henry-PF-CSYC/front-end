import imagenUsuario from '../../assets/imagenUsuario.png'
import CardsServicios from '../CardsServicios/CardsServicios'
import internet from '../../assets/internet.webp'
import gas from '../../assets/gas.webp'
import agua from '../../assets/agua.jpg'
import { useState } from 'react'


const SeccionUsuario = () => {

    const [viewPassword, setViewPassword] = useState(false)

    const changeViewPassword = () => {
        setViewPassword(!viewPassword)
    }

    const servicios = [
        {
            imagen: internet,
            titulo: 'Internet',
            descripcion: 'Navegando a toda velocidad, ¡Internet conectado!',
            nombreBoton: 'Mas informacion'
        },
        {
            imagen: agua,
            titulo: 'Agua',
            descripcion: 'Pureza Garantizada en Tu Hogar ¡Suscripción Activa!',
            nombreBoton: 'Mas informacion'
        },
        {
            imagen: gas,
            titulo: 'Gas',
            descripcion: 'Calor Confiable Siempre Listo¡Ya Eres Parte de Nuestra Familia!',
            nombreBoton: 'Mas informacion'
        }
    ]

    return (
        <div>
            <div className="row m-5">
                <div className='col-12 d-flex justify-content-end'>
                    <button className='btn btn-dark' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Modificar datos personales</button>
                </div>
                <div className="col-12 d-flex justify-content-center mb-3">
                    <h1>Mi perfil</h1>
                </div>
                <div className="col-10 ps-5">
                    <p>Nombre: Usuario</p>
                    <p>Numero: 999999999</p>
                    <p>Direcion: ——————</p>
                    <p>Email: ——————</p>
                    <p>Contraseña: ——————</p>
                </div>
                <div className="col-2">
                    <img src={imagenUsuario} width={'163px'} height={'170px'} alt='si funciona' />
                </div>
                <div className='col-12 ps-5'>
                    Mis ofertas activas: 123<button className='btn btn-dark p-1 ms-2'>Ver</button>
                </div>
            </div>
            <div style={{ backgroundColor: '#75B3Ac' }} className='pb-1'>
                <div className="row m-5">
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <h1>Mis servicios activos:</h1>
                    </div>
                    {
                        servicios.map((servicio, index) => {
                            return (
                                <div className="col-4 ps-5 my-5">
                                    <CardsServicios
                                        key={index}
                                        imagen={servicio.imagen}
                                        titulo={servicio.titulo}
                                        descripcion={servicio.descripcion}
                                        nombreBoton={servicio.nombreBoton}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border border-bottom-0">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar usuario</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body row">
                                <div className="form-floating mb-3">
                                    <input type="string" className="form-control" id="nombre" placeholder="Pepito" />
                                    <label className='ms-2' htmlFor="floatingNombre">Nombre</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="numero" placeholder="123456" />
                                    <label className='ms-2' htmlFor="floatingNumero">Numero</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="string" className="form-control" id="direccion" placeholder="calle 123" />
                                    <label className='ms-2' htmlFor="floatingDireccion">Direccion</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="correo" placeholder="name@example.com" />
                                    <label className='ms-2' htmlFor="floatingEmail">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type={viewPassword ? 'text' : 'password'} className="form-control" id="contrasena" placeholder="123456abc" />
                                    <label className='ms-2' htmlFor="floatingPassword">Contraseña</label>
                                    <i
                                        className={`bi bi-eye${viewPassword ? '-slash' : ''}`}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            right: '21px',
                                            transform: 'translateY(-50%)',
                                            cursor: 'pointer'
                                        }}
                                        onClick={changeViewPassword}
                                    ></i>
                                </div>

                            </div>
                            <div className="modal-footer border border-top-0">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-primary">Guardar cambios</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeccionUsuario