import { useDispatch, useSelector } from 'react-redux'
// import style from './CardsServicios.module.css'
import { addServiceCart } from '../../../redux/actions'
import Swal from 'sweetalert2'
import { Button } from 'react-bootstrap'
import propano from '../../assets/propane.svg'
import { useLocation } from 'react-router-dom'



const CardsServicios = ({ imagen, titulo, descripcion, nombreBoton, estado, precio, id, type, click, index, openRating }) => {

    const dispatch = useDispatch()
    const serviceCarts = useSelector(state => state.cartServices)
    const { pathname } = useLocation()

    const iconServices = () => {
        if (type === 'internet') {
            return (<i class="bi bi-router fs-3"></i>)
        } else if (type === 'agua') {
            return (<i class="bi bi-droplet-fill fs-3"></i>)
        } else if (type === 'streaming') {
            return (<i class="bi bi-cast fs-3"></i>)
        } else if (type === 'cable') {
            return (<i class="bi bi-tv fs-3"></i>)
        } else if (type === 'telefonia') {
            return (<i class="bi bi-telephone fs-3"></i>)
        } else if (type === 'luz') {
            return (<i class="bi bi-lightbulb-fill fs-3"></i>)
        } else if (type === 'gas') {
            return (<img src={propano} />)
        }
    }

    const addCart = () => {
        const isService = serviceCarts.filter(service => service.id === id)
        if (type === 'streaming') {
            if (nombreBoton === 'Lo quiero!') {
                const isStreaming = serviceCarts.find(service => service.id === id)
                let quantity = 1
                if (isStreaming) {
                    quantity = isStreaming.quantity + 1
                    dispatch(addServiceCart({ imagen, titulo, descripcion, nombreBoton, estado, precio, type, id, quantity }))
                } else {
                    dispatch(addServiceCart({ imagen, titulo, descripcion, nombreBoton, estado, precio, type, id, quantity }))
                }
            }
        } else {
            if (isService.length > 0) {
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
        // <div className={`${style.card} ${estado === 'unavailable' ? style.disabledCard : ''}`}>
        //     <div className={`${style.face} ${style.front}`}>
        //         <img src={imagen}  alt={titulo}/>
        //         <h3>{titulo}</h3>
        //     </div>            
        //     <div className={`${style.face} ${style.back}`}>
        //         <h3>{titulo}</h3>
        //         <p className={style.description}>{`${descripcion.slice(0,155)}`}</p>
        //          <p><button className="btn btn-primary" onClick={click}>Opiniones</button></p>
        //              {
        //                 precio && (
        //                     <p className={style.price}>{`$${precio}`}</p>
        //                 )
        //             } 
        //             <button onClick={estado === 'available' ? addCart : null} className={`btn btn-primary ${estado === 'unavailable' ? style.disabledButton : ''}`}>
        //                 {nombreBoton}
        //             </button>

        //             <div>
        //                 {
        //                 estado === 'available' ?(
        //                 <div className={style.available}>
        //                 Disponible
        //                 </div>)
        //                 :(
        //                 <div  className={style.notAvailable}>
        //                 No Disponible
        //                 </div>)
        //                 }
        //             </div>

        //     </div>
        // </div>

        <div className={`grid grid-flow-dense grid-cols-2 py-7 px-8 h-full rounded-2xl border-solid border-5 ${index % 2 === 1 ? 'bg-blue-all border-white' : 'bg-white border-blue-all'}`}>
            <div className='grid place-content-start items-center pb-2 px-4'>
                <p className={`text-3xl pt-3 font-bold ${index % 2 === 1 ? 'text-white' : ' text-black'}`} >{titulo}</p>
            </div>
            <div className='grid place-content-end items-center pb-2 px-4'>
                {
                    iconServices()
                }
            </div>
            <div className='col-span-2 px-4'>
                <p className={`text-xl font-normal font-fontGeneral text-left pe-7 ${index % 2 === 1 ? 'text-white' : ' text-black'}`}>{descripcion}</p>
            </div>
            {
                pathname !== '/usuario' && (
                    <div className='grid grid-cols-1 pt-3 px-4'>
                        <Button onClick={estado === 'available' ? addCart : openRating ? openRating : null}
                            className={`${index % 2 === 1 ? 'bg-white' : 'bg-blue-all'}`} >
                            <p className={`${index % 2 === 1 ? 'text-gray-palido' : 'text-white'} text-2xl font-fontGeneral font-normal `}>{nombreBoton}</p></Button>
                    </div>
                )
            }
        </div>
    )
}
export default CardsServicios