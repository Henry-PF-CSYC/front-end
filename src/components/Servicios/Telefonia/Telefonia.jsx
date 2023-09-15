import "./Telefonia.css" 
import CardsServicios from "../CardsServicios/CardsServicios"
import plan1 from "../../../assets/Planes/Telefonia/telefonia-plan1.jpg"
import plan2 from "../../../assets/Planes/Telefonia/telefonia-plan2.jpg"
import plan3 from "../../../assets/Planes/Telefonia/telefonia-plan3.webp"

const Telefonia = () =>{
    return(
        <section className="container-fluid telefoniaContainer">

            <section id="telefoniaInfo">
                <h1>Telefonia</h1>
                
                <p>Te ofrecemos un servicio de telefonía que va más allá de las llamadas y los mensajes. Nuestra red de telefonía confiable te conecta con tus seres queridos y colegas en cualquier momento y en cualquier lugar. Con tarifas competitivas y una amplia cobertura, puedes estar seguro de que siempre estarás en línea.</p>   
                 
                <p>Además de llamadas nacionales e internacionales asequibles, también ofrecemos funciones avanzadas, como correo de voz y conferencias telefónicas. Nuestra atención al cliente está disponible para brindarte asistencia cuando la necesites. Únete a nosotros y experimenta la comunicación sin fronteras.</p> 
            </section>

            <hr/>

            <section className="row telefoniaCards">
                <div className="col-4">
                    <CardsServicios imagen={plan1} titulo="Telefonia fija - 1500$ x mes" 
                    descripcion="Ideal para el hogar, plan estándar con todos los beneficios!" nombreBoton="Lo quiero!"/>
                </div>

                <div className="col-4">
                    <CardsServicios imagen={plan2} titulo="Telefonia movil - 2000$ x mes" 
                    descripcion="Telefonia móvil, con 5gb para navegar y Whatsapp gratis!" nombreBoton="Lo quiero!"/>
                </div>

                <div className="col-4">
                    <CardsServicios imagen={plan3} titulo="Conexion Ilimitada - 3000$ x mes" 
                    descripcion="Telefonia fija y movil, ideal para siempre estar comunicado!" nombreBoton="Lo quiero!"/>
                </div>
            </section>
            
        </section>
    )
}

export default Telefonia