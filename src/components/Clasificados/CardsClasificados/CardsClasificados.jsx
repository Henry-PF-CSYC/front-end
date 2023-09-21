import React, { useState } from 'react';

const CardsClasificados = ({
    tipo,
    titulo,
    descripcion,
    contacto,
    picture,
    precio
}) => {
    const cardStyle = {
        maxWidth: '18rem',
        width: '18rem',
        margin: '15px'
    };
    const imgStyle = {
        maxWidth: '16rem',
        padding: 'auto'
    };
    return (
        <div className="card bg-light mb-3" style={cardStyle}>
            <div className="card-header">
                <img src={picture} alt="imagen" style={imgStyle} />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {tipo}: {titulo}
                </h5>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">{contacto}</p>
                <p className="card-text">{precio}</p>
            </div>
        </div>
    );
};

export default CardsClasificados;
