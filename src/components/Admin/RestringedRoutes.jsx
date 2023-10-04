// RestringedRoutes.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const RestringedRoutes = ({ element, isAdmin, ...rest }) => (
  <Route
    {...rest}
    element={(props) => (
      isAdmin ? (
        React.cloneElement(element, { ...props })
      ) : (
        <Navigate to="/unauthorized" />
      )
    )}
  />
);

export default RestringedRoutes;
