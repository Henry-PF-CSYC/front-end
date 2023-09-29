import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getServicesPaginated } from '../../redux/actions';
import './Servicios.css';
import CardsServicios from './CardsServicios/CardsServicios';

const Servicios = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.totalPages);
  const serviciosInPage = useSelector((state) => state.currentServicesPage);

  // Estados locales para filtrar y ordenar
  const [name, setName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState('');
  const [orderOption, setOrderOption] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [rangeMin, setRangeMin] = useState('');
  const [rangeMax, setRangeMax] = useState('');
  const size = 3;

  const loadServices = () => {
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
  );

  useEffect(() => {
    dispatch(loadServices);
  }, [name, currentPage, filterType, orderOption, orderBy, rangeMin, rangeMax]);

  const handledInputName = (event) => {
    event.preventDefault();
    setName(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFilterTypeChange = (event) => {
    event.preventDefault();
    setFilterType(event.target.value);
    setCurrentPage(1);
  };

  const handleOrderChange = (event) => {
    event.preventDefault();
    setOrderOption(event.target.value);
    setCurrentPage(1);
  };

  const handleOrderByChange = (event) => {
    event.preventDefault();
    setOrderBy(event.target.value);
    setCurrentPage(1);
  };

  const handleRangeMinChange = (event) => {
    event.preventDefault();
    const newValue = event.target.value;
    if (!isNaN(newValue)) {
      setRangeMin(newValue);
    }
    setCurrentPage(1);
  };

  const handleRangeMaxChange = (event) => {
    event.preventDefault();
    const newValue = event.target.value;
    if (!isNaN(newValue)) {
      setRangeMax(newValue);
    }
    setCurrentPage(1);
  };

  return (
    <section id="servicesContainer">
      <div id="generalInfo">
        <h1>Servicios</h1>
        <p className="descriptionGeneral">
          En CSYC te ofrecemos una amplia gama de soluciones para
          satisfacer todas tus necesidades en el hogar, aquí
          encontrarás todo lo que necesitas en un solo lugar. Nuestra misión es
          proporcionarte acceso fácil y conveniente a servicios
          esenciales de alta calidad.
        </p>
      </div>
      <div className="barraLateral">
        <div>
          <p>Busqueda por Nombre</p>
          <input
            type="text"
            placeholder=""
            value={name}
            onChange={handledInputName}
          />
          <p>Rango de Precios</p>
          <input
            type="number"
            placeholder="Precio mínimo"
            value={rangeMin}
            onChange={handleRangeMinChange}
          />
          <input
            type="number"
            placeholder="Precio máximo"
            value={rangeMax}
            onChange={handleRangeMaxChange}
          />
        </div>

        <div>
          <label>Filtrar por tipo:</label>
          <select
            value={filterType}
            onChange={handleFilterTypeChange}
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

        <div>
          <label>Ordenar:</label>
          <select value={orderOption} onChange={handleOrderChange}>
            <option value="">Sin orden</option>
            <option value="ASC">Ascendente</option>
            <option value="DESC">Descendente</option>
          </select>
        </div>

        <div>
          <label>Ordenar por:</label>
          <select value={orderBy} onChange={handleOrderByChange}>
            <option value="">Sin orden</option>
            <option value="price">Orden por Precio</option>
            <option value="name">Orden por Nombre</option>
          </select>
        </div>
      </div>

      <div className='row'>
        {serviciosInPage.map((servicio, index) => (
          <div key={index} className="col-4 px-5">
            <CardsServicios
              imagen={servicio.image}
              titulo={servicio.name}
              nombreBoton="Lo quiero!"
              descripcion={servicio.description}
              precio={servicio.price}
              estado={servicio.status}
              id={servicio.id}
              type={servicio.type}
            />
          </div>
        ))}
      </div>

      <div className="pagination justify-content-center">
        <ul className="pagination">
          <li
            className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
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
              className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
            >
              <button
                className={`page-link ${currentPage === pageNumber ? 'active' : ''}`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
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
    </section>
  );
};

export default Servicios;
