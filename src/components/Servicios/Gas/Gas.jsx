import "./Gas.css" 
import CardsServicios from "../CardsServicios/CardsServicios"
import {useSelector} from "react-redux"


const Gas= () =>{

    const services = useSelector(state => state.backUpServices)
    const gasService = services.filter(service => service.type === "gas")

    return(
        <section className="container-fluid gasContainer">

            <section id="gasInfo">
                <h1>Gas Natural Eficiente</h1>
                
                <p>Nuestra suscripción de gas natural te brinda un suministro confiable de calor y energía para tu hogar. Con nosotros, puedes estar seguro de que siempre tendrás la temperatura adecuada en tu casa, sin importar el clima exterior. El gas natural es una opción respetuosa con el medio ambiente y eficiente en términos energéticos.</p>   
                 
                <p>Nuestra red de distribución de gas está diseñada para garantizar que el suministro sea constante y seguro. No tendrás que preocuparte por quedarte sin gas en los momentos en que más lo necesitas. También ofrecemos servicios de mantenimiento para garantizar el funcionamiento óptimo de tus equipos de gas.</p> 
                    
                <p>Tu suscripción de gas natural ya está activa y proporciona comodidad y eficiencia a tu hogar. Únete a nosotros y disfruta de la tranquilidad que brinda tener un suministro de gas confiable y eficiente en todo momento.</p>
            </section>


            <hr/>


            <section className="row gasCards">
               {gasService.map((service, index) => (
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

export default Gas;