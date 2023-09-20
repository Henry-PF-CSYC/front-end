import "./Telefonia.css" 
import CardsServicios from "../CardsServicios/CardsServicios"
import { useSelector } from "react-redux"




const Telefonia = () =>{

    const services = useSelector(state => state.backUpServices)
    const telefoniaServices = services.filter(service => service.type === "telefonia")


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
                            imagen={service.image}
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