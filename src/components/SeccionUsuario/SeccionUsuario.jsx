import imagenUsuario from '../../assets/imagenUsuario.png'
import CardsServicios from '../CardsServicios/CardsServicios'
import internet from '../../assets/internet.webp'
import gas from '../../assets/gas.webp'
import agua from '../../assets/agua.jpg'
import ModalUsuario from '../ModalUsuario/ModalUsuario'
import { useState } from 'react'
import { Button } from 'react-bootstrap'


const SeccionUsuario = () => {

    const [show, setShow] = useState(false)

    const [dataUser, setDataUser] = useState({
        name: 'Usuario1',
        surname: 'Apellido2',
        email: 'Prueba@gmail.com',
        dni: 123456,
        address: 'calle falsa 123',
        phone: 123456789,
        picFile: ''
    })

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

    const handleClose = () => {
        setShow(false)
    }

    const updateUser = (data) => {
        setDataUser(data)
        setShow(false)
    }

    return (
        <>
            <div className="row m-5">
                <div className='col-12 d-flex justify-content-end'>
                    {/* <button className='btn btn-dark' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Modificar datos personales</button> */}
                    <Button variant='dark' onClick={() => {setShow(true)}}>Modificar datos personales</Button>
                </div>
                <div className="col-12 d-flex justify-content-center mb-3">
                    <h1>Mi perfil</h1>
                </div>
                <div className="col-10 ps-5">
                    <p>Nombre: {dataUser.name}</p>
                    <p>Apellido: {dataUser.surname}</p>
                    <p>Email: {dataUser.email}</p>
                    <p>DNI: {dataUser.dni}</p>
                    <p>Direcion: {dataUser.address}</p>
                    <p>Telefono: {dataUser.phone}</p>
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
            <ModalUsuario show={show} dataUser={dataUser} handleClose={handleClose} updateUser={updateUser}/>
        </>
    )
}

export default SeccionUsuario