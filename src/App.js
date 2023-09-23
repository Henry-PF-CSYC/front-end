// Ruteado
import {Routes, Route, useLocation} from "react-router-dom"

// Componentes importados
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/login"
import Register from "./components/Register/Register"
import SeccionUsuario from './components/SeccionUsuario/SeccionUsuario'
import Clasificados from "./components/Clasificados/Clasificados";

// Servicios
import Servicios from "./components/Servicios/Servicios";
import Internet from "./components/Servicios/Internet/Internet";
import Agua from "./components/Servicios/Agua/Agua";
import Gas from "./components/Servicios/Gas/Gas";
import Luz from "./components/Servicios/Luz/Luz";
import Cable from "./components/Servicios/Cable/Cable";
import Telefonia from "./components/Servicios/Telefonia/Telefonia";
import Streaming from "./components/Servicios/Streaming/Streaming";
import { Cart } from "./components/Cart/Cart";

//Administrador
import Admin from "./components/Admin/Admin";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import ServicesAdm from "./components/Admin/Servicios/ServicesAdm";
import UsuariosAdm from "./components/Admin/Usuarios/UsuariosAdm";
import ClasificadosAdm from "./components/Admin/Clasificados/ClasificadosAdm";
import Reclamos from "./components/Admin/Reclamos/Reclamos";



// Renderizado
function App() {

  const location = useLocation();
  const isAdminRouted = location.pathname.includes('/admin');

  return (
    <div className="App">
      {!isAdminRouted && <Navbar />}
        <Routes>
          
          {/*Componentes principales*/}
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/usuario" element={<SeccionUsuario/>}/>
          <Route path="/clasificados" element={<Clasificados/>}/>
          <Route path="/contacto" element={<Contact/>}/>

          
           {/*Servicios*/}
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/servicios/internet" element={<Internet/>}/>
          <Route path="/servicios/agua" element={<Agua/>}/>
          <Route path="/servicios/gas" element={<Gas/>}/>
          <Route path="/servicios/luz" element={<Luz/>}/> 
          <Route path="/servicios/cable" element={<Cable/>}/> 
          <Route path="/servicios/telefonia" element={<Telefonia/>}/> 
          <Route path="/servicios/streaming" element={<Streaming/>}/> 
          <Route path="/cart" element={<Cart isTerms={true}/>} /> 

          {/* Administrador */}
          <Route path="/admin/*" element={<Admin/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="servicesAdm" element={<ServicesAdm/>}/>
          <Route path="usuarios" element={<UsuariosAdm/>}/>
          <Route path="clasificados" element={<ClasificadosAdm/>}/>
          <Route path="reclamos" element={<Reclamos/>}/>
          
        </Route>
             
        </Routes>  
      {!isAdminRouted && <Footer />} 
    </div>);
}

export default App;
