import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import logo from "../../assets/Logos/logoB.png"


const Navbar = () => {
    
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    
  return (
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
        
                

                {isAuthenticated ? (
                    <div class="dropdown">
                        <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            className="ProfileBtn"
                        >
                            <img src={user.picture} alt="userImage" className="img" />
                        </button>
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <li>
                                <Link to="/usuario"><a class="dropdown-item" href="#">Perfil</a></Link>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <button onClick={logout}>Log Out</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <button onClick={() => loginWithRedirect()}>Ingresá</button>
                )}
            </div>
        </section>
    );
};

export default Navbar;
