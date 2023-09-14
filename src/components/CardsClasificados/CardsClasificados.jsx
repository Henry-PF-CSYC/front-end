
const CardsClasificados=({tipo,titulo,descipcion,contacto})=>{
    return(   
        <div class="card">
        <div class="card-header">
            {tipo}
        </div>
        <div class="card-body">
            <h5 class="card-title">{titulo}</h5>
            <p class="card-text">{descipcion}</p>
            <p class="card-text">Contacto: {contacto}</p>
        </div>
        </div>
    )
}

export default CardsClasificados