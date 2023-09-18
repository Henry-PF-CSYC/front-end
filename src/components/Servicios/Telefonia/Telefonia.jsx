import "./Telefonia.css" 
import CardsServicios from "../CardsServicios/CardsServicios"
import plan1 from "../../../assets/Planes/Telefonia/telefonia-plan1.jpg"
import plan2 from "../../../assets/Planes/Telefonia/telefonia-plan2.jpg"
import plan3 from "../../../assets/Planes/Telefonia/telefonia-plan3.webp"
import { useSelector } from "react-redux"
import { filterByType} from "../../../redux/actions"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"



const Telefonia = () =>{

    const services = useSelector(state => state.backUpServices)
    const telefoniaServices = services.filter(service => service.type === "telefonia")

    const dispatch = useDispatch();

    useEffect(() => {
        // Aquí despachas la acción filterByType
        dispatch(filterByType("base"));
    }, []); // El array vacío asegura que esta acción se ejecute solo una vez cuando el componente se monta


    return(
        <section className="container-fluid telefoniaContainer">

            <section id="telefoniaInfo">
                <h1>Telefonia</h1>
                
                <p>Te ofrecemos un servicio de telefonía que va más allá de las llamadas y los mensajes. Nuestra red de telefonía confiable te conecta con tus seres queridos y colegas en cualquier momento y en cualquier lugar. Con tarifas competitivas y una amplia cobertura, puedes estar seguro de que siempre estarás en línea.</p>   
                 
                <p>Además de llamadas nacionales e internacionales asequibles, también ofrecemos funciones avanzadas, como correo de voz y conferencias telefónicas. Nuestra atención al cliente está disponible para brindarte asistencia cuando la necesites. Únete a nosotros y experimenta la comunicación sin fronteras.</p> 
            </section>

            <hr/>

            <section className="row telefoniaCards">
               {telefoniaServices.map((service, index) => (
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

export default Telefonia