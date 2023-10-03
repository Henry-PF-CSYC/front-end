import { getAllRating, deleteRatingById } from "../../../redux/actions"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MDBDataTable } from 'mdbreact';

// Sweetalert
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';

// Loader
import { Rings } from "react-loader-spinner";
import "../Admin.css"
import { showLoader, hideLoader } from "../../../redux/actions";



const Reseñas = () =>{

    const dispatch = useDispatch();

    // Accedemos al estado global del loader
    const isLoading = useSelector((state) => state.isLoading);



    
    // Despachamos accion para obtener clasificados
    useEffect(() => {
    const obtenerReseñas = async () => {
      try {
        await dispatch(getAllRating({ randomParam: Date.now() }));
      } catch (error) { console.error('Error al obtener reseñas:', error);}};
    obtenerReseñas()}, [dispatch]); 
  
    // Guardamos reviews
    const reviews = useSelector((state) => state.allRating); 

    


    // Manejando borrado permanente de reseña
    const handleDeleteOffer = (reseñaId) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar esta reseña?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          dispatch(showLoader());
          console.log(reseñaId);
          dispatch(await deleteRatingById(reseñaId));
          
          dispatch(hideLoader());
          Swal.fire("Reseña eliminada correctamente", "", "success")
          .then(() => {window.location.reload(200);});
        } catch (error) {
          Swal.fire("Ha ocurrido un error al eliminar la reseña", "", "error");
        }
      }
    });
  };
  
  


    // Definimos las columnas de la tabla
    const columns = [
      { label: "ID", field: "id", sort: "asc", width: 150 },
      { label: "Rating", field: "rating", sort: "asc", width: 150 },
      { label: "Comentario", field: "comment", sort: "asc", width: 150 },
      { label: "User Email", field: "user_id", sort: "asc", width: 200 },
      { label: "ID de Servicio", field: "service_id", sort: "asc", width: 100 },
      { label: 'Borrar', field: 'delete', width: 100}
    ];
  
  
    // Mapeamos los usuarios
    const rows = reviews.map((review) => ({
      id: review.id,
      rating: review.user_id,
      comment: review.comment,
      user_id: review.user_id,
      service_id: review.service_id,
      delete: <i onClick={() => handleDeleteOffer(review.id)} class="bi bi-trash3-fill clasificadoDeleteBut"></i>
    }))
    


    // Renderizado
  return (
    <div>
       {isLoading && (
    <div className="loader-overlay">
      <div className="loader-container"><Rings color="#007bff" /></div>
    </div>
  )}

      <h2 id="titleAdminUsers" className="adminTitles">Reseñas:</h2>
      
      <MDBDataTable striped bordered small data={{ columns, rows }}  noBottomColumns  responsive
      infoLabel={['Mostrando del', 'al', 'de', 'clasificados disponibles']}  paginationLabel={"<>"} 
      searchLabel="Buscar" entriesLabel="Entradas a desplegar:" className="custom-datatable" info={false}
      style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} entries={[15]}/>
  </div>);
}


export default Reseñas