import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <section className="container-fluid navbar">
              <div>           
                <Link to="/"><img src="./Imagenes/Logos/logoB.png" id="logo" alt="logo" /></Link>
              </div>
              
              <div className="options">
                <Link to="/servicios" style={{ textDecoration:'none'}}><h5>Servicios</h5></Link>
                <Link to="/contacto" style={{ textDecoration:'none'}}><h5>Contacto</h5></Link>
                <Link to="/ofertas" style={{ textDecoration:'none'}}><h5>Ofertas</h5></Link>
                <Link to="/login"><button>Ingresá</button></Link>
              </div>    
        </section>)}

export default Navbar;