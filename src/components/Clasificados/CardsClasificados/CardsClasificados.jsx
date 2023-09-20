import React from 'react';

const CardsClasificados = ({ tipo, titulo, descripcion, contacto }) => {
    const cardStyle = {
        maxWidth: '18rem',
        width: '18rem',
        margin: '15px'
    };

    return (
        <div className="card bg-light mb-3" style={cardStyle}>
            <div className="card-header">{tipo}</div>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">{contacto}</p>
            </div>
        </div>
    );
};

export default CardsClasificados;
