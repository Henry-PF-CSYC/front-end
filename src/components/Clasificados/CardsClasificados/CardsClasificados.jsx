const CardsClasificados = ({
    tipo,
    titulo,
    descripcion,
    contacto,
    picture,
    precio
}) => {
    return (
        <div className="card bg-onahau-400/30 font-fontGeneral mb-3 max-w-xs w-80 m-3 shadow-xl">
            <div className="card-header flex flex-row justify-center">
                <img
                    className=" h-40 max-w-xs max-h-48 m-auto rounded-md "
                    src={picture}
                    alt="imagen"
                />
            </div>
            <div className="card-body bg-onahau-400/60">
                <h5 className="card-title">
                    {tipo}: {titulo}
                </h5>
                <p className="card-text overflow-hidden text-ellipsis line-clamp-4 whitespace-normal h-11">
                    {descripcion}
                </p>
                <p className="card-text">Numero de contacto: {contacto}</p>
                <p className="card-text">Precio: ${precio}</p>
            </div>
        </div>
    );
};

export default CardsClasificados;
