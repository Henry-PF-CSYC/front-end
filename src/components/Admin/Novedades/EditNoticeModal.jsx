import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNotice, editNotice } from "../../../redux/actions";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import "../Admin.css"

// Loader
import { Rings } from "react-loader-spinner";
import { showLoader, hideLoader } from "../../../redux/actions";



const EditNoticeModal = ({ show, handleClose, noticeData }) => {

    const dispatch = useDispatch()

    // Inicializamos un estado local con los datos del servicio al abrir modal
    const [editData, setEditData] = useState(noticeData);

    // Accedemos al estado global del loader
    const isLoading = useSelector((state) => state.isLoading); 




    // Cambios enlazados al estado local
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditData({ ...editData, [name]: value });
    };
  

    // Al cambiar de modal, cambian los datos de cada aviso
    useEffect(() => {
      setEditData(noticeData);
    }, [noticeData]);



    // Manejo de envio de formulario
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        dispatch(showLoader());
        dispatch(await editNotice(noticeData.id, editData));
        dispatch(hideLoader());

        Swal.fire("El aviso fue editado exitosamente","", "success").
        then(() => {window.location.reload(300);});
    
      } catch (error) {
        Swal.fire("No se pudo editar el aviso","", "error")
      }
    };


    // Manejando borrado permanente de aviso
    const handleDeleteNotice = () => {
      
      Swal.fire({
        title: "¿Estás seguro de que deseas eliminar este aviso?",
        icon: "warning", showCancelButton: true, confirmButtonText: "Sí", cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            dispatch(showLoader());
            dispatch(await deleteNotice(noticeData.id));
            dispatch(hideLoader());

            Swal.fire({
              title: "Aviso eliminado correctamente",
              icon: "success", confirmButtonText: "OK",})
              .then(() => { window.location.reload(); });
              handleClose();
          
            } catch (error) {
            Swal.fire("Ha ocurrido un error al eliminar el Aviso", "", "error")}}
      });
    };
  
    
    
    

// Renderizado
return (
  <>
    {isLoading && (<div className="loader-background">
                      <div className="loader-container"><Rings color="#007bff"/></div>
                  </div>)}

    <Modal show={show} onHide={handleClose} dialogClassName={`${isLoading ? 'loader-modal' : ''}`}
    backdrop="static" keyboard={false}>

      <Modal.Header closeButton>
        <Modal.Title>{noticeData ? noticeData.title : "No disponible"}</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        
      <Form id="editNoticeForm" onSubmit={handleFormSubmit}>

          <Form.Group controlId="title" className="m-2">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" name="title" onChange={handleChange} maxLength="50" minLength="1" required
            value={editData ? editData.title : "No disponible"} />
          </Form.Group>

          <Form.Group controlId="description" className="m-2">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} style={{ resize:'none'}} name="description" onChange={handleChange}
              maxLength="150" minLength="1" required value={editData ? editData.description : "No disponible"}/>
          </Form.Group>

      </Form>
      

      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleDeleteNotice}> Eliminar aviso </Button>
        <Button variant="primary" type="submit" form="editNoticeForm"> Guardar Cambios </Button>
        <Button variant="secondary" onClick={()=>{handleClose()}}> Descartar </Button>
      </Modal.Footer>

    </Modal>
   </>);
};

export default EditNoticeModal; 