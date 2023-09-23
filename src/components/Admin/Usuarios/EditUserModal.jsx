import { Modal, Button } from "react-bootstrap";

const EditUserModal = ({ show, handleClose, userData }) => {
     
    
return (
    <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
            <Modal.Title>Acciones de usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <div>
                <Button variant="primary"> Designar correo como contacto del sitio</Button> 
                <p>El correo de {userData ? userData.name : "---"} será el que reciba los mensajes y reclamos al sitio.</p>
            </div>

            <div>
                <Button variant="warning"> Designar usuario como administrador </Button> 
                <p>{userData ? userData.name : "---"} tendrá acceso al panel de administrador y todas sus funciones y privilegios.</p>
            </div>

            <div>
                <Button variant="danger"> Banear Usuario </Button> 
                <p>Si {userData ? userData.name : "---"} ha inflingido las normas del sitio, prohibe su acceso al mismo, 
                desactivando su cuenta.</p>
            </div>

        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> Cerrar </Button> 
        </Modal.Footer>

    </Modal>);
};

export default EditUserModal;