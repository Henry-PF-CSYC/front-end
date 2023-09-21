import { useDispatch } from 'react-redux'
import style from './CardsServicios.module.css'
import { addServiceCart } from '../../../redux/actions'

const CardsServicios = ({ imagen, titulo, descripcion, nombreBoton, estado, precio }) => {

    const dispatch = useDispatch()

    const addCart = () => {
        dispatch(addServiceCart({ imagen, titulo, descripcion, nombreBoton, estado, precio }))
    }

    return (
        <div className={style.card}>
            <div className={`${style.face} ${style.front}`}>
                <img src={imagen}  alt={titulo}/>
                <h3>{titulo}</h3>
            </div>            
            <div className={`${style.face} ${style.back}`}>
                <h3>{titulo}</h3>
                <p className={style.description}>{`${descripcion.slice(0,155)}`}</p>
                    <p className={style.price}>{precio}</p>
                    <button onClick={addCart} className="btn btn-primary">{nombreBoton}</button>
                    <div>
                        {
                        estado === 'available' ?(
                        <div className={style.available}>
                        Disponible
                        </div>)
                        :(
                        <div  className={style.notAvailable}>
                        No Disponible
                        </div>)
                        }
                    </div>

            </div>
        </div>
    )
}
export default CardsServicios