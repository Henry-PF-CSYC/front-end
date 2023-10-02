import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { raitingPost } from '../../redux/actions';
import { Modal, Button } from 'react-bootstrap';

const Rating = ({ show, handleClose, serviceId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.dataUser);

  const handleSubmit = async () => {
    try {
      console.log("Contenido del body:", { rating, comment,  user_email: userdata.email, serviceId });
      await dispatch(raitingPost({ rating, comment, serviceId, user_email: userdata.email }));
      handleClose(); // Cierra el modal después de enviar el formulario
    } catch (error) {
      setErrorMessage('Error al crear la reseña');
    }
  };



  // esto va ir en la seccion usuario 

  <button onClick={openRatingModal}>
  Calificar Servicio
</button>
{showRatingModal && (
  <Rating
    serviceId={servicio.id}
    show={showRatingModal}
    handleClose={closeRatingModal}
  />
)}  //
 // Función para abrir el modal de calificación
 const openRatingModal = () => {
  setShowRatingModal(true);
};
const [showRatingModal, setShowRatingModal] = useState(false);// estado para el modal usuario 
// Función para cerrar el modal de calificación
const closeRatingModal = () => {
  setShowRatingModal(false);
};// siguen siendo de la seccion usuario 




  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Califica el servicio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label>Calificación:</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value={0}>Selecciona una calificación</option>
            <option value={1}>Muy malo</option>
            <option value={2}>Malo</option>
            <option value={3}>Regular</option>
            <option value={4}>Bueno</option>
            <option value={5}>Excelente</option>
          </select>
        </div>
        <div>
          <label>Comentario:</label>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Enviar Reseña
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Rating;
