import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRatingService } from '../../../redux/actions';
import { Modal } from 'react-bootstrap';

import "./Modal.css";

const ModalServicio = ({ show, handleClose, service }) => {
    const cardStyle = {
        backgroundColor:"white",
        display:"flex",
        flexDirection: "column",
        width:"100%",
        margin: '0px'
    };
    const header={
        maxWidth: "100%",
        boxShadow: '4px 4px 4px 1px rgba(0, 0, 0,0.1)',
        width: "100%",
        padding: "10px", 
        textAlign: "center", 
    };
    const container={
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin:"2rem"
        }
    const comentarios={
        maxWidth:"50%"
    }
    
    const dispatch= useDispatch()
    const reviewsService=useSelector(state=>state.ratingService) //me suscribo a todas las reviews del servicio seleccionado
    
    const serviceId=service.id 
    
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

    return (
        <Modal
            show={show}
            dialogClassName="modal-90w"
            onHide={() => {
                handleClose();
            }}
        >
            <div style={cardStyle}>
                <div style={header}>Opiniones del producto</div>
                <div style={container}>
                    <div><div>rating</div></div>
                    <div>
                        <div style={comentarios}>comentarios</div>
                        <div>
                        {Array.isArray(reviewsService) && reviewsService.length !== 0 
                        ? (reviewsService.map((review) => (
                        <div key={review.id} style={{ border: '1px solid black' }}>
                        <p>Calificacion: {review.rating}</p>
                        <p>Fecha: {review.createdAt}</p>
                        <p>Comentario: {review.comment}</p>
                        <p>Usuario: {review.user_id}</p>
                        </div>
                        )))
                        : (<p>"Aun no tiene Opiniones"</p>)
                        }
                        </div>
                        <div>
                        <div>
                            Promedio de calificaciones: {promedioCalificaciones}
                        </div> 
                        </div>
                    </div>
                </div>
                
            </div>
        </Modal>
    );
};

export default ModalServicio;
