import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServicesPaginated} from "../../redux/actions";
import "./Servicios.css";
import CardsServicios from "../Servicios/CardsServicios/CardsServicios";
import agua from "../../assets/Servicios/agua.jpg";
import internet from "../../assets/Servicios/internet.webp";
import gas from "../../assets/Servicios/gas.webp";

const Services = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.totalPages); //el numero de paginas del estado global
  const serviciosInPage = useSelector((state) => state.currentServicesPage); // suscrito a lo que guardo en el estado cuando hago dispatch de paginate pasandole la pagina  
 

    // Estados locales para filtrar y ordenar
   
    const [name, setName]= useState("")
    const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
    const [filterType, setFilterType] = useState(""); // Estado para el tipo de servicio
    const [orderOption, setOrderOption] = useState(""); // Estado para el orden
    const [orderBy, setOrderBy] = useState("")
    const [rangeMin, setRangeMin] = useState("");
    const [rangeMax, setRangeMax] = useState("");  
    const size=3 //las cartas que me tiene que traer

    const loadServices = () => { //para cargar los servicios voy a mandarlo a un use efect
      dispatch(getServicesPaginated({ name: name, page: currentPage, size: size, order: orderOption, orderBy:orderBy , type:filterType, rangeMin:rangeMin, rangeMax:rangeMax}));
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1); //para lo parte visible del paginado , osea solo los numeros

    useEffect(() => {
      dispatch(loadServices); 
    }, [name, currentPage, filterType, orderOption, orderBy, rangeMin, rangeMax ]);

    const handledInputName=(event)=>{ //para busqueda por name desde el filtro 
      event.preventDefault()
      setName(event.target.value)
    }
  
    const handlePageChange = (newPage) => { //manejador de cambio de pagina
       setCurrentPage(newPage);
    };
  
    const handleFilterTypeChange = (event) => { // cambio de tipo 
      event.preventDefault()
      setFilterType(event.target.value);
    };

    const handleOrderChange = (event) => { // cambio de orden
      event.preventDefault()
      setOrderOption(event.target.value);
    };

    const handleOrderByChange = (event) => { // Cambio de criterio de ordenación
      event.preventDefault();
      setOrderBy(event.target.value);
    };
  
    const handleRangeMinChange = (event) => { // Cambio del valor mínimo del rango
      event.preventDefault();
      setRangeMin(event.target.value);
    };
  
    const handleRangeMaxChange = (event) => { // Cambio del valor máximo del rango
      event.preventDefault();
      setRangeMax(event.target.value);
    };

  return (
    <section id="servicesContainer">
      <div id="generalInfo">
        <h1>Servicios</h1>
        <p>
          En CSYC te ofrecemos una amplia gama de soluciones para satisfacer
          todas tus necesidades en el hogar, aquí encontrarás todo lo que
          necesitas en un solo lugar, explorar información detallada sobre cada
          uno de nuestros servicios y conocer las ofertas disponibles! Nuestra
          misión es proporcionarte acceso fácil y conveniente a servicios
          esenciales de alta calidad
        </p>
        <p>
          Nos enorgullece ser tu socio en el mantenimiento de un hogar seguro,
          eficiente y próspero. Ya seas un miembro de nuestra cooperativa o un
          visitante interesado, esperamos que encuentres en la información que
          necesitas para mejorar tu calidad de vida. Explora nuestras ofertas,
          descubre oportunidades emocionantes y conéctate con nosotros!
        </p>
      </div>

      <input
        type="text"
        placeholder="Buscar por nombre"
        value={name}
        onChange={handledInputName} 
      />

      <input
        type="number"
        placeholder="Rango mínimo"
        value={rangeMin}
        onChange={handleRangeMinChange} 
      />

      <input
        type="number"
        placeholder="Rango máximo"
        value={rangeMax}
        onChange={handleRangeMaxChange} 
      />

      <select value={filterType} onChange={handleFilterTypeChange}>
         <option value="">Todos los servicios</option>
         <option value="luz">Luz</option>
         <option value="gas">Gas</option>
         <option value="internet">Internet</option>
         <option value="agua">Agua</option>
         <option value="cable">Cable</option>
         <option value="telefonia">Telefonía</option>
         <option value="streaming">Streaming</option>
      </select>
      <select value={orderOption} onChange={handleOrderChange}>
        <option value="">Sin orden</option>
        <option value="ASC"> Ascendente</option>
        <option value="DESC"> Descendente</option>
      </select> 

      <select value={orderBy} onChange={handleOrderByChange}>
        <option value="">Sin orden</option>
        <option value="price">Orden por Precio</option> 
        <option value="name">Orden por Nombre</option> 
      </select>


      <section className="row">
      {serviciosInPage.map((servicio, index) => (
          <div key={index} className="col-4">
            <CardsServicios
              imagen={
                servicio.type === "agua"
                  ? agua
                  : servicio.type === "internet"
                  ? internet
                  : gas
              }
              titulo={servicio.name}
              nombreBoton="Lo quiero!"
              descripcion={servicio.description}
              precio={`$${servicio.price} x mes`}
              estado={servicio.status}
            />
          </div>
        ))}

        
      </section>

      <div className="pagination justify-content-center">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &laquo;
              </button>
              </li>
              {pageNumbers.map((pageNumber) => (
              <li
              key={pageNumber}
              className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
              >
                <button
                className="page-link"
                onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
                </li>))}
                
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                   <button
                   className="page-link"
                   onClick={() => handlePageChange(currentPage + 1)}
                  >
                    &raquo;
                  </button>
                </li>
              </ul>
            </div>
          </section>
        );
    };

export default Services;
