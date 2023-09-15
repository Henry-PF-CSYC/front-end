import "./Servicios.css"
import CardsServicios from "../Servicios/CardsServicios/CardsServicios"

import agua from "../../assets/Servicios/agua.jpg"
import internet from "../../assets/Servicios/internet.webp"
import gas from "../../assets/Servicios/gas.webp"

const Services = () =>{
    return(
        <section id="servicesContainer">
           
            <div id="generalInfo">
                <h1>Servicios</h1>

                <p>En CSYC te ofrecemos una amplia gama de soluciones para satisfacer todas tus necesidades en el hogar, aquí 
                encontrarás todo lo que necesitas en un solo lugar, explorar información detallada sobre cada uno de nuestros 
                servicios y conocer las ofertas disponibles! Nuestra misión es proporcionarte acceso fácil y conveniente a 
                servicios esenciales de alta calidad</p>

                <p>Nos enorgullece ser tu socio en el mantenimiento de un hogar seguro, eficiente y próspero. Ya seas un miembro de 
                nuestra cooperativa o un visitante interesado, esperamos que encuentres en la información que necesitas para mejorar 
                tu calidad de vida. Explora nuestras ofertas, descubre oportunidades emocionantes y conéctate con nosotros!</p>
            </div>

            <hr/>

            <div id="filterContainer"> 

                <label for="filterType">Filtrar por tipo:</label>
                <select name="filterType" id="filterType" class="servicesFilter">
                    <option value="default">Todos</option>
                    <option value="luz">Luz</option>
                    <option value="agua">Agua</option>
                    <option value="gas">Gas</option>
                </select>


                <label for="sortAlphabetically">Ordenar alfabéticamente</label>
                <select name="sortAlphabetically" id="sortAlphabetically" class="servicesFilter">
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>


                <div id="priceFilter" class="servicesFilter">
                    <label for="minPrice">Por precio mínimo:</label>
                    <input type="number" id="minPrice" name="minPrice" placeholder="Ingrese el precio mín" class="servicesFilter"/>
                    <label for="maxPrice">Por precio máximo:</label>
                    <input type="number" id="maxPrice" name="maxPrice" placeholder="Ingrese el precio máx" class="servicesFilter"/>
                </div>

            </div>

            <hr/>

            <section className="row">
                <div className="col-4">
                    <CardsServicios imagen={agua} titulo="Agua potable - 5000$ x mes" nombreBoton="Lo quiero!"
                    descripcion="Brindamos agua potable con altos estándares de calidad,
                    comprometiéndonos con el futuro de las generaciones venideras." 
                    />
                </div>

                <div className="col-4">
                    <CardsServicios imagen={internet} titulo="10 Megas - 4000$ x mes" nombreBoton="Lo quiero!"
                    descripcion="Plan básico con una velocidad estándar para uso cotidiano, que es ideal para 3 o 4 dispositivos simultaneos!"/>
                </div>

                <div className="col-4">
                    <CardsServicios imagen={gas} titulo="Gas natural - 9000$ x mes" nombreBoton="Lo quiero!"
                    descripcion="Nuestro servicio de gas te brinda la comodidad y el calor que necesitas en tu hogar. 
                    Calidez y seguridad garantizada, pedilo hoy!" />
                </div>
            </section>


        </section>
    )
}

export default Services