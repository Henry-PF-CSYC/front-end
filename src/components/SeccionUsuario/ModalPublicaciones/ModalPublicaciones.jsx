import { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {
    deleteOffer,
    getOfferByEmail,
    restaurarOffer
} from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const ModalPublicaciones = ({ show, handleClose, email }) => {
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
    const deletPublicacion = (id) => {
        dispatch(deleteOffer(id, type));
        dispatch(getOfferByEmail(email));
    };
    useEffect(() => {
        dispatch(getOfferByEmail(email));
    }, []);
    const restoreOffer = (id) => {
        dispatch(restaurarOffer(id));
        dispatch(getOfferByEmail(email));
    };

    return (
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
                                            Borrar
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
                                                deletPublicacion(
                                                    publicacion.id
                                                );
                                                getOfferByEmail(email);
                                                // Recarga la página
                                            }}
                                        >
                                            Borrar
                                        </Button>
                                    </div>
                                </div>
                            )
                    )}
            </div>
        </Modal>
    );
};

export default ModalPublicaciones;
