import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    return (
        <section className="container-fluid navbar">
            <div>
                <Link to="/">
                    <img
                        src="./Imagenes/Logos/logoB.png"
                        id="logo"
                        alt="logo"
                    />
                </Link>
            </div>

            <div className="options">
                <Link to="/servicios" style={{ textDecoration: 'none' }}>
                    <h5>Servicios</h5>
                </Link>
                <Link to="/contacto" style={{ textDecoration: 'none' }}>
                    <h5>Contacto</h5>
                </Link>
                <Link to="/ofertas" style={{ textDecoration: 'none' }}>
                    <h5>Ofertas</h5>
                </Link>
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
                            <img src={user.picture} className="img" />
                        </button>
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <li>
                                <a class="dropdown-item" href="#">
                                    Perfil
                                </a>
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
