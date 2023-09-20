import CardsServicios from '../Servicios/CardsServicios/CardsServicios';
import ModalUsuario from './ModalUsuario/ModalUsuario';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, postUser } from '../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';


const gas = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fgas.webp?alt=media&token=9a8899a4-88be-4150-bafa-0b7738e557e8"
const internet = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Finternet.webp?alt=media&token=cb1c9a73-1eee-427a-9a93-6cefd5f7aa23"
const agua = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fagua.jpg?alt=media&token=b6629946-52ef-40df-9f02-02cf1dba940f"



const SeccionUsuario = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const { user, isAuthenticated } = useAuth0();
    const usuario = useSelector((state) => state.dataUser);
    const pstUser = () => {
        dispatch(postUser(dataUser));
    };

    const [dataUser, setDataUser] = useState({
        name: '',
        lastname: '',
        dni: 0,
        email: isAuthenticated ? user.email : 'loading',
        address: '',
        phone: 0,
        image: isAuthenticated ? user.picture : 'loading'
    });
    useEffect(() => {
        if (isAuthenticated) {
            console.log('me ejecute');
            dispatch(getUser(user.email));
            setDataUser(usuario);
            usuario.email = user.email;
        }
    }, []);

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
            <div class="row m-5">
                <div class="col-12 d-flex justify-content-end">
                    {/* <button class='btn btn-dark' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Modificar datos personales</button> */}
                    <Button
                        variant="dark"
                        onClick={() => {
                            setShow(true);
                        }}
                    >
                        Modificar datos personales
                    </Button>
                </div>
                <div class="col-12 d-flex justify-content-center mb-3">
                    <h1>Mi perfil</h1>
                </div>
                <div class="col-10 ps-5">
                    <p>Nombre: {dataUser.name}</p>
                    <p>Apellido: {dataUser.lastname}</p>
                    <p>Email: {isAuthenticated ? user.email : 'Loading'}</p>
                    <p>DNI: {dataUser.dni}</p>
                    <p>Direcion: {dataUser.address}</p>
                    <p>Telefono: {dataUser.phone}</p>
                </div>
                <div class="col-2">
                    <img
                        src={isAuthenticated ? user.picture : 'cargando'}
                        width={'163px'}
                        height={'170px'}
                        alt="si funciona"
                    />
                </div>
                <div class="col-12 ps-5">
                    <button class="btn btn-dark p-1 ms-2" onClick={pstUser}>
                        Confirmar Datos
                    </button>
                </div>
            </div>
            <div style={{ backgroundColor: '#75B3Ac' }} class="pb-1">
                <div class="row m-5">
                    <div class="col-12 d-flex justify-content-center mt-5">
                        <h1>Mis servicios activos:</h1>
                    </div>
                    {servicios.map((servicio, index) => {
                        return (
                            <div class="col-4 ps-5 my-5">
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
