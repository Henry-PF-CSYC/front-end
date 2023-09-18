import "./Cable.css" 
import CardsServicios from "../CardsServicios/CardsServicios"
import plan1 from "../../../assets/Planes/Cable/cable-plan1.webp"
import plan2 from "../../../assets/Planes/Cable/cable-plan2.jpg"
import plan3 from "../../../assets/Planes/Cable/cable-plan3.jpg"
import {useSelector} from "react-redux"
import { filterByType} from "../../../redux/actions"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"

const Cable = () =>{

    const services = useSelector(state => state.backUpServices)
    const cableService = services.filter(service => service.type === "cable")

    const dispatch = useDispatch();

    useEffect(() => {
        // Aquí despachas la acción filterByType
        dispatch(filterByType("base"));
    }, []); // El array vacío asegura que esta acción se ejecute solo una vez cuando el componente se monta


    return(
        <section className="container-fluid cableContainer">

            <section id="cableInfo">
                <h1>Cable</h1>
                
                <p>Nestro servicio de cable es tu puerta de entrada al mejor entretenimiento televisivo. Con una amplia selección de canales, desde programas para niños hasta deportes en vivo, te ofrecemos la televisión por cable más completa. Disfruta de tus programas y eventos favoritos con una calidad de imagen y sonido excepcionales.</p>   
                 
                <p>Nuestra suscripción de televisión por cable también incluye funciones adicionales, como grabación de programas y acceso a aplicaciones de transmisión. Ya sea que quieras relajarte en casa o mantenerte al día con las últimas noticias, VisiónFamiliar tiene algo para cada miembro de la familia. Únete a nosotros y experimenta el entretenimiento en su máxima expresión.</p> 
            </section>

            <hr/>

            <section className="row cableCards">
                {cableService.map((service, index) => (
                    <div key={index} className="col-4">
                        <CardsServicios
                            imagen={plan1}
                            titulo={service.name}
                            nombreBoton="Lo quiero!"
                            descripcion={service.description}
                            precio={`$${service.price} x mes`}
                            estado={service.status}
                        />
                    </div>
                ))}

            </section>
            
        </section>
    )
}

export default Cable;