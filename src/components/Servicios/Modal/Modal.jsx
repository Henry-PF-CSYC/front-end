import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRatingService } from '../../../redux/actions';
import { Modal } from 'react-bootstrap';

import "./Modal.css";

const ModalServicio = ({ show, handleClose, service }) => {
    const dispatch = useDispatch();
    const reviewsService = useSelector(state => state.ratingService);
    const serviceId = service.id;

    let sumaCalificaciones = 0;
    let cantidadOpiniones = 0;
    let promedioCalificaciones = 0;

    useEffect(() => {
        if (show) {
            dispatch(getRatingService({ serviceId }));
        }
    }, [show, serviceId]);

    if (Array.isArray(reviewsService) && reviewsService.length !== 0) {
        sumaCalificaciones = reviewsService.reduce((total, review) => total + parseInt(review.rating), 0);
        cantidadOpiniones = reviewsService.length;
        promedioCalificaciones = Math.round(sumaCalificaciones / cantidadOpiniones);
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    return (
        <Modal
            show={show}
            dialogClassName="modal-90w"
            onHide={() => {
                handleClose();
            }}
        >
            <div className="modal-card">
                <div className="modal-header">Opiniones del producto</div>
                <div className="modal-content-container">
                    <div>
                        <div className="average-rating">
                            Nivel de Valoraciones: {promedioCalificaciones}
                            <span className="info-icon" title="1 Es el menor y 5 es el mayor">&#9432;</span>
                        </div>
                    </div>
                    <div>
                        <div className="comments-section">Opiniones</div>
                        <div>
                            {Array.isArray(reviewsService) && reviewsService.length !== 0
                                ? (reviewsService.map((review) => (
                                    <div key={review.id} className="review-item">
                                        <p>Calificación: {review.rating}</p>
                                        <p>Fecha de publicación: {formatDate(review.createdAt)}</p>
                                        <p>Comentario: {review.comment}</p>
                                        <p>Usuario: {review.user_id}</p>
                                    </div>
                                )))
                                : (<p>Aun no tiene Opiniones</p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ModalServicio;
