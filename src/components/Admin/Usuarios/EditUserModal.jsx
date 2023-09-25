import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { createOrDesignAdmin, designNewContactEmail, banOrUnbanUser } from "../../../redux/actions";


const EditUserModal = ({ show, handleClose, userData }) => {
  
    
const dispatch = useDispatch()


// Textos de botones con condicion:

// Contacto por defecto
const contactButtonText = userData && userData.role === "contact_admin" ? "Ya es contacto del sitio" : "Designar correo como contacto del sitio";
const contactInfoText = userData && userData.role === "contact_admin"
  ? ` El correo de administrador "${userData ? userData.email : "---"}" ya es contacto del sitio, si quiere cambiarlo, elija otro correo.`
  : ` El correo de administrador "${userData ? userData.email : "---"}" será el que reciba los mensajes y reclamos hechos al sitio.`;

// Rol admin o user
const roleButtonText = userData && userData.role === "admin" ? "Revocar rol de administrador" : "Designar usuario como administrador";
const roleInfoText = userData && userData.role === "admin"
  ? `${userData ? userData.name : "---"} perderá acceso al panel de administrador, sus funciones y privilegios!`
  : `${userData ? userData.name : "---"} tendrá acceso al panel de administrador y todas sus funciones y privilegios.`;

// Ban or Unban
const banButtonText = userData && userData.role === "banned" ? "Desbanear usuario" : "Banear Usuario";
const banInfoText = userData && userData.role === "banned"
  ? ` ${userData ? userData.name : "---"} recuparará acceso a su cuenta y al sitio.`
  : ` Si ${userData ? userData.name : "---"} ha inflingido las normas del sitio, prohibe su acceso al mismo, desactivando su cuenta.`;




// Manejador de designio de administradores
const handleAddAdmin = async () => {

    if (!userData) {return console.log("Datos no cargados aún");}

    const isConfirmed = window.confirm(
    `¿Estás seguro de ${userData.role === "admin" ? "revocar el rol de administrador a" : "designar como administrador a"} ${userData.name}?`);

    if (isConfirmed) {
      const type = userData.role === "admin" ? "unset" : "set";
      const action = await createOrDesignAdmin(userData.email, type);

    if (userData.role === "admin") {
        alert("Rol de administrador revocado exitosamente");
        console.log("Rol de administrador revocado exitosamente")} 

    else{
        alert("Usuario designado como administrador correctamente");
        console.log("Usuario designado como administrador correctamente")}

      dispatch(action);
      setTimeout(() => {window.location.reload();}, 300);
    } else { return alert("Ha ocurrido un error designando administrador/es")}
  };



  const handleDesignContact = async () => {
    if (!userData) {
      return console.log("Datos no cargados aún");}
  
    // Verificar si el usuario actual es administrador
    const isAdmin = userData.role === "admin";
  
    if (!isAdmin) {
      alert("Solo los administradores se pueden designar como contacto");
      return;}
  
    const isContactAdmin = userData.role === "contact_admin";
    const contactConfirmation = isContactAdmin ? "quitar como contacto" : "designar como contacto";
    const confirmationMessage = `¿Estás seguro de que deseas ${contactConfirmation} a ${userData.name}?`;
  
    const isConfirmed = window.confirm(confirmationMessage);
  
    if (isConfirmed) {
      const action = await designNewContactEmail(userData.email);
  
      if (isContactAdmin) {
        alert("Usuario quitado como contacto correctamente");
        console.log("Usuario quitado como contacto correctamente");
      } else {
        alert("Usuario designado como contacto correctamente");
        console.log("Usuario designado como contacto correctamente");
      }
  
      dispatch(action);
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } else {
      return;
    }
  };



// Manejador de ban de usuarios
const handleBanUser = async () => {
    if (!userData) {return console.log("Datos no cargados aún")}
  
    const isBanned = userData.role === "banned";
  
    const actionType = isBanned ? "unban" : "ban";
    const banConfirmation = isBanned ? "desbanear" : "banear";
    const confirmationMessage = `¿Estás seguro de que deseas ${banConfirmation} a ${userData.name}?`;
  
    const isConfirmed = window.confirm(confirmationMessage);
  
    if (isConfirmed) {
      const action = await banOrUnbanUser(userData.email, actionType);
  
      if (isBanned) {
        alert("Usuario desbaneado exitosamente");
        console.log("Usuario desbaneado exitosamente");
      } else {
        alert("Usuario baneado exitosamente");
        console.log("Usuario baneado exitosamente");
      }
  
      dispatch(action);
      setTimeout(() => {window.location.reload();}, 300);
    } else { return alert("Ha ocurrido un error al banear/desbanear al usuario")}
  };





// Renderizado    
return (
    <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
            <Modal.Title>Acciones de usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <div>
                <Button variant={userData && userData.role === "contact_admin" ? "secondary" : "primary"} onClick={handleDesignContact}
                disabled={userData && userData.role === "contact_admin"}>{contactButtonText}</Button><p>{contactInfoText}</p>
            </div>

            <div>
                <Button variant={userData && userData.role === "admin" ? "danger" : "warning"}
                onClick={handleAddAdmin} disabled={!userData}>{roleButtonText}</Button><p>{roleInfoText}</p>
            </div>

            <div>
                <Button variant={userData && userData.role === "banned" ? "primary" : "danger"}
                onClick={handleBanUser} disabled={!userData}>{banButtonText}</Button><p>{banInfoText}</p>
            </div>

        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> Cerrar </Button> 
        </Modal.Footer>

    </Modal>);
};

export default EditUserModal;