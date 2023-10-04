import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../redux/actions";
import { MDBDataTable } from 'mdbreact';

import EditUserModal from "./EditUserModal";
import "./UsuariosAdm.css";

const UsuariosAdm = () => {

  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.allUsers); 

  // Controlar la visibilidad del modales
  const [showEditUserModal, setShowEditUserModal] = useState(false);
 
  // Datos de la fila seleccionada
  const [selectedRow, setSelectedRow] = useState(null);
 
  // Abrir y cerrar modales de edicion de servicio
  const openEditUserModal = () => {setShowEditUserModal(true)};
  const closeEditUserModal = () => {setShowEditUserModal(false)};

  // Despachamos accion para obtener usuarios
  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        await dispatch(getAllUsers({ randomParam: Date.now() }));
      } catch (error) { console.error('Error al obtener usuarios:', error);}};
  obtenerUsuarios()}, [dispatch]); 



  // Verificamos si los datos están disponibles antes de mostrar la tabla
  if (!usuarios || usuarios.length === 0) {
    return <div>Cargando datos...</div>;}

  // Definimos una función para asignar clase segun status
  const getCellStyle = (status) => {
    if (status === 'user') return 'user-cell';  
    if (status === 'banned') return 'banned-cell';  
    if (status === 'contact_admin') return 'contact_admin-cell';  
    else { return 'admin-cell'; } };


  // Boton de edicion de usuario
  const handleRowClick = (rowData) => {
  setSelectedRow(rowData); // Guardamos la data de la fila
  openEditUserModal()}; // Abre el modal
  

  // Definimos las columnas de la tabla
  const columns = [
    { label: 'Email', field: 'email', sort: 'asc', width: 150},
    { label: 'DNI', field: 'dni', sort: 'asc', width: 150},
    { label: 'Nombre', field: 'name', sort: 'asc', width: 150},
    { label: 'Apellido', field: 'lastname', sort: 'asc', width: 150},
    { label: 'Teléfono', field: 'phone', sort: 'asc', width: 150},
    { label: 'Dirección', field: 'address', sort: 'asc', width: 150},
    { label: 'Rol', field: 'role', sort: 'asc', width: 150},
    { label: 'Acción', field: 'action', width: 100}
  ];


  // Mapeamos los usuarios
  const rows = usuarios.map((usuario) => ({
    email: usuario.email,
    dni: usuario.dni,
    name: usuario.name,
    lastname: usuario.lastname,
    phone: usuario.phone,
    address: usuario.address,
    role: <span className={getCellStyle(usuario.role)}>{usuario.role}</span>,
    action:<i onClick={() => handleRowClick(usuario)} class="bi bi-pencil-square userOptionBut"></i>
  }));



// Renderizado
return(
    <div>
        <h2 id="titleAdminUsers" className="adminTitles">Usuarios registrados:</h2>

        <EditUserModal show={showEditUserModal} handleClose={closeEditUserModal} userData={selectedRow}/>

        <MDBDataTable striped  bordered  small  data={{ columns, rows }}  paginationLabel={"<>"}
        infoLabel={['Mostrando del', 'al', 'de', 'usuarios disponibles']} noBottomColumns responsive
        searchLabel="Buscar"  entriesLabel="Entradas a desplegar:"  className="custom-datatable" info={false}
        style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} entries={[15]}/>
    </div>);
}

export default UsuariosAdm;
