import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { emptyUser, getOfferByEmail, getUser } from '../../redux/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    const dispatch = useDispatch();
    const handleLogout = () => {
        logout({
            returnTo: window.location.origin
        });
        dispatch(emptyUser());
    };
    let usuario = useSelector((state) => state.dataUser);
    const click = () => {
        console.log("click")
        dispatch(getUser(user.email));
        dispatch(getOfferByEmail(user.email));
    };
    const handleScroll = () => {
        let section = document.querySelector(".navbar");
        if (section) {
          section.classList.toggle("abajo", window.scrollY > 0);
        }
      };
    useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);

    return (
        <div className='containerPrimary'>
        <section className="container-fluid navbar">
            <div id="logoContainer">
                <Link to="/">
                    <img
                        src="https://www.amucss.org/images/logos/engranajes1.gif"  
                        id="logo"
                        alt="logo"
                        title="Volver al inicio"
                        style={{ width: '50px', height: 'auto' }} 
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
                            onClick={click}
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
                            
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"

                        >{(isAuthenticated &&usuario.name)?
                            (<li>
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
                            </li>):(<li>
                                <Link
                                    to="/register"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <a
                                        class="dropdown-item userDropdown"
                                        href="."
                                    >
                                        Ver mi perfil
                                    </a>
                                </Link>
                            </li>)}

                            {(isAuthenticated && usuario.role === "admin") && (
                            <li>
                                <Link
                                    to="/admin"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <a
                                        class="dropdown-item userDropdown"
                                        href="."
                                    >
                                        Administrador
                                    </a>
                                </Link>
                            </li>)}

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
                    >Ingresa
                    </button>
                )}
            </div>
        </section>
        </div>
    );
};

export default Navbar;
