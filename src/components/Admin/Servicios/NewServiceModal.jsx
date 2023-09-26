import { Modal, Button, Form } from "react-bootstrap";
import { addService } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { firebase } from "../../Firebase/firebase"

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
 
  
  
  // Manejar el envío del formulario
  const handleFormSubmit = async (event) => {
  // Previene default
  event.preventDefault();

  try {
    // Si hay imagen
    if (selectedImage) {
      // Usamos la función firebase para quedarnos con la URL a subir
      const imageUrl = await firebase(selectedImage, "admin-services/");
      console.log(imageUrl);
      // Actualiza el estado local con la nueva imagen
      setServiceData({ ...serviceData, image: imageUrl });
      console.log(serviceData);

      // Despacha acción para agregar el servicio después de que serviceData se haya actualizado
      dispatch(addService({ ...serviceData, image: imageUrl }));
    } else {
      // Si no hay imagen, simplemente despacha la acción sin la URL
      dispatch(addService(serviceData));

      // Recarga la página
      setTimeout(() => {window.location.reload();}, 300)}
    
    alert("Servicio subido correctamente");
  } catch (error) {
    console.error("Error al subir la imagen:", error);
  }
};



// Renderizado
return (
    <Modal show={show} onHide={handleClose}  dialogClassName="modal-lg">

        <Modal.Header closeButton>
            <Modal.Title>Añadir Servicio</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        
        <Form id="serviceForm" onSubmit={handleFormSubmit}>

        <div className="row p-2">


          <div className="col-md-6">
          <Form.Group controlId="name" className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="name" value={serviceData.name} onChange={handleChange}
            maxLength="50" minLength="1" required/></Form.Group>

          <Form.Group controlId="type" className="mb-2">
            <Form.Label>Tipo</Form.Label>
            <Form.Control type="text" name="type" value={serviceData.type} onChange={handleChange}
            maxLength="20" minLength="1" required/>
          </Form.Group>

          <Form.Group controlId="description" className="mb-2" rows={3}>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control as="textarea" name="description" value={serviceData.description} onChange={handleChange} 
            style={{resize: 'none'}} maxLength="150" minLength="1" required/>
          </Form.Group>

          <Form.Group controlId="provider" className="mb-2">
            <Form.Label>Proveedor</Form.Label>
            <Form.Control type="text" name="provider" value={serviceData.provider} onChange={handleChange}
            maxLength="20" minLength="1" required/>
          </Form.Group>
      </div>

          <div className="col-md-6">
          <Form.Group controlId="price" className="mb-2">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" name="price" value={serviceData.price} onChange={handleChange}
            min="1" max="100000" required/>
          </Form.Group>

          <Form.Group controlId="image" className="mb-2">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="file" name="image" accept="image/*" required onChange={handleImageChange}/>
          </Form.Group>
       </div>
       </div>
        </Form>

      </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Descartar</Button> 
            <Button variant="primary" type="submit" form="serviceForm"> Añadir Servicio </Button>
        </Modal.Footer>

    </Modal>);
};

export default NewServiceModal;