import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateService, deleteService } from "../../../redux/actions";


const EditServiceModal = ({ show, handleClose, serviceData }) => {

    const dispatch = useDispatch()


    // Inicializa el estado local con los datos del servicio al abrir el modal
    const [editData, setEditData] = useState(serviceData);


    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditData({ ...editData, [name]: value });
    };
  

    // Si el servicioData cambia, actualiza el estado local editData
    useEffect(() => {
      setEditData(serviceData);
    }, [serviceData]);


    // Manejar el envío del formulario
    const handleFormSubmit = (event) => {
      
      event.preventDefault()

      // Realiza la actualización en la base de datos
      dispatch(updateService(serviceData.id, editData)); // Asumiendo que tienes una acción llamada "updateService"

      alert("El servicio fue editado correctamente")

      // Cierra el modal después de guardar
      handleClose();
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

          <Form.Group controlId="image" className="mb-2">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="text" name="image" onChange={handleChange}
            value={editData ? editData.image : "Nombre no disponible"}/>
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
        <Button variant="danger" onClick={() => dispatch(deleteService(serviceData.id))}> Eliminar servicio </Button>
        <Button variant="primary" type="submit" form="editServiceForm"> Guardar Cambios </Button>
        <Button variant="secondary" onClick={handleClose}> Descartar </Button>
        <Button variant="secondary" onClick={() => console.log(serviceData, serviceData.id)}> Ver </Button>
      </Modal.Footer>

    </Modal>);
};

export default EditServiceModal; 