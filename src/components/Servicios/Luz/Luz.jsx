import "./Luz.css" 
import CardsServicios from "../CardsServicios/CardsServicios"
import luz from "../../../assets/Servicios/luz.webp"

const Luz = () =>{
    return(
        <section className="container-fluid luzContainer">

            <section>
                <h1>Electricidad Confiable</h1>
                
                <p>Nuestra suscripción de electricidad te brinda acceso a una fuente confiable de energía que iluminará tu hogar y facilitará tu vida diaria. Con nosotros, disfrutarás de una electricidad de alta calidad que alimenta tus dispositivos y electrodomésticos de manera eficiente y segura.</p>   
                    
                <p>Obtendrás acceso a un servicio de atención al cliente dedicado para responder a tus preguntas y resolver cualquier problema que puedas enfrentar. También te proporcionamos asesoramiento sobre la eficiencia energética para ayudarte a reducir tus costos y minimizar tu impacto ambiental. No esperes más, únete a nosotros y experimenta la diferencia!</p>
            </section>


            <hr/>


            <section className="row luzCards">
                <div className="col-4">
                    <CardsServicios imagen={luz} titulo="Electricidad - 5000$ x mes" 
                    descripcion="Nuestra red eléctrica está diseñada para que tengas un suministro constante de energía. No tendrás que preocuparte por cortes inesperados que interrumpan tus actividades. Unete hoy para disfrutar de todos los beneficios de una energia limpia!" nombreBoton="Lo quiero!"/>
                </div>
            </section>
            
        </section>)
}

export default Luz