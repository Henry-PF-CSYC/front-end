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

                <h5><Link className='linkh5' to="/contacto">Contacto</Link></h5>
                <h5><Link className='linkh5' to="/clasificados">Clasificados</Link></h5>
        
                

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
                                <Link to="/usuario" style={{ textDecoration:'none'}}>
                                    <a class="dropdown-item userDropdown" href=".">Ver mi perfil</a></Link>
                            </li>
                            <li>
                                <a class="dropdown-item" href=".">
                                    <p className="userDropdown" onClick={logout}>Salir</p>
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
