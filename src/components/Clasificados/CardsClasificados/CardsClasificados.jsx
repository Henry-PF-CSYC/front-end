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
        margin: '10px',
        boxShadow: '4px 4px 4px 1px rgba(0, 0, 0,0.1)'
    };
    const imgStyle = {
        maxWidth: '16rem',
        maxHeight: '200px',
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
            <div className="card-header flex flex-row justify-center">
                <img
                    className=" h-40 "
                    src={picture}
                    alt="imagen"
                    style={imgStyle}
                />
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
