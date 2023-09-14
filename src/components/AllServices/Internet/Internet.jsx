import "./Internet.css" 
import CardsServicios from "../../CardsServicios/CardsServicios"
import plan1 from "../../../assets/Planes/Internet/internet-plan1.webp"
import plan2 from "../../../assets/Planes/Internet/internet-plan2.jpg"
import plan3 from "../../../assets/Planes/Internet/internet-plan3.jpg"

const Internet = () =>{
    return(
        <section className="container-fluid internetContainer">

            <section>
                <h1>Internet</h1>
                
                <p>Nuestra suscripción de Internet de alta velocidad ofrece una experiencia en línea sin igual. Disfrutarás de una navegación suave y sin demoras. Ya sea que estés transmitiendo contenido multimedia, realizando videollamadas de alta definición o trabajando desde casa, nuestra confiable conexión te permitirá hacerlo todo sin problemas.</p>   
                 
                <p>Además de la velocidad, nuestra suscripción incluye una serie de beneficios adicionales. Obtendrás acceso a un servicio de atención al cliente dedicado para responder a tus preguntas y resolver cualquier problema que puedas enfrentar.</p> 
                    
                <p>En cuanto al costo, ofrecemos varios planes para acoplarte al uso que necesites. Es una inversión que te brindará una conectividad confiable para todas tus necesidades en línea. No esperes más, únete a nosotros y experimenta el Internet en su mejor momento.</p>
            </section>

            <hr/>

            <section className="row internetCards">
                <div className="col-4">
                    <CardsServicios imagen={plan1} titulo="10 Megas - 4000$ x mes" 
                    descripcion="Plan básico con una velocidad estándar para uso cotidiano, que es ideal para 3 o 4 dispositivos simultaneos!" nombreBoton="Lo quiero!"/>
                </div>

                <div className="col-4">
                    <CardsServicios imagen={plan2} titulo="50 megas - 6000$ x mes" 
                    descripcion="10 megas no son suficientes? Te ofrecemos este plan para que puedas expandirte aun más, de 5 a 6 dispositivos!" nombreBoton="Lo quiero!"/>
                </div>

                <div className="col-4">
                    <CardsServicios imagen={plan3} titulo="100 megas - 9000$ x mes" 
                    descripcion="Nuestro plan más potente, para más de 7 dispositivos. Olvidate de los cortes y restricciones. Usar con precaución!" nombreBoton="Lo quiero!"/>
                </div>
            </section>
            
        </section>
    )
}

export default Internet