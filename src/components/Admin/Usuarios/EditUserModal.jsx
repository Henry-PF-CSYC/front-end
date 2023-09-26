import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { createOrDesignAdmin, designNewContactEmail, banOrUnbanUser } from "../../../redux/actions";


const EditUserModal = ({ show, handleClose, userData }) => {
  
    
  const dispatch = useDispatch()

  // Status de usuario para evaluar disposicion de botones y textos
  const isUser = userData && userData.role === "user";
  const isContactAdmin = userData && userData.role === "contact_admin";
  const isAdmin = userData && userData.role === "admin";
  const isBanned = userData && userData.role === "banned";


  // Textos de botones y su respectivo texto según el status del usuario:
  let contactButtonText = "Designar administrador como contacto del sitio";
  let contactInfoText = `El usuario con correo "${userData && userData.email}", será el que reciba los mensajes y reclamos hechos al sitio, 
  manteniendo los permisos y beneficios de administrador.`;

  let roleButtonText = "Designar como administrador";
  let roleInfoText = ` ${userData && userData.name} recibirá permisos de administrador, pudiendo acceder al panel y modificar los
  parámetros de la página.`;

  let banButtonText = "Banear Usuario";
  let banInfoText = `Si ${userData && userData.name} ha infringido las normas del sitio, se le prohibirá el acceso al mismo, desactivando su cuenta.`;

  // Verificamos el rol del usuario
  if (userData) {
    
    if (userData.role === "contact_admin") {
      contactButtonText = "Ya es contacto del sitio";
      contactInfoText = `El usuario con correo "${userData && userData.email}" es el contacto predeterminado del sitio. Si quiere 
      realizar alguna accion con este usuario, primero designe a otro como contacto para proceder de manera segura. 
      Recuerde que al hacer esto, ${userData && userData.name} obtendrá el rol de administrador normal.`;

    } else if (userData.role === "admin") {
      roleButtonText = "Revocar rol de administrador";
      roleInfoText = `A ${userData && userData.name} se le dará el rol de usuario, perdiendo acceso al panel de administrador, sus funciones y privilegios.`;

    
    } else if (userData.role === "banned") {
      banButtonText = "Desbanear usuario";
      banInfoText = ` Para realizar acciones con este usuario, tendrá que desbanearlo. Al hacer esto, ${userData && userData.name} 
      recuperará acceso a su cuenta y al sitio, adquiriendo el rol de usuario,`;
    }
  };



  // Controlador de designio de administradores
  const handleAddAdmin = async () => {

  if (!userData) {return console.log("Datos no cargados aún");}

  const isConfirmed = window.confirm(`¿Estás seguro de ${userData.role === "admin" ? "revocar el rol de administrador a" : "designar como administrador a"} ${userData.name}?`);

  if (isConfirmed) {
    const type = userData.role === "admin" ? "unset" : "set";
    const action = createOrDesignAdmin(userData.email, type);

  if (userData.role === "admin") { await dispatch(action);
    alert("Rol de administrador revocado exitosamente")} 

  else{ await dispatch(action);
    alert("Usuario designado como administrador correctamente")}

  setTimeout(() => {window.location.reload();}, 300);
    } else { return alert("Ha ocurrido un error designando administrador/es")}
  };



  // Controlador para designar contactos
  const handleDesignContact = async () => {
    if (!userData) {
      console.log("Datos no cargados aún");}
      const isConfirmed = window.confirm(`¿Estás seguro de que deseas designar como contacto a ${userData.name}?`);
  
    if (isConfirmed) {
      await dispatch(designNewContactEmail(userData.email));
      alert("Usuario designado como contacto correctamente");
      setTimeout(() => {window.location.reload();}, 300);

    } else { return alert("Ha ocurrido un error al designar como contacto");}
  };



  // Controlador de ban de usuarios
  const handleBanUser = async () => {
      if (!userData) {return console.log("Datos no cargados aún")}
    
      const isBanned = userData.role === "banned";
      const actionType = isBanned ? "unban" : "ban";
      const banConfirmation = isBanned ? "desbanear" : "banear";
      const confirmationMessage = `¿Estás seguro de que deseas ${banConfirmation} a ${userData.name}?`;
      const isConfirmed = window.confirm(confirmationMessage);
    
      if (isConfirmed) {
        const action = banOrUnbanUser(userData.email, actionType);
    
        if (isBanned) { await dispatch(action);
        alert("Usuario desbaneado exitosamente")

        } else {await dispatch(action);
        alert("Usuario baneado exitosamente")}
    
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

            {!isBanned &&  !isUser &&( <div>
                <Button variant={userData && userData.role === "contact_admin" ? "secondary" : "primary"} onClick={handleDesignContact}
                disabled={userData && userData.role === "contact_admin"}>{contactButtonText}</Button><p>{contactInfoText}</p>
            </div>)}

            {!isBanned && !isContactAdmin &&  ( <div>
                <Button variant={userData && userData.role === "admin" ? "danger" : "warning"}
                onClick={handleAddAdmin} disabled={!userData}>{roleButtonText}</Button><p>{roleInfoText}</p>
            </div>)}
   

            {!isContactAdmin && !isAdmin && ( <div>
                <Button variant={userData && userData.role === "banned" ? "primary" : "danger"}
                onClick={handleBanUser} disabled={!userData}>{banButtonText}</Button><p>{banInfoText}</p>
            </div>)}
   
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> Cerrar </Button> 
        </Modal.Footer>

    </Modal>);
};

export default EditUserModal;