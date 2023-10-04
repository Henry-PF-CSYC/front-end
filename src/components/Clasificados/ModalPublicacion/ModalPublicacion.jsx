import { Modal, Button } from 'react-bootstrap';

const ModalPublicacion = ({ show, handleClose, publicacion }) => {
    const cardStyle = {
        maxWidth: 'auto',
        width: 'auto',
        margin: '0px'
    };
    const imgStyle = {
        maxWidth: '16rem',
        maxHeight: '16rem',
        padding: 'auto'
    };
    const headerStyle = {
        display: 'flex',
        justifyContent: 'center'
    };
    return (
        <Modal
            show={show}
            onHide={() => {
                handleClose();
            }}
        >
            <div
                className="card border-0 font-fontGeneral bg-onahau-50/80 mb-0 font-medium"
                style={cardStyle}
            >
                <div className="card-header " style={headerStyle}>
                    <img
                        src={publicacion.image}
                        alt="imagen"
                        className="rounded-md"
                        style={imgStyle}
                    />
                </div>
                <div className="card-body bg-onahau-100/20">
                    <h5 className="card-title">
                        {publicacion.type}: {publicacion.title}
                    </h5>
                    <p className="card-text">{publicacion.description}</p>
                    <p className="card-text">
                        Numero de contacto: {publicacion.contact}
                    </p>
                    <p className="card-text">Precio: ${publicacion.price}</p>
                </div>
            </div>
        </Modal>
    );
};

export default ModalPublicacion;
