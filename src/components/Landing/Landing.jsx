import "./Landing.css"

import bg from "../../assets/Fondos/landing.webp"

import combo1 from "../../assets/Combos/1.webp"
import combo2 from "../../assets/Combos/2.webp"
import combo3 from "../../assets/Combos/3.png"

import gas from "../../assets/Servicios/gas.webp"
import internet from "../../assets/Servicios/internet.webp"
import luz from "../../assets/Servicios/luz.webp"

const Landing = () =>{
    return(
        <section>
            
            <section id="intro">
                <img src={bg} id="bgImage" alt="stock" />
            
                <div id="presentation">
                    <h1>Donde entre todos nos ayudamos</h1>
                    <p>Pasión y compromiso son nuestras prioridades para ofrecerte servicios de vanguardia. Nuestra experiencia y métodos 
                    innovadores te aseguran resultados excepcionales y soluciones adaptadas a tus necesidades.</p>
                </div>
            </section>


            <section id="csa">
                <h1>Nuestros combos</h1>

                <div id="combos">
                    <div className="scContainer">
                        <img src={combo1} className="comboImg" alt="combo1"/>
                        <p>Supongamos que aquí describo un combo</p>
                    </div>

                    <div className="scContainer">
                        <img src={combo2} className="comboImg" alt="combo2"/>
                        <p>Supongamos que aquí describo un combo</p>
                    </div>

                    <div className="scContainer">
                        <img src={combo3} className="comboImg" alt="combo3"/>
                        <p>Supongamos que aquí describo un combo</p>
                    </div>
                </div>

                <hr/>


                <h1>Nuestros servicios</h1>

                <div id="servicios">
                    <div className="scContainer">
                        <img src={gas} className="serviceImg" alt="gas"/>
                        <p>Nuestro servicio de gas te brinda la comodidad y el calor que necesitas en tu hogar. Con nuestro suministro 
                        confiable, puedes disfrutar de un ambiente cálido y acogedor en cada rincón, sin preocuparte por interrupciones</p>
                    </div>

                    <div className="scContainer">
                        <img src={internet} className="serviceImg" alt="internet"/>
                        <p>La conectividad es esencial en la era digital, y nuestro servicio de internet te ofrece una conexión 
                        rápida y confiable. Con velocidades de navegación y descarga excepcionales, puedes estar siempre conectado, 
                        trabajar de manera eficiente y disfrutar de un entretenimiento sin interrupciones en línea</p>
                    </div>

                    <div className="scContainer">
                        <img src={luz} className="serviceImg" alt="luz"/>
                        <p>La electricidad es el corazón de tu hogar, y nosotros lo mantenemos latiendo fuerte. 
                        Con nuestro servicio de luz, garantizamos una iluminación constante y segura, proporcionándote 
                        la energía que necesitas para iluminar tu vida y realizar tus actividades diarias.</p>
                    </div>
                </div>

                <hr/>

                <h1>Últimas novedades</h1>
                
                <div id="whatsnew">
                    <p><b>Aviso de corte de luz:</b> Estimados clientes, les informamos que debido a trabajos de mantenimiento programados, 
                    habrá un corte de energía eléctrica en su área el --- desde las --- hasta las ---. Este corte es necesario 
                    para mejorar la calidad de nuestro servicio y garantizar un suministro de energía confiable en el futuro. 
                    Lamentamos los inconvenientes que esto pueda causar y agradecemos su comprensión.</p>
                </div>

            </section>

        </section>
        
    )
    
}

export default Landing;