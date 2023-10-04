import CardsServicios from '../Servicios/CardsServicios/CardsServicios';
import ModalUsuario from './ModalUsuario/ModalUsuario';
import Rating from '../RatingServices/Rating';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, putUser, getOfferByEmail, emptyCart } from '../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';
import loader from "../../loading.gif"

import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

import ModalPublicaciones from './ModalPublicaciones/ModalPublicaciones';


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
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUser(user.email));
            dispatch(getOfferByEmail(user.email));
            setDataUser(usuario);
            usuario.email = user.email;
        }
        submitSuscription();
    },[]);

    const handleClose = () => {
        setShow(false);
        setShow2(false);
    };

    const updateUser = (data) => {
        setDataUser(data);
        dispatch(putUser(dataUser));
        setShow(false);
    };

    const seccion = {
        paddingTop: '85px',
        paddingLeft: '100px',
        paddingRight: '100px'
    };

    const [showRatingModal, setShowRatingModal] = useState(false);// estado para el modal usuario 
    // Función para abrir el modal de calificación
    const openRatingModal = (serviceId) => {
        setShowRatingModal((prev) => {
          return {
            ...prev,
            [serviceId]: true, // Establece el estado para este servicio en true
          };
        });
      };
      
      const closeRatingModal = (serviceId) => {
        setShowRatingModal((prev) => {
          return {
            ...prev,
            [serviceId]: false, // Establece el estado para este servicio en false
          };
        });
      };
      

    return (
        <>{isAuthenticated?
            (<div className="row m-0" style={seccion}>
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
                <div className='col-3'></div>
                <div className="col-4">
                    <p>Nombre: {dataUser.name}</p>
                    <p>Apellido: {dataUser.lastname}</p>
                    <p>Email: {isAuthenticated ? user.email : 'Loading'}</p>
                    <p>DNI: {dataUser.dni}</p>
                    <p>Direcion: {dataUser.address}</p>
                    <p>Telefono: {dataUser.phone}</p>
                </div>
                <div className="col-2">
                    <img
                        src={isAuthenticated ? user.picture : loader}
                        width={'163px'}
                        height={'170px'}
                        alt="si funciona"
                    />
                </div>
                <div className='col-5'></div>
                <div className="col-2">
                    <button
                        className="btn btn-dark p-1 ms-2"
                        onClick={() => {
                            setShow2(true);
                        }}
                    >
                        Mis publicaciones
                    </button>
                </div>
            </div>): 
            (<div className="d-flex justify-content-center" >
                <img 
                src={loader}
                />
            </div>)}
            <div className="pb-1">
                <div className="grid grid-cols-1">
                    <div className="grid grid-cols-1 my-5">
                        {
                            servicios.length > 0 ? (
                                <div className='grid place-content-center'>
                                    <p className='font-fontGeneral text-3xl font-bold text-gray-palido'>Mis servicios activos:</p>
                                </div>
                            ) : (
                                <div className='row'>
                                    <div className='col-12 d-flex justify-content-center'>
                                        <h1>En el momento no tiene servicios adquiridos</h1>
                                    </div>
                                    <div className='col-12 d-flex justify-content-center'>
                                        <Link to='/servicios'>
                                            <Button variant='dark'>
                                                Adquirir servicios
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='grid grid-cols-2 mx-36 gap-5'>
                        {servicios.length > 0 &&
                            servicios.map((servicio, index) => {
                                return (
                                    <>
                                        <CardsServicios
                                            key={index}
                                            imagen={servicio['service.image']}
                                            titulo={servicio['service.name']}
                                            descripcion={servicio['service.description']}
                                            nombreBoton="Opiniones"
                                            type={'internet'}
                                            index={index}
                                            openRating={openRatingModal}
                                        />
                                        {/* <button onClick={openRatingModal}>Calificar Servicio</button> */}
                                        {showRatingModal && (
                                            <Rating
                                                serviceId={servicio.service_id}
                                                show={showRatingModal}
                                                handleClose={closeRatingModal}
                                            />)}
                                    </>
                                );
                            })}
                    </div>
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