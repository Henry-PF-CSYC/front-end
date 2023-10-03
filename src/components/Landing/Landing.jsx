import './Landing.css';
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getServices } from "../../redux/actions"
import { Link } from 'react-router-dom';

// Imagenes
const gas = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fgas.webp?alt=media&token=9a8899a4-88be-4150-bafa-0b7738e557e8"
const internet = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Finternet.webp?alt=media&token=cb1c9a73-1eee-427a-9a93-6cefd5f7aa23"
const luz = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fluz.webp?alt=media&token=f8739218-4576-4422-9543-f28838a88d28"
const agua = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fagua.jpg?alt=media&token=b6629946-52ef-40df-9f02-02cf1dba940f"
const cable = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fcable.webp?alt=media&token=717d29a6-d670-4812-b656-3cf1bf22dbb6"
const telefonia = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Ftelefonia.jpg?alt=media&token=865fa468-d6f5-42ab-976d-43509b55f382"
const streaming =  "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fstreaming.webp?alt=media&token=5d9b5d20-7a1f-4662-b0c8-1f627221dc50"



const Landing = () =>{

    const dispatch = useDispatch() 

    //Cargo el estado global ni bien entro al landing
    useEffect(()=>{ 
        dispatch(getServices())},[])


        
    // Renderizado
    return (
        <section>
            <section>
                <div className="presentation">
                    <div className='title-group'>
                        <h1>CSyC, donde todos nos </h1>
                        <h2>Ayudamos.</h2>
                    </div>
                    <p>
                        Pasión y compromiso son nuestras prioridades para
                        ofrecerte servicios de vanguardia. Nuestra experiencia y
                        métodos innovadores te aseguran resultados excepcionales
                        y soluciones adaptadas a tus necesidades.
                    </p>
                </div>
            </section>

            <section id="service-notications">
                <h1>Combos de Servicios</h1>
                <swiper-container class="mySwiper" id="comboCarr" navigation="true" pagination="true">
                <swiper-slide class="comboSlide">
    
                    <div class="container">
                    
                        <div class="card">
                            <div class="box">
                            <div class="content">
                                <h2>01</h2>
                                <h3>Agua + Luz</h3>
                                <p>Combina los servicios esenciales de agua y luz para tu hogar. 
                                Mantén tu casa iluminada y con agua fresca todo el tiempo.</p>
                                <button class="buttonPacks">Lo Quiero</button>
                            </div>
                            </div>
                        </div>

                        
                        <div class="card">
                            <div class="box">
                            <div class="content">
                                <h2>02</h2>
                                <h3>Internet + Cable</h3>
                                <p>Disfruta de la velocidad de Internet de alta calidad y una amplia 
                                selección de canales de cable. Entretenimiento y conectividad en uno solo.</p>
                                <button class="buttonPacks">Lo Quiero</button>
                            </div>
                            </div>
                        </div>

                        
                        <div class="card">
                            <div class="box">
                            <div class="content">
                                <h2>03</h2>
                                <h3>Streaming + Telefonía</h3>
                                <p>Accede a los mejores servicios de streaming y mantente en contacto con tus seres 
                                queridos con telefonía de calidad.</p>
                                <button class="buttonPacks">Lo Quiero</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    
                </swiper-slide>
                </swiper-container>


                <hr />


                <h1>Nuestros servicios</h1>
                <div id="servicios">
                    <swiper-container class="mySwiper" pagination="true" pagination-clickable="true"
                    slides-per-view="2" free-mode="true" id="serviceCarr" space-between="30">
                        

                        <swiper-slide class="serviceSlide">
                            <h4>Gas</h4>
                            <img src={gas} className="carr2Img" alt="service" />
                            <p>Nuestro servicio de gas te brinda la comodidad y
                            el calor que necesitas en tu hogar. Con nuestro
                            suministro confiable, puedes disfrutar de un
                            ambiente cálido y acogedor en cada rincón, sin
                            preocuparte por interrupciones</p>
                            <Link to="/servicios/gas">
                                <button className='service-button'>Mas informacion</button>
                            </Link>
                        </swiper-slide>


                        <swiper-slide class="serviceSlide">
                            <h4>Internet</h4>
                            <img src={internet} className="carr2Img" alt="service"/>
                            <p>La conectividad es esencial en la era digital, y
                            nuestro servicio de internet te ofrece una
                            conexión rápida y confiable. Con velocidades de
                            navegación y descarga excepcionales, puedes
                            estar siempre conectado, trabajar de manera
                            eficiente y disfrutar de un entretenimiento sin
                            interrupciones en línea</p>
                            <Link to="/servicios/internet">
                                <button className='service-button'>Mas informacion</button>
                            </Link>
                        </swiper-slide>


                        <swiper-slide class="serviceSlide">
                            <h4>Luz</h4>
                            <img src={luz} className="carr2Img" alt="service" />
                            <p>La electricidad es el corazón de tu hogar, y
                            nosotros lo mantenemos latiendo fuerte. Con
                            nuestro servicio de luz, garantizamos una
                            iluminación constante y segura, proporcionándote
                            la energía que necesitas para iluminar tu vida y
                            realizar tus actividades diarias.</p>
                            <Link to="/servicios/luz">
                                <button className='service-button'>Mas informacion</button>
                            </Link>
                        </swiper-slide>


                        <swiper-slide class="serviceSlide">
                            <h4>Agua</h4>
                            <img src={agua} alt="service" />
                            <p>Nuestro servicio de agua garantiza un suministro
                            limpio y confiable para tu hogar. Con la calidad
                            del agua que ofrecemos, puedes mantener tus
                            necesidades de agua cubiertas, desde la cocina
                            hasta el baño, sin preocupaciones.</p>
                            <Link to="/servicios/agua">
                                <button className='service-button'>Mas informacion</button>
                            </Link>
                        </swiper-slide>


                        <swiper-slide class="serviceSlide">
                            <h4>Cable</h4>
                            <img src={cable} alt="service" />
                            <p>Nuestro servicio de cable te brinda acceso a una
                            amplia variedad de canales y entretenimiento de
                            alta calidad. Con programación para todas las
                            edades y gustos, disfruta de la mejor televisión
                            en tu hogar.</p>
                            <Link to="/servicios/cable">
                                <button className='service-button'>Mas informacion</button>
                            </Link>
                        </swiper-slide>


                        <swiper-slide class="serviceSlide">
                            <h4>Telefonia</h4>
                            <img src={telefonia} alt="service" />
                            <p>Nuestro servicio de telefonía ofrece
                            comunicaciones claras y confiables. Mantente
                            conectado con amigos y familiares en todo
                            momento y disfruta de llamadas sin
                            interrupciones.</p>
                            <Link to="/servicios/telefonia">
                                <button className='service-button'>Mas informacion</button>
                            </Link>
                        </swiper-slide>


                        <swiper-slide class="serviceSlide">
                            <h4>Streaming</h4>
                            <img src={streaming} alt="service" />
                            <p>Nuestro servicio de streaming te brinda acceso a
                            una amplia biblioteca de películas, programas de
                            televisión y contenido exclusivo. Disfruta del
                            entretenimiento a la carta desde la comodidad de
                            tu hogar.</p>
                            <Link to="/servicios/streaming">
                                <button className='service-button'>Mas informacion</button>
                            </Link>
                        </swiper-slide>

                    </swiper-container>
                </div>


                <hr />


                <h1>Últimas novedades</h1>

                <div id="whatsnew">
                    <p>
                        <b>Aviso de corte de luz:</b> Estimados clientes, les
                        informamos que debido a trabajos de mantenimiento
                        programados, habrá un corte de energía eléctrica en su
                        área el --- desde las --- hasta las ---. Este corte es
                        necesario para mejorar la calidad de nuestro servicio y
                        garantizar un suministro de energía confiable en el
                        futuro. Lamentamos los inconvenientes que esto pueda
                        causar y agradecemos su comprensión.
                    </p>
                </div>
            </section>
        </section>
        // <section className='grid grid-cols-3 p-40'>
        //     <div className=''>
        //         texto
        //     </div>
        //     <div className='col-span-2'>
        //         Imagen
        //     </div>
        // </section>
    );
};

export default Landing;
