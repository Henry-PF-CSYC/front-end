import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { createOrDesignAdmin, designNewContactEmail, banOrUnbanUser } from "../../../redux/actions";


const EditUserModal = ({ show, handleClose, userData }) => {
     
const dispatch = useDispatch()

const type = "set"
const ban = "ban"


const handleAddAdmin = async () => {
    const isConfirmed = window.confirm("¿Estás seguro de que deseas designar a este usuario como administrador?");
    if(isConfirmed){
    dispatch(await createOrDesignAdmin(userData.email,type))
    alert("Usuario designado como administrador correctamente")
    console.log("Admin ortorgado correctamente")
    setTimeout(() => {window.location.reload()}, 300);}
    else return;
}

const handleDesignContact = async () => {
    const isConfirmed = window.confirm("¿Estás seguro de que deseas designar a este correo de como contacto por defecto?");
    if(isConfirmed){
    dispatch(await designNewContactEmail(userData.email))
    alert("Email de usuario designado como contacto por defecto correctamente")
    console.log("Contacto designado")
    setTimeout(() => {window.location.reload()}, 300);}
    else return;
}

const handleBanUser = async () => {
    const isConfirmed = window.confirm("¿Estás seguro de que deseas banear a este usuario?");
    if(isConfirmed){
    dispatch(await banOrUnbanUser(userData.email,ban))
    alert("Usuario baneado de manera exitosa")
    console.log("Baneo exitoso")
    setTimeout(() => {window.location.reload()}, 300);}
    else return;
}



// Renderizado    
return (
    <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
            <Modal.Title>Acciones de usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <div>
                <Button variant="primary" onClick={()=>{handleDesignContact()}}> Designar correo como contacto del sitio</Button> 
                <p>El correo de {userData ? userData.name : "---"} será el que reciba los mensajes y reclamos al sitio.</p>
            </div>

            <div>
                <Button variant="warning" onClick={()=>{handleAddAdmin()}}> Designar usuario como administrador </Button> 
                <p>{userData ? userData.name : "---"} tendrá acceso al panel de administrador y todas sus funciones y privilegios.</p>
            </div>

            <div>
                <Button variant="danger" onClick={()=>{handleBanUser()}}> Banear Usuario </Button> 
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