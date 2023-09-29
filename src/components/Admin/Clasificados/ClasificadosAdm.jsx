import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getClasificados } from "../../../redux/actions";
import { MDBDataTable } from 'mdbreact';
import { deleteOffer } from "../../../redux/actions";
import "./ClasificadosAdm.css";

// Sweetalert
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';

// Loader
import { Rings } from "react-loader-spinner";
import "../Admin.css"
import { showLoader, hideLoader } from "../../../redux/actions";



const ClasificadosAdm = () => {

  const dispatch = useDispatch();

  // Traemos clasificados
  const clasificados = useSelector((state) => state.clasificados); 

  // Accedemos al estado global del loader
  const isLoading = useSelector((state) => state.isLoading); 




  // Despachamos accion para obtener clasificados
  useEffect(() => {
    const obtenerClasificados = async () => {
      try {
        await dispatch(getClasificados({ randomParam: Date.now() }));
      } catch (error) { console.error('Error al obtener clasificados:', error);}};
  obtenerClasificados()}, [dispatch]); 


  // Verificamos si los datos están disponibles antes de mostrar la tabla
  if (!clasificados || clasificados.length === 0) {
    return <div>Cargando datos... esto suele suceder cuando no los hay!</div>;}

  
  // Definimos una función para asignar clase segun tipo de publicacion
  const getCellStyle = (status) => {
    if (status === 'compra') {return 'compra-cell'; } 
    else if (status === 'venta') {return 'venta-cell'; } 
    else return 'se-busca-cell';}



 // Manejando borrado permanente de clasificado con SweetAlert
const handleDeleteOffer = (clasificadoId) => {
  Swal.fire({
    title: "¿Estás seguro de que deseas eliminar este clasificado?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "Cancelar",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        dispatch(showLoader());
        await dispatch(deleteOffer(clasificadoId, "hard"));
        dispatch(hideLoader());
        Swal.fire("Clasificado eliminado correctamente", "", "success")
        .then(() => {window.location.reload(200);});
      } catch (error) {
        Swal.fire("Ha ocurrido un error al eliminar el clasificado", "", "error");
      }
    }
  });
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

        {isLoading && (<div className="loader-offer"><Rings color="#007bff"/></div>)}

        <h1 id="titleAdminUsers">Clasificados activos:</h1>
        
        <MDBDataTable striped bordered small data={{ columns, rows }}  noBottomColumns  responsive
        infoLabel={['Mostrando del', 'al', 'de', 'clasificados disponibles']}  paginationLabel={"<>"} 
        searchLabel="Buscar" entriesLabel="Entradas a desplegar:" className="custom-datatable"/>
    </div>);
}

export default ClasificadosAdm;