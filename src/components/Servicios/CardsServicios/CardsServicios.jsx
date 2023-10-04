import { useDispatch, useSelector } from 'react-redux'
import style from './CardsServicios.module.css'
import { addServiceCart } from '../../../redux/actions'
import Swal from 'sweetalert2'


const CardsServicios = ({ imagen, titulo, descripcion, nombreBoton, estado, precio, id, type}) => {

    const dispatch = useDispatch()
    const serviceCarts = useSelector(state => state.cartServices)

    const addCart = () => {
        const isService = serviceCarts.filter(service => service.id === id) 
        if(type === 'streaming'){
            if(nombreBoton === 'Lo quiero!'){
                const isStreaming = serviceCarts.find(service => service.id === id)
                let quantity = 1
                if(isStreaming){
                    quantity = isStreaming.quantity + 1
                    dispatch(addServiceCart({ imagen, titulo, descripcion, nombreBoton, estado, precio, type, id, quantity }))
                } else {
                    dispatch(addServiceCart({ imagen, titulo, descripcion, nombreBoton, estado, precio, type, id, quantity }))
                }
            }
        }else{
            if(isService.length > 0){  
                Swal.fire({
                    title: 'Advertencia',
                    text: 'El servicio ya se agrego al carrito',
                    icon: 'warning'
                })
            } else {
                if (nombreBoton === 'Lo quiero!') {
                    dispatch(addServiceCart({ imagen, titulo, descripcion, nombreBoton, estado, precio, type, id, quantity: 1 }))
                }
            }
        }
    }

    return (
        <div className={`${style.card} ${estado === 'unavailable' ? style.disabledCard : ''}`}>
            <div className={`${style.face} ${style.front}`}>
                <img src={imagen}  alt={titulo}/>
                <h3>{titulo}</h3>
            </div>            
            <div className={`${style.face} ${style.back}`}>
                <h3>{titulo}</h3>
                <p className={style.description}>{`${descripcion.slice(0,155)}`}</p>
                 
                     {
                        precio && (
                            <p className={style.price}>{`$${precio}`}</p>
                        )
                    } 
                    <button onClick={estado === 'available' ? addCart : null} className={`btn btn-primary ${estado === 'unavailable' ? style.disabledButton : ''}`}>
                        {nombreBoton}
                    </button>
                   
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