// Componentes importados
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/login"
import Register from "./components/Register/Register"
import Services from "./components/Services/Services";
import SeccionUsuario from './components/SeccionUsuario/SeccionUsuario'

// Ruteado
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/servicios" element={<Services/>}/>
          <Route path="/usuario" element={<SeccionUsuario/>}/>
        </Routes>  
      <Footer/> 
    </div>);
}

export default App;
