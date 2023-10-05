import CardsServicios from '../Servicios/CardsServicios/CardsServicios';
import ModalUsuario from './ModalUsuario/ModalUsuario';
import Rating from '../RatingServices/Rating';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUser,
    putUser,
    getOfferByEmail,
    emptyCart
} from '../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';
import loader from '../../loading.gif';

// Sweetalert
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Loader
import { Rings } from "react-loader-spinner";
import { showLoader, hideLoader } from "../../redux/actions"


import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

import ModalPublicaciones from './ModalPublicaciones/ModalPublicaciones';

const SeccionUsuario = () => {
    const dispatch = useDispatch();

    // Accedemos al estado global del loader
    const isLoading = useSelector((state) => state.isLoading);

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

    const allServicesUser = async () => {
        try {
            const servicesUser = await axios.get(
                `https://csyc.onrender.com/subscription/user/${usuario.email}`
            );
            setServicios(servicesUser.data.subscriptions);
        } catch (error) {
            console.error('Error servicios', error);
        }
    };

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
            dispatch(emptyCart());
            allServicesUser();
        } else {
            allServicesUser();
        }
    };
    useEffect(() => {
        dispatch(getUser(usuario.email));
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUser(user.email));
            dispatch(getOfferByEmail(user.email));
            setDataUser(usuario);
            usuario.email = user.email;
        }
        submitSuscription();
    }, [isAuthenticated]);
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUser(user.email));
            dispatch(getOfferByEmail(user.email));
            setDataUser(usuario);
            usuario.email = user.email;
        }
        submitSuscription();
    }, []);

    const handleClose = () => {
        setShow(false);
        setShow2(false);
    };

    const updateUser = async (data) => {
        try {
            dispatch(showLoader());
            data.image = user.picture;
            setDataUser(data);
            dispatch(await putUser(data));
            dispatch(hideLoader());
            Swal.fire("Datos modificados correctamente", "", "success")
            .then(() => {window.location.reload(200);}); 
        } catch (error) {
            Swal.fire("Ha ocurrido un error al eliminar el clasificado", "", "error")}
        }
  

    const seccion = {
        paddingTop: '85px',
        paddingLeft: '100px',
        paddingRight: '100px'
    };

    const [showRatingModal, setShowRatingModal] = useState(false); // estado para el modal usuario
    // Función para abrir el modal de calificación
    const openRatingModal = (serviceId) => {
        setShowRatingModal((prev) => {
            return {
                ...prev,
                [serviceId]: true // Establece el estado para este servicio en true
            };
        });
    };

    const closeRatingModal = (serviceId) => {
        setShowRatingModal((prev) => {
            return {
                ...prev,
                [serviceId]: false // Establece el estado para este servicio en false
            };
        });
    };

    return (
        <>
          {isLoading && (
            <div className="loader-overlay">
              <div className="loader-container"><Rings color="#007bff" /></div>
            </div>
          )}
      
          {isAuthenticated ? (
            <div className="grid grid-cols-12 pt-28 ml-32 mr-10">
              <div className="col-span-9 grid place-content-center mb-4">
                <span className="font-fontGeneral font-bold text-5xl tracking-wide text-blue-all pl-80">
                  Mi perfil
                </span>
              </div>
              <div className="col-span-3 grid place-content-center mb-4">
                <button
                  className="bg-blue-all rounded-2xl text-lg text-white px-4 py-2"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  Modificar datos personales
                </button>
              </div>
              <div className="col-span-6 grid place-content-center">
                <p className="font-fontGeneral font-bold text-2xl text-gray-palido mb-2">
                  Nombre:{' '}
                  <span className="text-xl font-normal">
                    {dataUser.name}
                  </span>
                </p>
                <p className="font-fontGeneral font-bold text-2xl text-gray-palido mb-2">
                  Apellido:{' '}
                  <span className="text-xl font-normal">
                    {dataUser.lastname}
                  </span>{' '}
                </p>
                <p className="font-fontGeneral font-bold text-2xl text-gray-palido mb-2">
                  Email:{' '}
                  <span className="text-xl font-normal">
                    {isAuthenticated ? user.email : 'Loading'}
                  </span>{' '}
                </p>
                <p className="font-fontGeneral font-bold text-2xl text-gray-palido mb-2">
                  DNI:{' '}
                  <span className="text-xl font-normal">
                    {dataUser.dni}
                  </span>{' '}
                </p>
                <p className="font-fontGeneral font-bold text-2xl text-gray-palido mb-2">
                  Dirección:{' '}
                  <span className="text-xl font-normal">
                    {dataUser.address}
                  </span>{' '}
                </p>
                <p className="font-fontGeneral font-bold text-2xl text-gray-palido mb-2">
                  Teléfono:{' '}
                  <span className="text-xl font-normal">
                    {dataUser.phone}
                  </span>{' '}
                </p>
              </div>
              <div className="col-span-6 grid place-content-center">
                <img
                  className="rounded-full"
                  src={isAuthenticated ? user.picture : loader}
                  width={'163px'}
                  height={'170px'}
                  alt="Imagen de usuario"
                />
              </div>
              <div className="col-span-12 grid place-content-center mt-4">
                <button
                  className="bg-white rounded-2xl text-lg text-blue-all px-4 py-2"
                  onClick={() => {
                    setShow2(true);
                  }}
                >
                  Mis publicaciones
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 pt-28">
              <div className="grid place-content-center">
                <img src={loader} />
              </div>
            </div>
          )}
            <div className="pb-1">
                <div className="grid grid-cols-1">
                    <div className="grid grid-cols-1 my-5">
                        {servicios.length > 0 ? (
                            <div className="grid place-content-center">
                                <p className="font-fontGeneral text-3xl font-bold text-gray-palido">
                                    Mis servicios activos:
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-flow-dense grid-cols-12">
                                <div className="col-span-12 grid place-content-center mb-4">
                                    <p className="font-fontGeneral text-3xl font-bold text-gray-palido">
                                        En el momento no tiene servicios
                                        adquiridos
                                    </p>
                                </div>
                                <div className="col-span-12 grid place-content-center">
                                    <Link to="/servicios">
                                        <button className="bg-blue-all rounded-2xl text-lg text-white px-4 py-2">
                                            Adquirir servicios
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-2 mx-36 mb-20 gap-16">
                        {servicios.length > 0 &&
                            servicios.map((servicio, index) => {
                                return (
                                    <div>
                                        <CardsServicios
                                            key={index}
                                            imagen={servicio['service.image']}
                                            titulo={servicio['service.name']}
                                            descripcion={
                                                servicio['service.description']
                                            }
                                            nombreBoton="Mas Informacion"
                                        />
                                        <div className="my-2 grid place-content-center">
                                            <button
                                                className="bg-blue-all rounded-2xl text-lg text-white px-4 py-2"
                                                onClick={() =>
                                                    openRatingModal(
                                                        servicio.service_id
                                                    )
                                                }
                                            >
                                                Calificar Servicio
                                            </button>
                                            {showRatingModal[
                                                servicio.service_id
                                            ] && (
                                                <Rating
                                                    key={servicio.service_id}
                                                    serviceId={
                                                        servicio.service_id
                                                    }
                                                    show={
                                                        showRatingModal[
                                                            servicio.service_id
                                                        ]
                                                    }
                                                    handleClose={() =>
                                                        closeRatingModal(
                                                            servicio.service_id
                                                        )
                                                    }
                                                />
                                            )}
                                        </div>
                                    </div>
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
