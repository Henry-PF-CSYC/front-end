import CardsServicios from '../Servicios/CardsServicios/CardsServicios';
import ModalUsuario from './ModalUsuario/ModalUsuario';

import { useAuth0 } from '@auth0/auth0-react';

import internet from '../../assets/Servicios/internet.webp';
import gas from '../../assets/Servicios/gas.webp';
import agua from '../../assets/Servicios/agua.jpg';

import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getUser, postUser } from '../../redux/actions';

const SeccionUsuario = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const { user, isAuthenticated } = useAuth0();
    const pruebaReducr = () => {
        dispatch(getUser(dataUser.email));
        console.log(dataUser);
    };
    const pstUser = () => {
        dispatch(postUser(dataUser));
    };
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUser(user.email));
        }
    });
    const [dataUser, setDataUser] = useState({
        name: '',
        surname: '',
        dni: 0,
        email: isAuthenticated ? user.email : 'loading',
        address: '',
        phone: 0,
        picFile: ''
    });

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
            descripcion:
                'Calor Confiable Siempre Listo¡Ya Eres Parte de Nuestra Familia!',
            nombreBoton: 'Mas informacion'
        }
    ];

    const handleClose = () => {
        setShow(false);
    };

    const updateUser = (data) => {
        setDataUser(data);
        setShow(false);
    };

    return (
        <>
            <div className="row m-5">
                <div className="col-12 d-flex justify-content-end">
                    {/* <button className='btn btn-dark' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Modificar datos personales</button> */}
                    <Button
                        variant="dark"
                        onClick={() => {
                            setShow(true);
                        }}
                    >
                        Modificar datos personales
                    </Button>
                </div>
                <div className="col-12 d-flex justify-content-center mb-3">
                    <h1>Mi perfil</h1>
                </div>
                <div className="col-10 ps-5">
                    <p>Nombre: {dataUser.name}</p>
                    <p>Apellido: {dataUser.surname}</p>
                    <p>Email: {isAuthenticated ? user.email : 'Loading'}</p>
                    <p>DNI: {dataUser.dni}</p>
                    <p>Direcion: {dataUser.address}</p>
                    <p>Telefono: {dataUser.phone}</p>
                </div>
                <div className="col-2">
                    <img
                        src={isAuthenticated ? user.picture : 'cargando'}
                        width={'163px'}
                        height={'170px'}
                        alt="si funciona"
                    />
                </div>
                <div className="col-12 ps-5">
                    Mis ofertas activas: 123
                    <button
                        className="btn btn-dark p-1 ms-2"
                        onClick={pruebaReducr}
                    >
                        Ver
                    </button>
                </div>
                <div className="col-12 ps-5">
                    ddasdas
                    <button className="btn btn-dark p-1 ms-2" onClick={pstUser}>
                        post
                    </button>
                </div>
            </div>
            <div style={{ backgroundColor: '#75B3Ac' }} className="pb-1">
                <div className="row m-5">
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <h1>Mis servicios activos:</h1>
                    </div>
                    {servicios.map((servicio, index) => {
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
                        );
                    })}
                </div>
            </div>
            <ModalUsuario
                show={show}
                dataUser={dataUser}
                handleClose={handleClose}
                updateUser={updateUser}
            />
        </>
    );
};

export default SeccionUsuario;
