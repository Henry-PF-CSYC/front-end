import { Outlet } from "react-router-dom"; 
import SideBar from "./Sidebar/Sidebar";
import "./Admin.css"

const Admin = () => {
  return (
    <section className="container-fluid min-vh-100 myAdmin">
      <div className="row">
        
        <div className="col-2 min-vh-100 bg-white">
          <SideBar/>
        </div>

        <div className="col-10">
          <Outlet/> 
        </div>

      </div>
    </section>);
};

export default Admin;