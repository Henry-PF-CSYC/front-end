import CardsClasificados from "./CardsClasificados/CardsClasificados";

const array=[{tipo:"oferta",titulo:"titulo",descripcion:"descripcion",contacto:"contacto"},{ofeta:"oferta",titulo:"titulo",descripcion:"descripcion",contacto:"contacto"},{ofeta:"oferta",titulo:"titulo",descripcion:"descripcion",contacto:"contacto"},{ofeta:"oferta",titulo:"titulo",descripcion:"descripcion",contacto:"contacto"}]

const Clasificados=()=>{
    return(
        <div>
            {array.map((clasificado)=>(
                <CardsClasificados
                    tipo={clasificado.tipo}
                    titulo={clasificado.titulo}
                    descipcion={clasificado.descripcion}
                    contacto={clasificado.contacto}
                />
            ))
            }
        </div>)
}

export default Clasificados