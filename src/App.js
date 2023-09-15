// Componentes importados
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/login"
import Register from "./components/Register/Register"
import SeccionUsuario from './components/SeccionUsuario/SeccionUsuario'
import Clasificados from "./components/Clasificados/Clasificados";

// Ruteado
import {Routes, Route} from "react-router-dom"

// Servicios
import Servicios from "./components/Servicios/Servicios";
import Internet from "./components/Servicios/Internet/Internet";
import Agua from "./components/Servicios/Agua/Agua";
import Gas from "./components/Servicios/Gas/Gas";
import Luz from "./components/Servicios/Luz/Luz";


// Renderizado

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/usuario" element={<SeccionUsuario/>}/>
          <Route path="/clasificados" element={<Clasificados/>}/>
          <Route path="/contacto" element={<Contact/>}/>

          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/internet" element={<Internet/>}/>
          <Route path="/agua" element={<Agua/>}/>
          <Route path="/gas" element={<Gas/>}/>
          <Route path="/luz" element={<Luz/>}/> 
        </Routes>  
      <Footer/> 
    </div>);
}

export default App;
