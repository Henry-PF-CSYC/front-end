// Hooks y estilos
import { Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
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
import AboutUs from "./components/AboutUs/AboutUs";
import Banned from "./components/Error/Banned";
import NotFound from "./components/Error/NotFound";
import { IconCart } from "./components/Cart/IconCart";


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
import ServicesAdm from "./components/Admin/Servicios/ServicesAdm";
import UsuariosAdm from "./components/Admin/Usuarios/UsuariosAdm";
import ClasificadosAdm from "./components/Admin/Clasificados/ClasificadosAdm";
import Novedades from "./components/Admin/Novedades/Novedades";
import Reseñas from "./components/Admin/Reseñas/Reseñas";



function App() {

  const location = useLocation();
  const navigate = useNavigate();

  const cartServices = useSelector(state => state.cartServices);

  const isAdminRouted = location.pathname.includes('/admin');

  const userRole = useSelector(state => state.dataUser.role);
  if (userRole === "banned") {return <Banned/>}


  

  // Renderizado
  return (
    <div className="bg-image1 bg-cover w-screen bg-center bg-backgroundBody">

      {cartServices.length > 0 && (
          <div className="btn-flotante">
            <div className="icon-market">
              <IconCart />
            </div>
          </div>)}


      {/*Sección admin no verá navbar ni footer*/}
      {!isAdminRouted && <Navbar/>}
    



      <Routes>

        {/*Componentes principales*/}
        <Route path="/" element={<Landing/>}/>
        <Route exact path='/about_us' element={<AboutUs />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/usuario" element={<SeccionUsuario/>}/>
        <Route path="/clasificados" element={<Clasificados/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path='/:error' element={<NotFound/>}/>


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


        {/* Ruta de Admin Protegida */}
        {isAdminRouted && (userRole !== "admin" && userRole !== "contact_admin") && navigate("/")}
        <Route path="/admin/*" element={userRole === "admin" || userRole === "contact_admin" ? <Admin/> : <Navigate to="/"/>}>
          <Route path="servicesAdm" element={<ServicesAdm/>}/>
          <Route path="usuarios" element={<UsuariosAdm/>}/>
          <Route path="clasificados" element={<ClasificadosAdm/>}/>
          <Route path="novedades" element={<Novedades/>}/>
          <Route path="reseñas" element={<Reseñas/>}/>
        </Route>

      </Routes>

      {!isAdminRouted && <Footer/>}
      
    </div>);
}

export default App;
