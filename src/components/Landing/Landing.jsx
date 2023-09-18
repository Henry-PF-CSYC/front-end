import "./Landing.css"

import bg from "../../assets/Fondos/landing.webp"

import combo1 from "../../assets/Combos/1.webp"
import combo2 from "../../assets/Combos/2.webp"
import combo3 from "../../assets/Combos/3.png"

import gas from "../../assets/Servicios/gas.webp"
import internet from "../../assets/Servicios/internet.webp"
import luz from "../../assets/Servicios/luz.webp"
import agua from "../../assets/Servicios/agua.jpg"
import cable from "../../assets/Servicios/cable.webp"
import telefonia from "../../assets/Servicios/telefonia.jpg"
import streaming from "../../assets/Servicios/streaming.webp"
import { Link } from "react-router-dom"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getServices } from "../../redux/actions"

const Landing = () =>{

    const dispatch=useDispatch() 

    useEffect(()=>{ //Cargo el estado global ni bien entro al landing
        dispatch(getServices())
    },[])


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

                <swiper-container class="mySwiper" id="comboCarr" navigation="true" pagination="true">
                    <swiper-slide class="comboSlide">
                        <img src={combo1} alt="Offer 1"/>
                        <p>Oferta 1</p>
                        <Link to="/servicios/"></Link><button>Lo quiero!</button>
                    </swiper-slide>
                    <swiper-slide class="comboSlide">
                        <img src={combo2} alt="Offer 2"/>
                        <p>Oferta 2</p>
                        <Link to="/servicios/"></Link><button>Lo quiero!</button>
                    </swiper-slide>
                    <swiper-slide class="comboSlide">
                        <img src={combo3} alt="Offer 3"/>
                        <p>Oferta 3</p>
                        <button>Lo quiero!</button>
                    </swiper-slide>
                </swiper-container>


                <hr/>


                <h1>Nuestros servicios</h1>

                <div id="servicios">
   
                    <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" slides-per-view="2" 
                    free-mode="true" id="serviceCarr" space-between="30">

                        <swiper-slide class="serviceSlide"><h4>Gas</h4><img src={gas} className="carr2Img" alt="service"/>
                        <p>Nuestro servicio de gas te brinda la comodidad y el calor que necesitas en tu hogar. Con nuestro suministro 
                        confiable, puedes disfrutar de un ambiente cálido y acogedor en cada rincón, sin preocuparte por interrupciones</p>
                        <Link to="/servicios/gas"><button>Mas informacion</button></Link></swiper-slide>
                        
                        <swiper-slide class="serviceSlide"><h4>Internet</h4><img src={internet} className="carr2Img" alt="service"/>
                        <p>La conectividad es esencial en la era digital, y nuestro servicio de internet te ofrece una conexión 
                        rápida y confiable. Con velocidades de navegación y descarga excepcionales, puedes estar siempre conectado, 
                        trabajar de manera eficiente y disfrutar de un entretenimiento sin interrupciones en línea</p>
                        <Link to="/servicios/internet"><button>Mas informacion</button></Link></swiper-slide>
                        
                        <swiper-slide class="serviceSlide"><h4>Luz</h4><img src={luz} className="carr2Img" alt="service"/>
                        <p>La electricidad es el corazón de tu hogar, y nosotros lo mantenemos latiendo fuerte. 
                        Con nuestro servicio de luz, garantizamos una iluminación constante y segura, proporcionándote 
                        la energía que necesitas para iluminar tu vida y realizar tus actividades diarias.</p>
                        <Link to="/servicios/luz"><button>Mas informacion</button></Link></swiper-slide>

                        <swiper-slide class="serviceSlide"><h4>Agua</h4><img src={agua} alt="service"/>
                        <p>Nuestro servicio de agua garantiza un suministro limpio y confiable para tu hogar. Con la calidad del agua 
                        que ofrecemos, puedes mantener tus necesidades de agua cubiertas, desde la cocina hasta el baño, sin preocupaciones.</p>
                        <Link to="/servicios/agua"><button>Mas informacion</button></Link></swiper-slide>
                        
                        <swiper-slide class="serviceSlide"><h4>Cable</h4><img src={cable} alt="service"/>
                        <p>Nuestro servicio de cable te brinda acceso a una amplia variedad de canales y entretenimiento de alta 
                        calidad. Con programación para todas las edades y gustos, disfruta de la mejor televisión en tu hogar.</p>
                        <Link to="/servicios/cable"><button>Mas informacion</button></Link></swiper-slide>
                        
                        <swiper-slide class="serviceSlide"><h4>Telefonia</h4><img src={telefonia} alt="service"/>
                        <p>Nuestro servicio de telefonía ofrece comunicaciones claras y confiables. Mantente conectado con amigos y 
                        familiares en todo momento y disfruta de llamadas sin interrupciones.</p>
                        <Link to="/servicios/telefonia"><button>Mas informacion</button></Link></swiper-slide>

                        <swiper-slide class="serviceSlide"><h4>Streaming</h4><img src={streaming} alt="service"/>
                        <p>Nuestro servicio de streaming te brinda acceso a una amplia biblioteca de películas, programas de 
                        televisión y contenido exclusivo. Disfruta del entretenimiento a la carta desde la comodidad de tu hogar.</p>
                        <Link to="/servicios/streaming"><button>Mas informacion</button></Link></swiper-slide>
                        
                    </swiper-container>

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

        </section>)
}

export default Landing;