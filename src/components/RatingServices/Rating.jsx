import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { raitingPost, getRatingByIdService } from '../../redux/actions';
import style from "../RatingServices/Rating.module.css"; // Asegúrate de que la ruta sea correcta
import axios from 'axios';

const Rating = ({ show, handleClose, serviceId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [serverResponse, setServerResponse] = useState('');
  const [reviewUser, setReviewUser] = useState(''); //  la reseña que se va a renderizar
  const ratingServiceByUser = useSelector(state => state.commentRatingService); // suscrito al objeto que trae por comentario 


  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.dataUser);
  const messagePost = useSelector(state => state.messageRatingPost);

  const handleSubmit = async () => {
    try {
      if (!rating || rating === "0") {
        setErrorMessage("Por favor, selecciona una calificación.");
        return;
      }
      if (!comment.trim()) {
        setErrorMessage("Por favor, ingresa un comentario.");
        return;
      }

      dispatch(await raitingPost({ rating, comment, serviceId, user_email: userdata.email }));
      setServerResponse(messagePost);
      resetForm();
      setTimeout(() => {
        handleClose();
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };



  const [reviewIdToDelete, setReviewIdToDelete] = useState(null);

  useEffect(() => {
    // Obtener el ID de la reseña cuando se carga el componente
    if (ratingServiceByUser && ratingServiceByUser.id) {
      setReviewIdToDelete(ratingServiceByUser.id);
    }
  }, [ratingServiceByUser]);

  const deleteReview = async () => {
    try {
      if (!reviewIdToDelete) {
        console.error('ID de reseña no válido');
        return;
      }

      const response = await axios.delete(`https://csyc.onrender.com/reviews/${reviewIdToDelete}`);
      console.log(response);
      setServerResponse("La reseña se ha eliminado")
      // Después de eliminar la reseña, puedes realizar las acciones necesarias, como cerrar el modal
      setTimeout(() => {
        handleClose();
      }, 4000);
    } catch (error) {
      console.error('Error al eliminar la reseña:', error);
    }
  };



  const resetForm = () => {
    setRating(0);
    setComment('');
    setErrorMessage('');
    setReviewUser('')
  };

  const [reseñaCargada, setReseñaCargada] = useState(false);
  useEffect(() => {
    dispatch(getRatingByIdService({ serviceId, user_email: userdata.email }));
    setReseñaCargada(true)
  }, [dispatch, serviceId, userdata.email]);

  useEffect(() => {
    if (reseñaCargada === true) {
      if (ratingServiceByUser && ratingServiceByUser.comment) {
        setReviewUser(ratingServiceByUser.comment);
      } else {
        setReviewUser('Aun no Existe una Reseña');
      }
    }
  }, [ratingServiceByUser]);

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, []);


  return (
    <Modal show={show} onHide={handleClose} className={style.ratingModal}>
      <Modal.Header closeButton>
        <Modal.Title className={style.modalTitle}>Califica el servicio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={style.ratingForm}>
          <label className={style.ratingLabel}>Tu Opinion</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className={style.ratingSelect}
          >
            <option value={0}>Selecciona una calificación</option>
            <option value={1}>Muy malo</option>
            <option value={2}>Malo</option>
            <option value={3}>Regular</option>
            <option value={4}>Bueno</option>
            <option value={5}>Excelente</option>
          </select>
        </div>
        <div className={style.ratingForm}>
          <label className={style.ratingLabel}>Comentario</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={style.ratingTextarea}
            required
          />
        </div>
        {serverResponse && <p className={style.serverResponse}>{serverResponse}</p>}
        {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
        <div className={style.ratingReview}>
          <p className={style.reviewUser}>Mi Reseña: {reviewUser}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="danger" onClick={() => deleteReview()}>
        Eliminar Reseña
      </Button>
        <Button variant="secondary" className={style.closeButton} onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" className={style.submitButton} onClick={handleSubmit}>
          Enviar Reseña
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Rating;
