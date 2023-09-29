import CardsServicios from '../Servicios/CardsServicios/CardsServicios';
import ModalUsuario from './ModalUsuario/ModalUsuario';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, postUser, getOfferByEmail, emptyCart } from '../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';
import loader from "../../loading.gif"

import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import ModalPublicaciones from './ModalPublicaciones/ModalPublicaciones';

const gas =
    'https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fgas.webp?alt=media&token=9a8899a4-88be-4150-bafa-0b7738e557e8';
const internet =
    'https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Finternet.webp?alt=media&token=cb1c9a73-1eee-427a-9a93-6cefd5f7aa23';
const agua =
    'https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fagua.jpg?alt=media&token=b6629946-52ef-40df-9f02-02cf1dba940f';

const SeccionUsuario = () => {
    const dispatch = useDispatch();

    const [params] = useSearchParams();
    const [show, setShow] = useState(false);

    const [servicios, setServicios] = useState([]);
    const susbcriptions = useSelector((state) => state.cartServices);

    const [show2, setShow2] = useState(false);
    const { user, isAuthenticated } = useAuth0();
    let usuario = useSelector((state) => state.dataUser);

    const [dataUser, setDataUser] = useState({
        name: '',
        lastname: '',
        dni: 0,
        email: isAuthenticated ? user.email : 'loading',
        address: '',
        phone: 0,
        image: isAuthenticated ? user.picture : loader
    });

    const allServicesUser = async() => {
        try {
            const servicesUser = await axios.get(`https://csyc.onrender.com/subscription/user/${usuario.email}`)
        setServicios(servicesUser.data.subscriptions);
        } catch (error) {
            console.error('Error servicios', error);
        }
        
    }
    
    const submitSuscription = async () => {
        if (params.get('status')) {
            const ids = [];
            susbcriptions.forEach((susbcription) => {
                ids.push(susbcription.id);
            });
            const data = {
                user_email: usuario.email,
                service_ids: ids
            };
            const saveSuscription = await axios.post(
                'https://csyc.onrender.com/subscription',
                data
            );
            dispatch(emptyCart())
            allServicesUser()
        }else{
            allServicesUser()
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUser(user.email));
            dispatch(getOfferByEmail(user.email));
            setDataUser(usuario);
            usuario.email = user.email;
        }
        submitSuscription();
    },[isAuthenticated]);


    const handleClose = () => {
        setShow(false);
        setShow2(false);
    };

    const updateUser = (data) => {
        setDataUser(data);
        dispatch(postUser(dataUser));
        setShow(false);
    };

    const seccion = {
        paddingTop: '85px',
        paddingLeft: '100px',
        paddingRight: '100px'
    };

    return (
        <>{isAuthenticated?
            (<div class="row" style={seccion}>
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
                        src={isAuthenticated ? user.picture : loader}
                        width={'163px'}
                        height={'170px'}
                        alt="si funciona"
                    />
                </div>
                <div class="col-12 ps-5">
                    <button
                        class="btn btn-dark p-1 ms-2"
                        onClick={() => {
                            setShow2(true);
                        }}
                    >
                        Mis publicaciones
                    </button>
                </div>
            </div>): 
            (<div class="d-flex justify-content-center" >
                <img 
                src={loader}
                />
            </div>)}
            <div style={{ backgroundColor: '#75B3Ac' }} class="pb-1">
                <div class="row m-5">
                    <div class="col-12 d-flex justify-content-center mt-5">
                        <h1>Mis servicios activos:</h1>
                    </div>
                    {servicios.length > 0 &&
                        servicios.map((servicio, index) => {
                            return (
                                <div class="col-3 ps-5 my-5">
                                    <CardsServicios
                                        key={index}
                                        imagen={servicio['service.image']}
                                        titulo={servicio['service.name']}
                                        descripcion={servicio['service.description']}
                                        nombreBoton="Mas Informacion"
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
            <ModalPublicaciones
                email={usuario.email}
                show={show2}
                handleClose={handleClose}
            />
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
