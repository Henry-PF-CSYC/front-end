import "./Luz.css" 
import CardsServicios from "../CardsServicios/CardsServicios"
import luz from "../../../assets/Servicios/luz.webp"
import { useSelector } from "react-redux"



const Luz = () =>{

    const services = useSelector(state => state.backUpServices)
    const luzService = services.filter(service => service.type === "luz")


    return(
        <section className="container-fluid luzContainer">

            <section id="luzInfo">
                <h1>Electricidad Confiable</h1>
                
                <p>Nuestra suscripción de electricidad te brinda acceso a una fuente confiable de energía que iluminará tu hogar y facilitará tu vida diaria. Con nosotros, disfrutarás de una electricidad de alta calidad que alimenta tus dispositivos y electrodomésticos de manera eficiente y segura.</p>   
                    
                <p>Obtendrás acceso a un servicio de atención al cliente dedicado para responder a tus preguntas y resolver cualquier problema que puedas enfrentar. También te proporcionamos asesoramiento sobre la eficiencia energética para ayudarte a reducir tus costos y minimizar tu impacto ambiental. No esperes más, únete a nosotros y experimenta la diferencia!</p>
            </section>


            <hr/>


            <section className="row luzCards">
                {luzService.map((service, index) => (
                    <div key={index} className="col-4">
                        <CardsServicios
                            imagen={luz}
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

export default Luz