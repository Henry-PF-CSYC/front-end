import "./Streaming.css" 
import CardsServicios from "../CardsServicios/CardsServicios"
import { useSelector } from "react-redux"



const Streaming = () =>{

    const services = useSelector(state => state.backUpServices)
    const streamingServices = services.filter(service => service.type === "streaming")


    return(
        <section className="container-fluid streamingContainer">

            <section id="streamingInfo">
                <h1>Streaming</h1>
                
                <p>Te ofrecemos acceso a una biblioteca interminable de contenido de transmisión en línea. Desde éxitos de taquilla hasta series originales y documentales, tendrás todo lo que necesitas para tus noches de entretenimiento. Con una interfaz fácil de usar y transmisión en alta definición, podrás disfrutar de tus programas y películas favoritos sin interrupciones.</p>   
                 
                <p>Nuestra suscripción de streaming también permite la visualización en múltiples dispositivos, para que puedas disfrutar en casa o mientras te desplazas. Además, estamos constantemente actualizando nuestro catálogo para ofrecerte lo último en entretenimiento.</p> 

                <p>Únete a nosotros y descubre una nueva forma de ver televisión. Con opciones personalizadas y una amplia variedad de contenido, satisfacemos todos tus gustos de entretenimiento.</p>
            </section>

            <hr/>

            <section className="row streamingCards">
                {streamingServices.map((service, index) => (
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

export default Streaming