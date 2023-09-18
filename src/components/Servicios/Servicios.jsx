import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getServices,
  getPaginated,
  setCurrentPage,
  setTotalPages,
} from "../../redux/actions";
import "./Servicios.css";
import CardsServicios from "../Servicios/CardsServicios/CardsServicios";
import agua from "../../assets/Servicios/agua.jpg";
import internet from "../../assets/Servicios/internet.webp";
import gas from "../../assets/Servicios/gas.webp";

const Services = () => {
  const dispatch = useDispatch();
  const serviciosPage = useSelector((state) => state.services);
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const [filterName, setFilterName] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [filterType, setFilterType] = useState("default");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(serviciosPage.length / 3)));
  }, [dispatch, serviciosPage]);

  useEffect(() => {
    dispatch(getPaginated(currentPage));
  }, [currentPage, dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;

  // Filtrar servicios
  const filteredServices = serviciosPage
    .filter((servicio) =>
      servicio.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((servicio) =>
      filterType === "default" || servicio.type === filterType
    )
    .filter((servicio) => {
      if (filterPrice === "") return true;
      const servicePrice = parseFloat(servicio.price);
      return (
        !isNaN(servicePrice) &&
        servicePrice >= parseFloat(filterPrice) &&
        servicePrice < parseFloat(filterPrice) + 100
      );
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  // Obtener servicios paginados después de aplicar filtros y orden
  const paginatedServices = filteredServices.slice(startIndex, endIndex);

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

      <hr />

      <div id="filterContainer">
        <label htmlFor="filterName">Filtrar por nombre:</label>
        <input
          type="text"
          id="filterName"
          name="filterName"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />

        <label htmlFor="filterType">Filtrar por tipo:</label>
        <select
          name="filterType"
          id="filterType"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="default">Todos</option>
          <option value="luz">Luz</option>
          <option value="agua">Agua</option>
          <option value="gas">Gas</option>
          <option value="internet">Internet</option>
          <option value="cable">Cable</option>
          <option value="streaming">Streaming</option>
          <option value="telefonia">Telefonía</option>
        </select>

        <label htmlFor="filterPrice">Filtrar por precio:</label>
        <input
          type="number"
          id="filterPrice"
          name="filterPrice"
          value={filterPrice}
          onChange={(e) => setFilterPrice(e.target.value)}
        />

        <label htmlFor="sortOrder">Ordenar alfabéticamente:</label>
        <select
          name="sortOrder"
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>

      <hr />

      <section className="row">
        {paginatedServices.map((servicio, index) => (
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
              className={`page-item ${
                currentPage === pageNumber ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
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
    </section>
  );
};

export default Services;
