import { Modal, Button } from 'react-bootstrap';

const ModalPublicaciones = ({
    show,
    handleClose,
    publicaciones,
    deletPublicacion
}) => {
    const cardStyle = {
        maxWidth: '20rem',
        width: '20rem',
        margin: '15px'
    };
    const imgStyle = {
        maxWidth: '16rem',
        padding: 'auto'
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
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: '15px',
        width: '100%'
    };
    const line = {
        width: '100%',
        marginLeft: '15px',
        marginRight: '15px'
    };
    return (
        <Modal
            size="xl"
            show={show}
            onHide={() => {
                handleClose();
            }}
        >
            <div style={container}>
                <h3 style={line}>Publicaciones Activas:</h3>
                <hr style={line} />
                {publicaciones.map(
                    (publicacion) =>
                        !publicacion.deletedAt && (
                            <div
                                className="card bg-light mb-0"
                                style={cardStyle}
                            >
                                <div className="card-header">
                                    <img
                                        src={publicacion.image}
                                        alt="imagen"
                                        style={imgStyle}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {publicacion.type}: {publicacion.title}
                                    </h5>
                                    <p
                                        className="card-text"
                                        style={descripcionStyle}
                                    >
                                        {publicacion.description}
                                    </p>
                                    <p className="card-text">
                                        {publicacion.contact}
                                    </p>
                                    <p className="card-text">
                                        {publicacion.price}
                                    </p>{' '}
                                    <Button
                                        onClick={() =>
                                            deletPublicacion(publicacion.id)
                                        }
                                    >
                                        Borrar
                                    </Button>
                                </div>
                            </div>
                        )
                )}
                <h3 style={line}>Publicaciones borradas:</h3>
                <hr style={line} />
                {publicaciones.map(
                    (publicacion) =>
                        publicacion.deletedAt && (
                            <div
                                className="card bg-light mb-0"
                                style={cardStyle}
                            >
                                <div className="card-header">
                                    <img
                                        src={publicacion.image}
                                        alt="imagen"
                                        style={imgStyle}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {publicacion.type}: {publicacion.title}
                                    </h5>
                                    <p
                                        className="card-text"
                                        style={descripcionStyle}
                                    >
                                        {publicacion.description}
                                    </p>
                                    <p className="card-text">
                                        {publicacion.contact}
                                    </p>
                                    <p className="card-text">
                                        {publicacion.price}
                                    </p>{' '}
                                    <Button
                                        onClick={() =>
                                            deletPublicacion(publicacion.id)
                                        }
                                    >
                                        Restaurar
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
