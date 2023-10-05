import { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {
    getClasificados,
    clearClasificados,
    deleteOffer,
    getOfferByEmail,
    restaurarOffer
} from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

// Sweetalert
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';

// Loader
import { Rings } from "react-loader-spinner";
import { showLoader, hideLoader } from "../../../redux/actions";


const ModalPublicaciones = ({ show, handleClose, email }) => {

    // Accedemos al estado global del loader
    const isLoading = useSelector((state) => state.isLoading); 

    const cardStyle = {
        maxWidth: '20rem',
        width: '20rem',
        margin: '15px'
    };
    const descripcionStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'normal'
    };
    const container = {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginBottom: '15px',
        width: '100%'
    };
    const line = {
        width: '100%',
        marginLeft: '15px',
        marginRight: '15px'
    };
    const dispatch = useDispatch();

    const type = 'soft';

    let publicaciones = useSelector((state) => state.publicacionesusuario);

      // Despachamos accion para obtener clasificados
      useEffect(() => {
        const obtenerClasificados = async () => {
          try {
            dispatch(showLoader());
            dispatch(await getOfferByEmail({ randomParam: Date.now() }, email));
            dispatch(hideLoader());
      } catch (error) { console.error('Error al obtener clasificados:', error);}};
        obtenerClasificados()}, [dispatch]);
    

    const deletPublicacion = async (id) => {
        Swal.fire({
            title: "¿Estás seguro de que deseas desactivar este clasificado?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "Cancelar",
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
        dispatch(showLoader());
        dispatch(await deleteOffer(id, type))
        dispatch(hideLoader());
        Swal.fire("Clasificado desactivado correctamente", "", "success")
        .then(async () => dispatch(await getOfferByEmail( email)))

      } catch (error) {
        Swal.fire("Ha ocurrido un error al eliminar el clasificado", "", "error");
      }
    }
  });
};


        


    const restoreOffer = async (id) => {
        Swal.fire({
            title: "¿Estás seguro de que deseas reactivar este clasificado?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "Cancelar",
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
        dispatch(showLoader());
        dispatch(await restaurarOffer(id))
        dispatch(hideLoader());
        Swal.fire("Clasificado reactivado correctamente", "", "success")
        .then(async () => dispatch(await getOfferByEmail( email)))

      } catch (error) {
        Swal.fire("Ha ocurrido un error al reactivar el clasificado", "", "error");
      }
    }
  });
};
   



 // Manejando borrado permanente de clasificado
 const handleDeleteOffer = (clasificadoId) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar este clasificado?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          dispatch(showLoader());
          dispatch(await deleteOffer(clasificadoId, "hard"));
          dispatch(hideLoader());
          Swal.fire("Clasificado eliminado correctamente", "", "success")
          .then(async () => dispatch(await clearClasificados( email)))
          .then(() => {window.location.reload(200);}); 

        } catch (error) {
          Swal.fire("Ha ocurrido un error al eliminar el clasificado", "", "error");
        }
      }
    });
  };







    return (
        <>

{isLoading && (<div className="loader-background">
                            <div className="loader-container"><Rings color="#007bff"/></div>
                          </div>)}



        <Modal
            size="xl"
            show={show}
            onHide={() => {
                handleClose();
            }}
        >
            <div
                style={container}
                className="flex flex-row font-fontGeneral bg-gradient-to-b to-onahau-50 from-onahau-300/30 rounded-md justify-around"
            >
                <h3 style={line}>Publicaciones Activas:</h3>
                <hr style={line} />
                {publicaciones.length > 0 &&
                    publicaciones.map(
                        (publicacion) =>
                            !publicacion.deletedAt && (
                                <div
                                    className="card  bg-onahau-50/80 mb-3 max-w-xs w-80 m-3 shadow-xl"
                                    style={cardStyle}
                                >
                                    <div className="card-header flex flex-row justify-center">
                                        <img
                                            className="h-40 max-w-xs max-h-48 m-auto rounded-md"
                                            src={publicacion.image}
                                            alt="imagen"
                                        />
                                    </div>
                                    <div className="card-body bg-onahau-100/20">
                                        <h5 className="card-title">
                                            {publicacion.type}:{' '}
                                            {publicacion.title}
                                        </h5>
                                        <p
                                            className="card-text overflow-hidden text-ellipsis line-clamp-4 whitespace-normal h-11"
                                            style={descripcionStyle}
                                        >
                                            {publicacion.description}
                                        </p>
                                        <p className="card-text">
                                            Contacto: {publicacion.contact}
                                        </p>
                                        <p className="card-text">
                                            Precio: {publicacion.price}
                                        </p>{' '}
                                        <Button
                                            onClick={() => {
                                                deletPublicacion(
                                                    publicacion.id
                                                );
                                                getOfferByEmail(email);
                                                // Recarga la página
                                            }}
                                        >
                                            Desactivar 
                                        </Button>
                                    </div>
                                </div>
                            )
                    )}
                <h3 style={line}>Publicaciones borradas:</h3>
                <hr style={line} />
                {publicaciones.length > 0 &&
                    publicaciones.map(
                        (publicacion) =>
                            publicacion.deletedAt && (
                                <div
                                    className="card  bg-onahau-50/80 mb-3 max-w-xs w-80 m-3 shadow-xl"
                                    style={cardStyle}
                                >
                                    <div className="card-header flex flex-row justify-center">
                                        <img
                                            className="h-40 max-w-xs max-h-48 m-auto rounded-md"
                                            src={publicacion.image}
                                            alt="imagen"
                                        />
                                    </div>
                                    <div className="card-body bg-onahau-100/20">
                                        <h5 className="card-title">
                                            {publicacion.type}:{' '}
                                            {publicacion.title}
                                        </h5>
                                        <p
                                            className="card-text overflow-hidden text-ellipsis line-clamp-4 whitespace-normal h-11"
                                            style={descripcionStyle}
                                        >
                                            {publicacion.description}
                                        </p>
                                        <p className="card-text">
                                            Contacto: {publicacion.contact}
                                        </p>
                                        <p className="card-text">
                                            Precio: {publicacion.price}
                                        </p>{' '}
                                        <Button
                                            onClick={() => {
                                                restoreOffer(
                                                    publicacion.id
                                                );
                                                getOfferByEmail(email);
                                                // Recarga la página
                                            }}
                                        >
                                            Reactivar
                                        </Button>

                                        <Button
                                            onClick={() => {
                                                handleDeleteOffer(
                                                    publicacion.id
                                                );
                                                getOfferByEmail(email);
                                              
                                            }}
                                        >
                                            Borrar definitivamente
                                        </Button>
                                    </div>
                                </div>
                            )
                    )}
            </div>
        </Modal>
        </>
    );
};

export default ModalPublicaciones;
