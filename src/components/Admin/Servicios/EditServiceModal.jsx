import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateService, deleteService } from "../../../redux/actions";
import { firebase } from "../../Firebase/firebase"
import Swal from 'sweetalert2';
import "./Styles.css"

const EditServiceModal = ({ show, handleClose, serviceData }) => {

    const dispatch = useDispatch()

    // Inicializamos un estado local con los datos del servicio al abrir modal
    const [editData, setEditData] = useState(serviceData);

    // Estado local para nueva imagen a subir
    const [selectedImage, setSelectedImage] = useState("");

    // Cambios enlazados al estado local
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditData({ ...editData, [name]: value });
    };
  
    // Al cambiar de modal, cambian los datos de cada servicio
    useEffect(() => {
      setEditData(serviceData);
    }, [serviceData]);


    // Manejador para subida de imágenes seguras
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    
    // Verificar si se seleccionó un archivo
    if (imageFile) {
    // Verificar si el tipo de archivo es una imagen (por ejemplo, png, jpeg, jpg, gif)
    const allowedImageTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
    if (allowedImageTypes.includes(imageFile.type)) {
        // El archivo es una imagen válida, puedes continuar con el manejo de la imagen
        setSelectedImage(imageFile);
    } else {
        // El archivo no es una imagen válida, muestra un mensaje de error o realiza alguna acción
        alert("Por favor, seleccione una imagen válida (png, jpeg, jpg, gif).");
        event.target.value = null;}
    }
  };
  


    // Manejo de envio de formulario
    const handleFormSubmit = async (event) => {
      event.preventDefault();
    
      try {
       
         // Inicializamos la nueva imagen como nula
        let newImageUrl = null;
    
        // Si hay una nueva imagen seleccionada
        if (selectedImage) {
          // Usamos la función de Firebase para obtener URL de la nueva imagen
          newImageUrl = await firebase(selectedImage, "admin-services/");
        } else {
          // Si no hay una nueva imagen seleccionada, usamos la URL existente
          newImageUrl = editData.image;
        }
    
        // Actualizamos el estado local con la nueva URL de la nuevo imagen o existente
        setEditData({ ...editData, image: newImageUrl });
    
        // Despachamos la acción para actualizar el servicio con los datos editados
        dispatch(updateService(editData.id, { ...editData, image: newImageUrl }));
  
        alert("El servicio fue editado correctamente");
        setTimeout(() => {window.location.reload();}, 300);
    
      } catch (error) {
        console.error("Error al editar el servicio:", error);
      }
    };


    // Manejando borrado permanente de servicio
    const handleDeleteService = () => {
      
      Swal.fire({
        title: "¿Estás seguro de que deseas eliminar este servicio?",
        icon: "warning", showCancelButton: true, confirmButtonText: "Sí", cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await dispatch(deleteService(serviceData.id));
            
            Swal.fire({
              title: "Servicio eliminado correctamente",
              icon: "success", confirmButtonText: "OK",})
              
              .then(() => { window.location.reload(); });
              handleClose();
          
            } catch (error) {
            Swal.fire("Ha ocurrido un error al eliminar el servicio", "", "error")}}
      });
    };
  
    
    
    

// Renderizado
return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-lg">
      <Modal.Header closeButton>
        <Modal.Title>{serviceData ? serviceData.name : "No disponible"}</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        
      <Form id="editServiceForm" onSubmit={handleFormSubmit}>


      <div className="row p-2">


        <div className="col-md-6">
          <Form.Group controlId="type" className="m-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="name" onChange={handleChange} maxLength="50" minLength="1" required
            value={editData ? editData.name : "No disponible"} />
          </Form.Group>

          <Form.Group controlId="type" className="m-2">
            <Form.Label>Tipo</Form.Label>
            <Form.Control type="text" name="type" onChange={handleChange}
            value={editData ? editData.type : "No disponible"} maxLength="20" minLength="1" required/>
          </Form.Group>

          <Form.Group controlId="price" className="m-2">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" name="price" onChange={handleChange}
            value={editData ? editData.price : "No disponible"} min="1" max="100000" required/>
          </Form.Group>

          <Form.Group controlId="provider" className="m-2">
            <Form.Label>Proveedor</Form.Label>
            <Form.Control type="text" name="provider" onChange={handleChange}
            value={editData ? editData.provider : "No disponible"}  maxLength="20" minLength="1" required/>
          </Form.Group>
        </div>
     

        <div className="col-md-6">
          <Form.Group controlId="description" className="m-2">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control as="textarea" rows={3} style={{ resize:'none'}} name="description" onChange={handleChange}
              maxLength="150" minLength="1" required value={editData ? editData.description : "No disponible"}/>
          </Form.Group>


          <Form.Group controlId="newImage" className="m-2">
            <Form.Label>Nueva Imagen</Form.Label>
            <Form.Control type="file" name="newImage" onChange={handleImageChange} accept="image/*"/>
          </Form.Group>

          <Form.Group controlId="status" className="m-2" >
            <Form.Label>Estado</Form.Label>
            <Form.Control as="select" name="status" onChange={handleChange} 
            value={editData ? editData.status : "No disponible"} className="custom-select">
              <option value="available">Disponible</option>
              <option value="unavailable">No disponible</option>
            </Form.Control>
          </Form.Group>
        </div>
      </div>

      </Form>

      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleDeleteService}> Eliminar servicio </Button>
        <Button variant="primary" type="submit" form="editServiceForm"> Guardar Cambios </Button>
        <Button variant="secondary" onClick={()=>{handleClose()}}> Descartar </Button>
      </Modal.Footer>

    </Modal>);
};

export default EditServiceModal; 