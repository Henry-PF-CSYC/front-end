import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../assets/Logos/logoB.png';
import { emptyUser, getUser } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { IconCart } from '../Cart/IconCart';

const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    const dispatch = useDispatch();
    const handleLogout = () => {
        logout({
            returnTo: window.location.origin
        });
        dispatch(emptyUser());
    };

    const click = () => {
        console.log('me ejecute');
        dispatch(getUser(user.email));
    };

    return (
        <section className="container-fluid navbar">
            <div id="logoContainer">
                <Link to="/">
                    <img
                        src={logo}
                        id="logo"
                        alt="logo"
                        title="Volver al inicio"
                    />
                </Link>
            </div>

            <div className="options">
                <div class="dropdown">
                    <h5
                        title="Informacion sobre nuestros servicios!"
                        class="dropdown-toggle"
                        data-bs-toggle="dropdown"
                    >
                        Servicios
                    </h5>
                    <ul class="dropdown-menu">
                        <li>
                            <Link
                                to="/servicios"
                                style={{ textDecoration: 'none' }}
                            >
                                <span class="dropdown-item">Ver todos</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/luz"
                                style={{ textDecoration: 'none' }}
                            >
                                <span class="dropdown-item">Luz</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/gas"
                                style={{ textDecoration: 'none' }}
                            >
                                <span class="dropdown-item">Gas</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/internet"
                                style={{ textDecoration: 'none' }}
                            >
                                <span class="dropdown-item">Internet</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/agua"
                                style={{ textDecoration: 'none' }}
                            >
                                <span class="dropdown-item">Agua</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/cable"
                                style={{ textDecoration: 'none' }}
                            >
                                <span class="dropdown-item">Cable</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/telefonia"
                                style={{ textDecoration: 'none' }}
                            >
                                <span class="dropdown-item">Telefonia</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/streaming"
                                style={{ textDecoration: 'none' }}
                            >
                                <span class="dropdown-item">Streaming</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <h5 title="Contacta con nosotros">
                    <Link className="linkh5" to="/contacto">
                        Contacto
                    </Link>
                </h5>
                <h5 title="Ve las ofertas en tu área!">
                    <Link className="linkh5" to="/clasificados">
                        Clasificados
                    </Link>
                </h5>

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
                            <img
                                src={user.picture}
                                alt="userImage"
                                className="img"
                                title="Puedes ver tu perfil y cerrar sesión"
                            />
                        </button>
                        <ul
                            onClick={click()}
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <li>
                                <Link
                                    to="/usuario"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <a
                                        class="dropdown-item userDropdown"
                                        href="."
                                    >
                                        Ver mi perfil
                                    </a>
                                </Link>
                            </li>
                            <li>
                                {/* Call handleLogout function on logout click */}
                                <a class="dropdown-item" onClick={handleLogout}>
                                    <p class="userDropdown">Salir</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <button
                        className="button"
                        onClick={() => loginWithRedirect()}
                    >
                        <span title="Inicia sesión">Ingresa</span>
                    </button>
                )}
                <IconCart/>
            </div>
        </section>
    );
};

export default Navbar;
