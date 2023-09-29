// Loader.js
import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css'; // Importa el archivo CSS de estilos

const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <div className="loader-overlay"></div>
          <div className="loader">
            <img src="./loading.gif" alt="Cargando..." />
          </div>
        </div>
      )}
    </>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
