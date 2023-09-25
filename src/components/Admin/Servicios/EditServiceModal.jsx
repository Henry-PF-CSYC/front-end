import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateService, deleteService } from "../../../redux/actions";
import { firebase } from "../../Firebase/firebase"

const EditServiceModal = ({ show, handleClose, serviceData }) => {

    const dispatch = useDispatch()

    // Inicializamos un estado local con los datos del servicio al abrir modal
    const [editData, setEditData] = useState(serviceData);

    // Estado local para nueva imagen a subir
    const [selectedImageFile, setSelectedImageFile] = useState("");

    // Cambios enlazados al estado local
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditData({ ...editData, [name]: value });
    };
  
    // Al cambiar de modal, cambian los datos de cada servicio
    useEffect(() => {
      setEditData(serviceData);
    }, [serviceData]);


    // Manejo del cambio de imagenes
    const handleImageChange = (event) => {
      const imageFile = event.target.files[0];
      setSelectedImageFile(imageFile);
    };
  


    // Manejo de envio de formulario
    const handleFormSubmit = async (event) => {
      event.preventDefault();
    
      try {
       
         // Inicializamos la nueva imagen como nula
        let newImageUrl = null;
    
        // Si hay una nueva imagen seleccionada
        if (selectedImageFile) {
          // Usamos la función de Firebase para obtener URL de la nueva imagen
          newImageUrl = await firebase(selectedImageFile, "admin-services/");
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
    // Alert para confirmar la acción
    const isConfirmed = window.confirm("¿Estás seguro de que deseas eliminar este servicio?");

    if (isConfirmed) {
      // Si el usuario confirmó, realiza la acción de eliminación
      dispatch(deleteService(serviceData.id));
      alert("Servicio eliminado correctamente");

      // Recargamos página
      setTimeout(() => {window.location.reload()}, 300);

      // Cerramos modal 
      handleClose()}
  };



// Renderizado
return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{serviceData ? serviceData.name : "No disponible"}</Modal.Title>
      </Modal.Header>
      

      <Modal.Body>
        <Form id="editServiceForm" onSubmit={handleFormSubmit}>

          <Form.Group controlId="type" className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="name" onChange={handleChange}
            value={editData ? editData.name : "No disponible"}/>
          </Form.Group>

          <Form.Group controlId="type" className="mb-2">
            <Form.Label>Tipo</Form.Label>
            <Form.Control type="text" name="type" onChange={handleChange}
            value={editData ? editData.type : "No disponible"}/>
          </Form.Group>

          <Form.Group controlId="description" className="mb-2">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="text" name="description" onChange={handleChange}
            value={editData ? editData.description : "No disponible"}/>
          </Form.Group>

          <Form.Group controlId="provider" className="mb-2">
            <Form.Label>Proveedor</Form.Label>
            <Form.Control type="text" name="provider" onChange={handleChange}
            value={editData ? editData.provider : "No disponible"}/>
          </Form.Group>

          <Form.Group controlId="price" className="mb-2">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" name="price" onChange={handleChange}
            value={editData ? editData.price : "No disponible"}/>
          </Form.Group>

          <Form.Group controlId="newImage" className="mb-2">
            <Form.Label>Nueva Imagen</Form.Label>
            <Form.Control type="file" name="newImage" onChange={handleImageChange} />
          </Form.Group>

          <Form.Group controlId="status" className="mb-2">
            <Form.Label>Estado</Form.Label>
            <Form.Control as="select" name="status" onChange={handleChange} 
            value={editData ? editData.status : "No disponible"}>
              <option value="available">Disponible</option>
              <option value="unavailable">No disponible</option>
            </Form.Control>
          </Form.Group>

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