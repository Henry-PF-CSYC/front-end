import "./Agua.css" 
import CardsServicios from "../CardsServicios/CardsServicios"
import {useSelector} from "react-redux"


const Agua = () =>{

    
    const services=useSelector(state=>state.backUpServices)
    const aguaService=services.filter(service=>service.type==="agua")


    return(
        <section className="container-fluid aguaContainer">

            <section id="aguaInfo">
                <h1>Agua de calidad superior</h1>
                
                <p>Nuestra suscripción de agua garantiza que tu hogar esté abastecido con agua potable de la más alta calidad. Nos comprometemos a proporcionar agua pura y segura para tu consumo diario y uso doméstico. Cada gota que fluye de nuestros grifos es sometida a rigurosos controles de calidad para garantizar que cumple con los estándares más estrictos.</p>   
                 
                <p>Nuestra red de suministro de agua está diseñada para ser confiable y eficiente. No tendrás que preocuparte por interrupciones en el suministro. Además, ofrecemos un servicio de atención al cliente dedicado para resolver cualquier consulta o problema que puedas tener relacionado con el agua.</p> 
                    
                <p>Tu suscripción de agua está activa y lista para proporcionarte el recurso vital que necesitas en tu hogar. Sabemos que la calidad del agua es esencial para tu salud y bienestar, y nos enorgullece ser tu proveedor de agua de confianza.</p>
            </section>


            <hr/>


            <section className="row aguaCards">
                {aguaService.map((service, index) => (
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
            
        </section>)
}

export default Agua;