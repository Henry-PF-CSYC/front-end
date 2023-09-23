import { Modal, Button, Form } from "react-bootstrap";
import { addService } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {firebase} from "../../Firebase/firebase"

const NewServiceModal = ({ show, handleClose }) => {

  const dispatch = useDispatch();

  // Datos del nuevo servicio
  const [serviceData, setServiceData] = useState({
  name: "", type: "", description: "", provider: "", price: "", image: "", status: "available"});


  // Estado para el archivo de imagen seleccionado
  const [selectedImage, setSelectedImage] = useState("");


  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
      setServiceData({...serviceData, [name]: value});
  };


  // Función para manejar el cambio en el campo de carga de imagen
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setSelectedImage(imageFile);};


// Manejar el envío del formulario
const handleFormSubmit = async (event) => {
  // Previene default
  event.preventDefault();

  try {
    // Si hay imagen
    if (selectedImage) {
      // Usamos la función firebase para quedarnos con la URL a subir
      const imageUrl = await firebase(selectedImage);
      console.log(imageUrl);
      // Actualiza el estado local con la nueva imagen
      setServiceData({ ...serviceData, image: imageUrl });
      console.log(serviceData);

      // Despacha acción para agregar el servicio después de que serviceData se haya actualizado
      dispatch(addService({ ...serviceData, image: imageUrl }));
    } else {
      // Si no hay imagen, simplemente despacha la acción sin la URL
      dispatch(addService(serviceData));
    }
    
    alert("Servicio subido");
  } catch (error) {
    console.error("Error al subir la imagen:", error);
  }
};



// Renderizado
return (
    <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
            <Modal.Title>Añadir Servicio</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        
        <Form id="serviceForm" onSubmit={handleFormSubmit}>
          <Form.Group controlId="name" className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="name" value={serviceData.name} onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="type" className="mb-2">
            <Form.Label>Tipo</Form.Label>
            <Form.Control type="text" name="type" value={serviceData.type} onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="description" className="mb-2">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="text" name="description" value={serviceData.description} onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="provider" className="mb-2">
            <Form.Label>Proveedor</Form.Label>
            <Form.Control type="text" name="provider" value={serviceData.provider} onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="price" className="mb-2">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" name="price" value={serviceData.price} onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="image" className="mb-2">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="file" name="image" onChange={handleImageChange}/>
          </Form.Group>
       
        </Form>

      </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Descartar</Button> 
            <Button variant="primary" type="submit" form="serviceForm"> Añadir Servicio </Button>
        </Modal.Footer>

    </Modal>);
};

export default NewServiceModal;