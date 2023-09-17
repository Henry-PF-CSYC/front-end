import style from './CardsServicios.module.css'

const CardsServicios = ({ imagen, titulo, descripcion, nombreBoton, estado }) => {
    return (
        <div>
            <div className="card w-85">
                <img src={imagen} className="card-img-top" height={'260px'} alt="..." />
                <div className="card-body">
                    <h5 className="card-title ps-3">{titulo}</h5>
                    <div className="mt-3 px-3">
                        <p className={style.descripcion}>{descripcion}</p>
                    </div>
                    <div className="ps-3">
                    <button className="btn btn-primary">{nombreBoton}</button>
                    </div>
                    <p>{estado}</p>
                </div>
            </div>

        </div>
    )
}

export default CardsServicios