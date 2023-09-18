import "./Internet.css" 
import CardsServicios from "../CardsServicios/CardsServicios"
import plan1 from "../../../assets/Planes/Internet/internet-plan1.webp"
import plan2 from "../../../assets/Planes/Internet/internet-plan2.jpg"
import plan3 from "../../../assets/Planes/Internet/internet-plan3.jpg"
import { useSelector } from "react-redux"
import { filterByType} from "../../../redux/actions"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"



const Internet = () =>{

    const services = useSelector(state => state.backUpServices)
    const internetService = services.filter(service => service.type === "internet")
    
    const dispatch = useDispatch();

    useEffect(() => {
        // Aquí despachas la acción filterByType
        dispatch(filterByType("base"));
    }, []); // El array vacío asegura que esta acción se ejecute solo una vez cuando el componente se monta


    return(
        <section className="container-fluid internetContainer">

            <section id="internetInfo">
                <h1>Internet</h1>
                
                <p>Nuestra suscripción de Internet de alta velocidad ofrece una experiencia en línea sin igual. Disfrutarás de una navegación suave y sin demoras. Ya sea que estés transmitiendo contenido multimedia, realizando videollamadas de alta definición o trabajando desde casa, nuestra confiable conexión te permitirá hacerlo todo sin problemas.</p>   
                 
                <p>Además de la velocidad, nuestra suscripción incluye una serie de beneficios adicionales. Obtendrás acceso a un servicio de atención al cliente dedicado para responder a tus preguntas y resolver cualquier problema que puedas enfrentar.</p> 
                    
                <p>En cuanto al costo, ofrecemos varios planes para acoplarte al uso que necesites. Es una inversión que te brindará una conectividad confiable para todas tus necesidades en línea. No esperes más, únete a nosotros y experimenta el Internet en su mejor momento.</p>
            </section>

            <hr/>

            <section className="row internetCards">
                {internetService.map((service, index) => (
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

export default Internet