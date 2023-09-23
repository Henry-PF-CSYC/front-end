import { Modal, Button, Form } from "react-bootstrap";

const OptionsModal = ({ show, handleClose, serviceData }) => {


return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{serviceData ? serviceData.name : "No disponible"}</Modal.Title>
      </Modal.Header>
      

      <Modal.Body>
        
        <Form>
          <Form.Group controlId="type">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="name"
            value={serviceData ? serviceData.name : "No disponible"}/>
          </Form.Group>

          <Form.Group controlId="type">
            <Form.Label>Tipo</Form.Label>
            <Form.Control type="text" name="type"
            value={serviceData ? serviceData.type : "No disponible"}/>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="text" name="description"
            value={serviceData ? serviceData.description : "No disponible"}/>
          </Form.Group>

          <Form.Group controlId="provider">
            <Form.Label>Proveedor</Form.Label>
            <Form.Control type="text" name="provider"
            value={serviceData ? serviceData.provider : "No disponible"}/>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" name="price"
            value={serviceData ? serviceData.price : "No disponible"}/>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="text" name="image"
            value={serviceData ? serviceData.image : "Nombre no disponible"}/>
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" name="status"
            value={serviceData ? serviceData.status : "No disponible"}/>
          </Form.Group>
        </Form>

      </Modal.Body>


      <Modal.Footer>
        <Button variant="danger"> Eliminar servicio </Button>
        <Button variant="primary"> Guardar Cambios </Button>
        <Button variant="secondary" onClick={handleClose}> Descartar </Button>
      </Modal.Footer>

    </Modal>);
};

export default OptionsModal;