import React from "react";
import { Outlet } from "react-router-dom"; // Importa Link y Outlet
import SideBar from "./Sidebar/Sidebar";

const Admin = () => {
  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        <div className="col-2 vh-100 min-vh-100 bg-white">
          <SideBar />
        </div>
        <div className="col">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Admin;