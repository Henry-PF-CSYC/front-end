import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getServices, getPaginated, setCurrentPage, setTotalPages, orderByName, filterByType} from "../../redux/actions"


import "./Servicios.css"
import CardsServicios from "../Servicios/CardsServicios/CardsServicios"

import agua from "../../assets/Servicios/agua.jpg"
import internet from "../../assets/Servicios/internet.webp"
import gas from "../../assets/Servicios/gas.webp"

const Services = () =>{

    const dispatch = useDispatch()
    const servicios = useSelector((state)=> state.services)

      // Estado local para rastrear la página actual y la cantidad de elementos por página
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calcula el índice de inicio y fin para los servicios en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Función para cambiar de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };



    // const currentPage = useSelector((state) => state.currentPage)
    // const totalPages = useSelector((state) => state.totalPages)

    
    // useEffect(() => {
    //     // Calcula el número total de páginas una vez que obtengas los servicios.
    //     dispatch(setTotalPages(Math.ceil(serviciosPage.length / 3)));
    // }, [dispatch, serviciosPage]);
    

    // useEffect(()=>{
    //     dispatch(getPaginated(currentPage))
    // }, [ currentPage, dispatch])
    

    // const handlePageChange = (newPage) => {
    //     // Actualiza la página actual en el estado de Redux.
    //     dispatch(setCurrentPage(newPage));
    // };


    // // Calcula el índice de inicio y fin de las tarjetas de servicios a mostrar.
    // const startIndex = (currentPage - 1) * 3;
    // const endIndex = startIndex + 3;



    // Orden:
    const [orderBy, setOrderBy] = useState("asc");

    const handleOrderByChange = (event) => {
        const selectedOrderBy = event.target.value;
        setOrderBy(selectedOrderBy);
    
        dispatch(orderByName(selectedOrderBy));
    };



    // Orden:
    const [filterBy, setFilterBy] = useState("base");

    const handleFilterChange = (event) => {
        const selectedFilterBy = event.target.value;
        setFilterBy(selectedFilterBy);
        
        dispatch(filterByType(selectedFilterBy));
    };
    

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

            <div id="servicesFilter"> 
                <label htmlFor="servicesFilter">Filtrar por tipo:</label>
                <select 
                    className="servicesFilter"
                    name="servicesFilter"
                    id="servicesFilter"
                    onChange={handleFilterChange} 
                    value={filterBy}>
                    <option value="base">Todos</option>
                    <option value="luz">Luz</option>
                    <option value="agua">Agua</option>
                    <option value="gas">Gas</option>
                    <option value="internet">Internet</option>
                    <option value="cable">Cable</option>
                    <option value="telefonia">Telefonia</option>
                    <option value="streaming">Streaming</option>
                </select>


                <label htmlFor="sortAlphabetically">Ordenar alfabeticamente:</label>
                <select
                    name="sortAlphabetically"
                    id="sortAlphabetically"
                    className="sortAlphabetically"
                    onChange={handleOrderByChange} 
                    value={orderBy}>
                    <option value="ASC">Ascendente</option>
                    <option value="DESC">Descendente</option>
                </select>

{/* 
                <div htmlFor="priceFilter" class="servicesFilter">
                    <label for="minPrice">Por precio mínimo:</label>
                    <input type="number" id="minPrice" name="minPrice" placeholder="Ingrese el precio mín" class="servicesFilter"/>
                    <label for="maxPrice">Por precio máximo:</label>
                    <input type="number" id="maxPrice" name="maxPrice" placeholder="Ingrese el precio máx" class="servicesFilter"/>
                </div> */}

            </div>

            <hr/>

            {/*.slice(startIndex, endIndex)*/}

            <section className="row">
        {servicios.slice(startIndex, endIndex).map((servicio, index) => (
          <div key={index} className="col-4">
            <CardsServicios
              // Utiliza lógica para asignar la imagen según el tipo de servicio
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
      {/* Botones de paginación */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Página anterior
        </button>
        <p>
          Página {currentPage} de {Math.ceil(servicios.length / itemsPerPage)}
        </p>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(servicios.length / itemsPerPage)}
        >
          Página siguiente
        </button>
      </div>
    

            {/* <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Página anterior
                </button>
                <p>
                    Página {currentPage} de {totalPages}
                </p>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Página siguiente
                </button>
            </div> */}
            


        </section>
    )
}

export default Services