import "./Navbar.css"
import logo from "../../assets/Logos/logoB.png"
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <section className="container-fluid navbar">
              <div>           
                <Link to="/"><img src={logo} id="logo" alt="logo" /></Link>
              </div>
              
              <div className="options">
               
                <div class="dropdown">
                 <h5 class="dropdown-toggle" data-bs-toggle="dropdown">Servicios</h5>
                    <ul class="dropdown-menu">
                      <li><Link to="/servicios" style={{ textDecoration:'none'}}><span class="dropdown-item">Ver todos</span></Link></li>
                      <li><Link to="/luz" style={{ textDecoration:'none'}}><span class="dropdown-item">Luz</span></Link></li>
                      <li><Link to="/gas" style={{ textDecoration:'none'}}><span class="dropdown-item">Gas</span></Link></li>
                      <li><Link to="/internet" style={{ textDecoration:'none'}}><span class="dropdown-item">Internet</span></Link></li>
                      <li><Link to="/agua" style={{ textDecoration:'none'}}><span class="dropdown-item">Agua</span></Link></li>
                    </ul>
                </div>

                <Link to="/contacto" style={{ textDecoration:'none'}}><h5>Contacto</h5></Link>
                <Link to="/ofertas" style={{ textDecoration:'none'}}><h5>Ofertas</h5></Link>
                <Link to="/login"><button>Ingresá</button></Link>
              </div>    
        </section>)}

export default Navbar;