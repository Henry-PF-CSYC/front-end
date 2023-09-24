import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { createOrDesignAdmin } from "../../../redux/actions";


const EditUserModal = ({ show, handleClose, userData }) => {
     
const dispatch = useDispatch()
const type = "set"

const handleAddAdmin = async () => {
    dispatch(await createOrDesignAdmin(userData.email,type))
    alert("Usuario designado como administrador correctamente")
}





// Renderizado    
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
                <Button variant="warning" onClick={()=>{handleAddAdmin()}}> Designar usuario como administrador </Button> 
                <p>{userData ? userData.name : "---"} tendrá acceso al panel de administrador y todas sus funciones y privilegios.</p>
            </div>

            <div>
                <Button variant="danger"> Banear Usuario </Button> 
                <p>Si {userData ? userData.name : "---"} ha inflingido las normas del sitio, prohibe su acceso al mismo, 
                desactivando su cuenta.</p>
            </div>

            <div>
                <Button variant="secondary" onClick={()=>{console.log(userData)}}> Ver datos </Button> 
            </div>

        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> Cerrar </Button> 
        </Modal.Footer>

    </Modal>);
};

export default EditUserModal;