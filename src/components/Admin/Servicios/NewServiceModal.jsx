import { Modal, Button, Form } from "react-bootstrap";
import { addService } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { firebase } from "../../Firebase/firebase"
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Loader
import { Rings } from "react-loader-spinner";
import "../Admin.css"
import { showLoader, hideLoader } from "../../../redux/actions";



const NewServiceModal = ({ show, handleClose }) => {

  const dispatch = useDispatch();

  // Datos del nuevo servicio
  const [serviceData, setServiceData] = useState({
  name: "", type: "", description: "", provider: "", price: "", image: "", status: "available"});

  // Accedemos al estado global del loader
  const isLoading = useSelector((state) => state.isLoading); 

  // Estado para el archivo de imagen seleccionado
  const [selectedImage, setSelectedImage] = useState("");
  
 


  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({...serviceData, [name]: value});};



  // Manejador para subida de imágenes seguras
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    
    // Verificamos si se seleccionó un archivo
    if (imageFile) {
    // Verificamos si el tipo de archivo es una imagen (por ejemplo, png, jpeg, jpg, gif)
    const allowedImageTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
    if (allowedImageTypes.includes(imageFile.type)) {
        // Si el archivo es una imagen válida, puedes continuar con el manejo de la imagen
        setSelectedImage(imageFile);
    } else {
        // Si el archivo no es una imagen válida, muestra un mensaje de error
        alert("Por favor, seleccione una imagen válida (png, jpeg, jpg, gif).");
        event.target.value = null;}
    }
  };
 
  
  
  // Manejar el envío del formulario
  const handleFormSubmit = async (event) => {
  
    event.preventDefault();

    try {
      // Si hay imagen
      if (selectedImage) {
        dispatch(showLoader());
        // Usamos la función firebase para quedarnos con la URL a subir
        const imageUrl = await firebase(selectedImage, "admin-services/");

        // Actualizamos el estado local con la nueva imagen
        setServiceData({ ...serviceData, image: imageUrl });

        // Despachamos acción para agregar el servicio después de que serviceData se haya actualizado
        dispatch(await addService({ ...serviceData, image: imageUrl }));

      } else {
        // Si no hay imagen, simplemente despachamos la acción sin la URL
        dispatch(await addService(serviceData));}
        dispatch(hideLoader());

        Swal.fire("Servicio añadido correctamente", "", "success")
        .then(() => {window.location.reload(200);}); 
      
    } catch (error) { Swal.fire("No se pudo crear el servicio","", "error")}
  };



// Renderizado
return (
        <>
            {isLoading && (<div className="loader-background">
                            <div className="loader-container"><Rings color="#007bff"/></div>
                          </div>)}

            <Modal show={show} onHide={handleClose} 
            dialogClassName={`modal-lg ${isLoading ? 'loader-modal' : ''}`} backdrop="static" keyboard={false} >

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

          </Modal>
    </>);
};

export default NewServiceModal;