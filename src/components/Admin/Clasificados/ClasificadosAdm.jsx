import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getClasificados } from "../../../redux/actions";
import { MDBDataTable } from 'mdbreact';
import { deleteClasificado } from "../../../redux/actions";
import "./ClasificadosAdm.css";


const ClasificadosAdm = () => {

  const dispatch = useDispatch();
  const clasificados = useSelector((state) => state.clasificados); 
  

  // Despachamos accion para obtener clasificados
  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        await dispatch(getClasificados());
      } catch (error) { console.error('Error al obtener clasificados:', error);}};
  obtenerUsuarios()}, [dispatch]); 


  // Verificamos si los datos están disponibles antes de mostrar la tabla
  if (!clasificados || clasificados.length === 0) {
    return <div>Cargando datos... esto suele suceder cuando no los hay!</div>;}

  
  // Definimos una función para asignar clase segun tipo de publicacion
  const getCellStyle = (status) => {
    if (status === 'compra') {return 'compra-cell'; } 
    else { return 'trabajo-cell'; } };


  // Manejando borrado permanente de servicio
  const handleDeleteOffer = (clasificadoId) => {
  // Alert para confirmar la acción
  console.log(clasificadoId);
  const isConfirmed = window.confirm("¿Estás seguro de que deseas eliminar este clasificado?");

  if (isConfirmed) {
    // Si el usuario confirmó, realiza la acción de eliminación
    
    dispatch(deleteClasificado(clasificadoId));
    alert("Clasificado eliminado correctamente");

    // Recargamos página
    setTimeout(() => {window.location.reload()}, 300);}
  };


  // Definimos las columnas de la tabla
  const columns = [
    { label: "ID", field: "id", sort: "asc", width: 150 },
    { label: "Usuario", field: "user", sort: "asc", width: 150 },
    { label: "Título", field: "title", sort: "asc", width: 150 },
    { label: "Descripción", field: "description", sort: "asc", width: 200 },
    { label: "Contacto", field: "contact", sort: "asc", width: 100 },
    { label: "Tipo", field: "type", sort: "asc", width: 100,},
    { label: 'Borrar', field: 'delete', width: 100}
  ];


  // Mapeamos los usuarios
  const rows = clasificados.map((clasificado) => ({
    id: clasificado.id,
    user: clasificado.user_id,
    title: clasificado.title,
    description: clasificado.description,
    contact: clasificado.contact,
    type: <span className={getCellStyle(clasificado.type)}>{clasificado.type}</span>,
    delete: <i onClick={() => handleDeleteOffer(clasificado.id)} class="bi bi-trash3-fill clasificadoDeleteBut"></i>
  }))
  



  // Renderizado
  return (
    <div>

        <h1 id="titleAdminUsers">Clasificados activos:</h1>
        
        <MDBDataTable
        striped
        bordered
        small
        data={{ columns, rows }}
        infoLabel={['Mostrando del', 'al', 'de', 'clasificados disponibles']} 
        searchLabel="Buscar" 
        entriesLabel="Entradas a desplegar:"
        className="custom-datatable"/>

    </div>);
}

export default ClasificadosAdm;