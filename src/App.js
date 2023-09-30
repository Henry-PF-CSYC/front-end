// Ruteado y estilos
import { Routes, Route, useLocation } from "react-router-dom"
import './App.css'

// Componentes importados
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/login"
import Register from "./components/Register/Register"
import SeccionUsuario from './components/SeccionUsuario/SeccionUsuario'
import Clasificados from "./components/Clasificados/Clasificados";
import PruebaTailwind from "./components/PruebaTailwind";

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
import Novedades from "./components/Admin/Novedades/Novedades";
import { IconCart } from "./components/Cart/IconCart";
import { useSelector } from "react-redux";


// Renderizado
function App() {

  const location = useLocation();
  const isAdminRouted = location.pathname.includes('/admin');

  const cartServices = useSelector(state => state.cartServices)

  return (
    
    <div>

      {cartServices.length > 0 && (
          <div className="btn-flotante">
            <div className="icon-market">
              <IconCart />
            </div>
          </div>)}
      {!isAdminRouted && <Navbar/>}


      <Routes>
        {/*Componentes principales*/}
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/usuario" element={<SeccionUsuario/>}/>
        <Route path="/clasificados" element={<Clasificados/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/prueba" element={<PruebaTailwind/>}/>


        {/*Servicios*/}
        <Route path="/servicios" element={<Servicios/>}/>
        <Route path="/servicios/internet" element={<Internet/>}/>
        <Route path="/servicios/agua" element={<Agua/>}/>
        <Route path="/servicios/gas" element={<Gas/>}/>
        <Route path="/servicios/luz" element={<Luz/>}/>
        <Route path="/servicios/cable" element={<Cable/>}/>
        <Route path="/servicios/telefonia" element={<Telefonia/>}/>
        <Route path="/servicios/streaming" element={<Streaming/>}/>
        <Route path="/cart" element={<Cart isTerms={true}/>}/>


        {/* Administrador */}
        <Route path="/admin/*" element={<Admin/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="servicesAdm" element={<ServicesAdm/>}/>
          <Route path="usuarios" element={<UsuariosAdm />}/>
          <Route path="clasificados" element={<ClasificadosAdm/>}/>
          <Route path="novedades" element={<Novedades/>} />

        </Route>

      </Routes>
      {!isAdminRouted && <Footer />}
    </div>);
}

export default App;
