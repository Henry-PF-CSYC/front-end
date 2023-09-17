import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getServices } from "../../redux/actions"

import "./Servicios.css"
import CardsServicios from "../Servicios/CardsServicios/CardsServicios"

import agua from "../../assets/Servicios/agua.jpg"
import internet from "../../assets/Servicios/internet.webp"
import gas from "../../assets/Servicios/gas.webp"

const Services = () =>{

    const servicios=useSelector((state)=>state.services)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getServices())
    },[servicios,dispatch])

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
            {servicios.map((servicio, index) => (
                <div key={index} className="col-4">
                    <CardsServicios
                    imagen={servicio.image}
                    titulo={servicio.name}
                    nombreBoton="Lo quiero!"
                    descripcion={servicio.description}
                    precio={`$${servicio.price} x mes`}
                    estado={servicio.status}
                    />
                </div>
            ))}
            </section>


        </section>
    )
}

export default Services