import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { raitingPost, getRatingByIdService } from '../../redux/actions';

const Rating = ({ show, handleClose, serviceId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [serverResponse, setServerResponse] = useState('');
  const [reviewUser, setReviewUser] =useState('') //  la review que se va renderizar
  const ratingServiceByUser= useSelector(state => state.commentRatingService) //suscrito al objeto que trae por comentario 
  console.log(ratingServiceByUser.comment)

  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.dataUser);
  const messagePost = useSelector( state => state.messageRatingPost)

  const handleSubmit = async () => {
    try {
      await dispatch(raitingPost({ rating, comment, serviceId, user_email: userdata.email })); 
        setServerResponse(messagePost);
        resetForm();
        setTimeout(() => {
          handleClose();
        }, 5000);
    } catch (error) {
     console.log(error) 
    }
  }
  
  const resetForm = () => {
    setRating(0);
    setComment('');
    setErrorMessage('');
    setReviewUser('')
  };
  
  const [reseñaCargada, setReseñaCargada] = useState(false)
  useEffect(() => {
      dispatch(getRatingByIdService({ serviceId, user_email: userdata.email }));
      setReseñaCargada(true)
  }, [dispatch, serviceId, userdata.email]);

  useEffect(() => {
    if(reseñaCargada===true){
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
    <Modal  show={show} onHide={handleClose}>
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
        {serverResponse && <p>{serverResponse}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        <div>
        <p>Comentario: {reviewUser}</p>
        </div>
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
