import { Outlet } from "react-router-dom"; 
import SideBar from "./Sidebar/Sidebar";

const Admin = () => {
  return (
    <section className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        
        <div className="col-2 vh-100 min-vh-100 bg-white">
          <SideBar/>
        </div>

        <div className="col-10">
          <Outlet/> 
        </div>

      </div>
    </section>);
};

export default Admin;