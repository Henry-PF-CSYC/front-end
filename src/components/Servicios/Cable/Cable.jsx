import "./Cable.css" 
import CardsServicios from "../CardsServicios/CardsServicios"
import plan1 from "../../../assets/Planes/Cable/cable-plan1.webp"
import plan2 from "../../../assets/Planes/Cable/cable-plan2.jpg"
import plan3 from "../../../assets/Planes/Cable/cable-plan3.jpg"

const Cable = () =>{
    return(
        <section className="container-fluid cableContainer">

            <section id="cableInfo">
                <h1>Cable</h1>
                
                <p>Nestro servicio de cable es tu puerta de entrada al mejor entretenimiento televisivo. Con una amplia selección de canales, desde programas para niños hasta deportes en vivo, te ofrecemos la televisión por cable más completa. Disfruta de tus programas y eventos favoritos con una calidad de imagen y sonido excepcionales.</p>   
                 
                <p>Nuestra suscripción de televisión por cable también incluye funciones adicionales, como grabación de programas y acceso a aplicaciones de transmisión. Ya sea que quieras relajarte en casa o mantenerte al día con las últimas noticias, VisiónFamiliar tiene algo para cada miembro de la familia. Únete a nosotros y experimenta el entretenimiento en su máxima expresión.</p> 
            </section>

            <hr/>

            <section className="row cableCards">
                <div className="col-4">
                    <CardsServicios imagen={plan1} titulo="Basico - 2500$ x mes" 
                    descripcion="Plan básico con 40 canales, para chicos y adultos de todas las edades!" nombreBoton="Lo quiero!"/>
                </div>

                <div className="col-4">
                    <CardsServicios imagen={plan2} titulo="Intermedio - 4000$ x mes" 
                    descripcion="Plan intermedio con 70 canales, incluido el pack de deportes!" nombreBoton="Lo quiero!"/>
                </div>

                <div className="col-4">
                    <CardsServicios imagen={plan3} titulo="Plus+ - 6000$ x mes" 
                    descripcion="Plan con 100 canales, incluidos internacionales, deportes y muchos más!" nombreBoton="Lo quiero!"/>
                </div>
            </section>
            
        </section>
    )
}

export default Cable