const CardsClasificados = ({
    tipo,
    titulo,
    descripcion,
    contacto,
    picture,
    precio
}) => {
    const cardStyle = {
        maxWidth: '20rem',
        width: '20rem',
        margin: '15px'
    };
    const imgStyle = {
        maxWidth: '16rem',
        padding: 'auto'
    };
    const descripcionStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'normal'
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
                <p className="card-text" style={descripcionStyle}>
                    {descripcion}
                </p>
                <p className="card-text">Numero de contacto: {contacto}</p>
                <p className="card-text">Precio: ${precio}</p>
            </div>
        </div>
    );
};

export default CardsClasificados;
