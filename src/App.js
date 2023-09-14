// Componentes importados
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/login"
import Register from "./components/Register/Register"
import SeccionUsuario from './components/SeccionUsuario/SeccionUsuario'
import Clasificados from "./components/Clasificados/Clasificados";

// Ruteado
import {Routes, Route} from "react-router-dom"

// Servicios
import Services from "./components/Services/Services";
import Internet from "./components/AllServices/Internet/Internet";
import Agua from "./components/AllServices/Agua/Agua";
import Gas from "./components/AllServices/Gas/Gas";
import Luz from "./components/AllServices/Luz/Luz";


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
          <Route path="/ofertas" element={<Clasificados/>}/>

          <Route path="/servicios" element={<Services/>}/>
          <Route path="/internet" element={<Internet/>}/>
          <Route path="/agua" element={<Agua/>}/>
          <Route path="/gas" element={<Gas/>}/>
          <Route path="/luz" element={<Luz/>}/> 
        </Routes>  
      <Footer/> 
    </div>);
}

export default App;
