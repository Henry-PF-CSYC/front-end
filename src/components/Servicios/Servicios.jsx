import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getServicesPaginated } from '../../redux/actions';
import './Servicios.css';
import CardsServicios from './CardsServicios/CardsServicios';
import ModalServicio from './Modal/Modal';

const Servicios = () => {
    const dispatch = useDispatch();
    const totalPages = useSelector((state) => state.totalPages); //el numero de paginas del estado global
    const serviciosInPage = useSelector((state) => state.currentServicesPage); // suscrito a lo que guardo en el estado cuando hago dispatch de paginate pasandole la pagina

    // Estados locales para filtrar y ordenar

    const [name, setName] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
    const [filterType, setFilterType] = useState(''); // Estado para el tipo de servicio
    const [orderOption, setOrderOption] = useState(''); // Estado para el orden
    const [orderBy, setOrderBy] = useState('');
    const [rangeMin, setRangeMin] = useState('');
    const [rangeMax, setRangeMax] = useState('');
    const size = 2; //las cartas que me tiene que traer


    const loadServices = () => {
        //para cargar los servicios voy a mandarlo a un use efect
        dispatch(
            getServicesPaginated({
                name: name,
                page: currentPage,
                size: size,
                order: orderOption,
                orderBy: orderBy,
                type: filterType,
                rangeMin: rangeMin,
                rangeMax: rangeMax
            })
        );
    };

    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    ); //para lo parte visible del paginado , osea solo los numeros

    useEffect(() => {
        dispatch(loadServices);
    }, [
        name,
        currentPage,
        filterType,
        orderOption,
        orderBy,
        rangeMin,
        rangeMax
    ]);

    const handledInputName = (event) => {
        //para busqueda por name desde el filtro
        event.preventDefault();
        setName(event.target.value);
        setCurrentPage(1)
    };

    const handlePageChange = (newPage) => {
        //manejador de cambio de pagina
        setCurrentPage(newPage);
    };

    const handleFilterTypeChange = (event) => {
        // cambio de tipo
        event.preventDefault();
        setFilterType(event.target.value);
        setCurrentPage(1)
    };

    const handleOrderChange = (event) => {
        // cambio de orden
        event.preventDefault();
        setOrderOption(event.target.value);
        setCurrentPage(1)
    };

    const handleOrderByChange = (event) => {
        // Cambio de criterio de ordenación
        event.preventDefault();
        setOrderBy(event.target.value);
        setCurrentPage(1)
    };

    const handleRangeMinChange = (event) => {
        // Cambio del valor mínimo del rango
        event.preventDefault();
        const newValue = event.target.value;
        if (!isNaN(newValue)) {
            // Verifica si el valor es un número
            setRangeMin(newValue);
        }
        setCurrentPage(1)
    };

    const handleRangeMaxChange = (event) => {
        // Cambio del valor máximo del rango
        event.preventDefault();
        const newValue = event.target.value
        if (!isNaN(newValue)) {
            // Verifica si el valor es un número
            setRangeMax(newValue);
        }
        setCurrentPage(1)
    }

    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState({});

    const handleRatingClick = (servicio) => {
        setSelectedService(servicio);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedService({});
        setShowModal(false);
    };

    return (
        // <section id="servicesContainer">
        //     <div id="generalInfo">
        //         <h1>Servicios</h1>
        //         <p className="descriptionGeneral">
        //             En CSYC te ofrecemos una amplia gama de soluciones para
        //             satisfacer todas tus necesidades en el hogar, aquí
        //             encontrarás todo lo que necesitas en un solo lugar. Nuestra misión es
        //             proporcionarte acceso fácil y conveniente a servicios
        //             esenciales de alta calidad.
        //         </p>
        //     </div>
        //     <div className="barraLateral">
        //         <div>
        //         <p>Busqueda por Nombre</p>
        //         <input
        //             type="text"
        //             placeholder=""
        //             value={name}
        //             onChange={handledInputName}
        //         />
        //         <p>Rango de Precios</p>
        //         <input
        //             type="number"
        //             placeholder="Precio mínimo"
        //             value={rangeMin}
        //             onChange={handleRangeMinChange}
        //         />
        //         <input
        //             type="number"
        //             placeholder="Precio máximo"
        //             value={rangeMax}
        //             onChange={handleRangeMaxChange}
        //         />
        //         </div>

        //         <div>
        //             <label>Filtrar por tipo:</label>
        //             <select
        //                 value={filterType}
        //                 onChange={handleFilterTypeChange}
        //             >
        //                 <option value="">Todos</option>
        //                 <option value="luz">Luz</option>
        //                 <option value="gas">Gas</option>
        //                 <option value="internet">Internet</option>
        //                 <option value="agua">Agua</option>
        //                 <option value="cable">Cable</option>
        //                 <option value="telefonia">Telefonía</option>
        //                 <option value="streaming">Streaming</option>
        //             </select>
        //         </div>

        //         <div>
        //             <label>Ordenar:</label>
        //             <select value={orderOption} onChange={handleOrderChange}>
        //                 <option value="">Sin orden</option>
        //                 <option value="ASC">Ascendente</option>
        //                 <option value="DESC">Descendente</option>
        //             </select>
        //         </div>

        //         <div>
        //             <label>Ordenar por:</label>
        //             <select value={orderBy} onChange={handleOrderByChange}>
        //                 <option value="">Sin orden</option>
        //                 <option value="price">Orden por Precio</option>
        //                 <option value="name">Orden por Nombre</option>
        //             </select>
        //         </div>
        //     </div>

        //     <div className='row'>
        //         <div className={serviciosInPage.length > 2 ? 'col-12 d-flex justify-content-end mb-5' : 'col-12 d-flex justify-content-center mb-5' } >
        //             <section className="row">
        //                 {serviciosInPage.length !== 0 ? (
        //                     serviciosInPage.map((servicio, index) => (
        //                         <div key={index} className={serviciosInPage.length === 2 ? "col-6 px-5" : "col-4 px-5"}>
        //                            <CardsServicios
        //                                 imagen={servicio.image}
        //                                 titulo={servicio.name}
        //                                 nombreBoton="Lo quiero!"
        //                                 click={()=>{
        //                                     setSelectedService(servicio);
        //                                     setShowModal(true)}}
        //                                 descripcion={servicio.description}
        //                                 precio={servicio.price}
        //                                 estado={servicio.status}
        //                                 id={servicio.id}
        //                                 type={servicio.type}

        //                             />
        //                             <p><button key={index} className="btn btn-primary" onClick={() => handleRatingClick(servicio)}>Opiniones</button></p>
        //                         </div>
        //                     ))
        //                 ) : (
        //                     <div className="errorCards">
        //                         <img
        //                             src="https://grupoleiros.com/static/product-not-found.png"
        //                             alt=""
        //                         />
        //                     </div>
        //                 )}
        //             </section>
        //         </div>
        //     </div>
        //     <div className="pagination justify-content-center">
        //         <ul className="pagination">
        //             <li
        //                 className={`page-item ${currentPage === 1 ? 'disabled' : ''
        //                     }`}
        //             >
        //                 <button
        //                     className="page-link"
        //                     onClick={() => handlePageChange(currentPage - 1)}
        //                 >
        //                     &laquo;
        //                 </button>
        //             </li>
        //             {pageNumbers.map((pageNumber) => (
        //                 <li
        //                     key={pageNumber}
        //                     className={`page-item ${currentPage === pageNumber ? 'active' : ''
        //                         }`}
        //                 >
        //                     <button
        //                         className={`page-link ${currentPage === pageNumber ? 'active' : ''
        //                             }`}
        //                         onClick={() => handlePageChange(pageNumber)}
        //                     >
        //                         {pageNumber}
        //                     </button>
        //                 </li>
        //             ))}

        //             <li
        //                 className={`page-item ${currentPage === totalPages ? 'disabled' : ''
        //                     }`}
        //             >
        //                 <button
        //                     className="page-link"
        //                     onClick={() => handlePageChange(currentPage + 1)}
        //                 >
        //                     &raquo;
        //                 </button>
        //             </li>
        //         </ul>
        //     </div>
        //     <ModalServicio
        //         show={showModal}
        //         handleClose={handleCloseModal}
        //         service={selectedService}
        //     />
        // </section>
        <section className='grid grid-flow-dense grid-cols-1 py-24'>
            <div className='grid place-content-center'>
                <span className="font-fontGeneral font-bold text-5xl tracking-wide text-blue-all">Servicios</span>
            </div>
            <div className='grid place-content-center'>
                <span className='className="font-fontGeneral text-xl font-normal text-justify mx-40 mt-3     text-gray-palido'>
                    En CSYC te ofrecemos una amplia gama de soluciones para
                    satisfacer todas tus necesidades del hogar!
                    También puedes acceder a los apartados individuales para obtener más información.
                 
                </span>
            </div>





<div className="grid grid-cols-6 gap-4 mx-32 mt-7 bg-white p-3 rounded-2xl shadow">
    
  {/* Filtro por Nombre */}
  <div className="mb-4">
    <label className="block text-sm text-gray-palido font-fontGeneral font-normal">
      Busqueda por Nombre
    </label>
    <input
      type="text"
      value={name}
      onChange={handledInputName}
      className="w-full border-b-2 border-blue-500"
    />
  </div>

  {/* Rango de Precios */}
  <div className="col-span-2 mb-4">
    <div className="flex justify-between">
      <div className="w-full mr-2">
        <label className="block text-sm text-gray-palido font-fontGeneral font-normal">
          Precio mínimo
        </label>
        <input
          type="number"
          value={rangeMin}
          onChange={handleRangeMinChange}
          className="w-full border-b-2 border-blue-500"
        />
      </div>

      <div className="w-full ml-2">
        <label className="block text-sm text-gray-palido font-fontGeneral font-normal">
          Precio máximo
        </label>
        <input
          type="number"
          value={rangeMax}
          onChange={handleRangeMaxChange}
          className="w-full border-b-2 border-blue-500"
        />
      </div>
    </div>
  </div>

  {/* Filtrar por tipo */}
  <div className="mb-4">
    <label className="block text-sm text-gray-palido font-fontGeneral font-normal">
      Filtrar por tipo:
    </label>
    <select
      value={filterType}
      onChange={handleFilterTypeChange}
      className="w-full appearance-none bg-white border border-gray-300 text-gray-700 rounded leading-tight"
    >
      <option value="">Todos</option>
      <option value="luz">Luz</option>
      <option value="gas">Gas</option>
      <option value="internet">Internet</option>
      <option value="agua">Agua</option>
      <option value="cable">Cable</option>
      <option value="telefonia">Telefonía</option>
      <option value="streaming">Streaming</option>
    </select>
  </div>

  {/* Ordenar */}
  <div className="mb-4">
    <label className="block text-sm text-gray-palido font-fontGeneral font-normal">
      Ordenar:
    </label>
    <select
      value={orderOption}
      onChange={handleOrderChange}
      className="w-full appearance-none bg-white border border-gray-300 text-gray-700 rounded leading-tight"
    >
      <option value="">Sin orden</option>
      <option value="ASC">Ascendente</option>
      <option value="DESC">Descendente</option>
    </select>
  </div>

  {/* Ordenar por */}
  <div className="mb-4">
    <label className="block text-sm text-gray-palido font-fontGeneral font-normal">
      Ordenar por:
    </label>
    <select
      value={orderBy}
      onChange={handleOrderByChange}
      className="w-full appearance-none bg-white border border-gray-300 text-gray-700 rounded leading-tight"
    >
      <option value="">Sin orden</option>
      <option value="price">Orden por Precio</option>
      <option value="name">Orden por Nombre</option>
    </select>
  </div>
</div>




            
            <div className='grid grid-flow-dense grid-cols-2 gap-2 mx-10 my-10'>
                {serviciosInPage.length !== 0 ? (
                    serviciosInPage.map((servicio, index) => (
                        <div key={index}>
                            <CardsServicios
                                imagen={servicio.image}
                                titulo={servicio.name}
                                nombreBoton="Lo quiero!"
                                click={() => {
                                    setSelectedService(servicio);
                                    setShowModal(true)
                                }}
                                descripcion={servicio.description}
                                precio={servicio.price}
                                estado={servicio.status}
                                id={servicio.id}
                                type={servicio.type}

                            />
                            <div className='grid place-content-center'>
                                <p className='pt-2'><button key={index} className="btn btn-primary" onClick={() => handleRatingClick(servicio)}>Opiniones</button></p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="errorCards">
                        <img
                            src="https:grupoleiros.com/static/product-not-found.png"
                            alt=""
                        />
                    </div>
                )}
            </div>


            <div className='grid place-content-center mt-12'>
                <ul className="pagination">
                    <li
                        className={`page-item ${currentPage === 1 ? 'disabled' : ''
                            }`}
                    >
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
                            className={`page-item ${currentPage === pageNumber ? 'active' : ''
                                }`}
                        >
                            <button
                                className={`page-link ${currentPage === pageNumber ? 'active' : ''
                                    }`}
                                onClick={() => handlePageChange(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    ))}

                    <li
                        className={`page-item ${currentPage === totalPages ? 'disabled' : ''
                            }`}
                    >
                        <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            &raquo;
                        </button>
                    </li>
                </ul>
            </div>
            <ModalServicio
                show={showModal}
                handleClose={handleCloseModal}
                service={selectedService}
            />
        </section>
    );
};

export default Servicios;
