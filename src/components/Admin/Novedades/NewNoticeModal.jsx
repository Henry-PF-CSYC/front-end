import { Modal, Button, Form } from "react-bootstrap";
import { addNotice } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Loader
import { Rings } from "react-loader-spinner";
import "../Admin.css"
import { showLoader, hideLoader } from "../../../redux/actions";



const NewNoticeModal = ({ show, handleClose }) => {

  const dispatch = useDispatch();

  // Datos del nuevo servicio
  const [noticeData, setNoticeData] = useState({title: "", description: ""});

  // Accedemos al estado global del loader
  const isLoading = useSelector((state) => state.isLoading); 


  

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoticeData({...noticeData, [name]: value});};


  
  // Manejar el envío del formulario
  const handleFormSubmit = async (event) => {
  
    event.preventDefault();
    try {
        dispatch(showLoader());
        dispatch(await addNotice(noticeData));
        dispatch(hideLoader());
        Swal.fire("Aviso añadido correctamente", "", "success")
        .then(() => {window.location.reload(200);}); 

    } catch (error) { Swal.fire("No se pudo crear el aviso","", "error")}
  };



// Renderizado
return (
        <>
            {isLoading && (<div className="loader-background">
                            <div className="loader-container"><Rings color="#007bff"/></div>
                          </div>)}

            <Modal show={show} onHide={handleClose} 
            dialogClassName={`${isLoading ? 'loader-modal' : ''}`} backdrop="static" keyboard={false} >

                <Modal.Header closeButton>
                    <Modal.Title>Añadir aviso</Modal.Title>
                </Modal.Header>

                <Modal.Body>


                <Form id="noticeForm" onSubmit={handleFormSubmit}>

                  <Form.Group controlId="title" className="mb-2">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" name="title" value={noticeData.title} onChange={handleChange}
                    maxLength="50" minLength="1" required/></Form.Group>

                  <Form.Group controlId="description" className="mb-2">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" name="description" value={noticeData.description} onChange={handleChange}
                    maxLength="300" minLength="1" required rows={3} style={{ resize:'none'}}/>
                  </Form.Group>

              </Form>


              </Modal.Body>

              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Descartar</Button> 
                  <Button variant="primary" type="submit" form="noticeForm"> Añadir aviso </Button>
              </Modal.Footer>

          </Modal>
    </>);
};

export default NewNoticeModal;