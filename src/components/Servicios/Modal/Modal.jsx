import { Modal } from 'react-bootstrap';
import "./Modal.css";

const ModalServicio = ({ show, handleClose,service }) => {
    const cardStyle = {
        backgroundColor:"white",
        display:"flex",
        flexDirection: "column",
        width:"100%",
        margin: '0px'
    };
    const header={
        maxWidth: "100%",
        boxShadow: '4px 4px 4px 1px rgba(0, 0, 0,0.1)',
        width: "100%",
        padding: "10px", 
        textAlign: "center", 
    };
    const container={
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin:"2rem"
        }
    const comentarios={
        maxWidth:"50%"
    }
    return (
        <Modal
            show={show}
            dialogClassName="modal-90w"
            onHide={() => {
                handleClose();
            }}
        >
            <div style={cardStyle}>
                <div style={header}>opiniones del producto</div>
                <div style={container}>
                    <div><div>rating</div></div>
                    <div>
                        <div>Ordenar: 
                            <select>
                                <option value="Mas Reciente">Fecha</option>
                                <option value="Puntuacion">Puntuación</option>
                            </select>
                            Ordenar por:
                            <select>
                                <option value="Mayor">Mayor</option>
                                <option value="Menor">Menor</option>
                            </select>
                        </div>
                        <div style={comentarios}>comentarios</div>
                    </div>
                </div>
                
            </div>
        </Modal>
    );
};

export default ModalServicio;
