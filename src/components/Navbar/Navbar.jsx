import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { emptyCart, emptyUser, getOfferByEmail, getUser } from '../../redux/actions';
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
        dispatch(emptyCart())
    };
    let usuario = useSelector((state) => state.dataUser);
    const click = () => {
        console.log("click")
        dispatch(getUser(user.email));
        dispatch(getOfferByEmail(user.email));
    };


    

    return (
       
        <div className='fixed backdrop-blur-2xl bg-opacity-25 shadow-md bg-blue-200 z-50'>
            <div className='grid grid-flow-col-dense grid-cols-8 ml-28 mr-10 gap-20 py-2'>
                <div className='col-span-4'>
                    <Link to="/">
                        <span className='font-fontGeneral text-6xl font-bold text-blue-all'>CS<span className='text-white'>y</span>C</span>
                    </Link>
                </div>
                <div className="dropdown grid place-content-center">
                    <h5
                        title="Informacion sobre nuestros servicios!"
                        className="dropdown-toggle font-fontGeneral text-gray-palido text-[1.1rem] font-normal"
                        data-bs-toggle="dropdown"
                    >
                        Servicios
                    </h5>
                    <ul className="dropdown-menu">
                        <li>
                            <Link
                                to="/servicios"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-[1rem] font-normal">Ver todos</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/luz"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-[1rem] font-normal">Luz</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/gas"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-[1rem] font-normal">Gas</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/internet"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-[1rem] font-normal">Internet</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/agua"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-[1rem] font-normal">Agua</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/cable"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-[1rem] font-normal">Cable</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/telefonia"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-[1rem] font-normal">Telefonia</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/streaming"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-[1rem] font-normal">Streaming</span>
                            </Link>
                        </li>
                    </ul>   
                </div>
                <div className='grid place-content-center'>
                    <Link to="/contacto">
                        <p className='font-fontGeneral text-gray-palido text-[1.1rem] font-normal'>Contacto</p>
                    </Link>
                </div>
                <div className='grid place-content-center'>
                    <Link to="/clasificados">
                        <p className='font-fontGeneral text-gray-palido text-[1.1rem] font-normal'>Clasificados</p>
                    </Link>
                </div>
                <div className="grid place-content-center">
                    <Link to="/about_us">
                        <p className='font-fontGeneral text-gray-palido text-[1.1rem] font-normal'>Conocenos</p>
                    </Link>
                </div>
                <div className="grid place-content-center pr-10">
                    {
                        isAuthenticated ? (
                            <div className="dropdown">
                                <button
                                    type="button"
                                    onClick={click}
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    className="rounded-2xl"
                                >
                                    <img
                                        src={user.picture}
                                        alt="userImage"
                                        className="rounded-full"
                                        title="Puedes ver tu perfil y cerrar sesión"
                                        height={'55px'}
                                        width={'55px'}
                                    />
                                </button>
                                <ul

                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"

                                >{(isAuthenticated && usuario.name) ?
                                    (<li>
                                        <Link
                                            to="/usuario"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <a
                                                className="dropdown-item userDropdown"
                                                href="."
                                            >
                                                Ver mi perfil
                                            </a>
                                        </Link>
                                    </li>) : (<li>
                                        <Link
                                            to="/register"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <a
                                                className="dropdown-item userDropdown"
                                                href="."
                                            >
                                                Ver mi perfil
                                            </a>
                                        </Link>
                                    </li>)}

                                    {(isAuthenticated && (usuario.role === "admin" || usuario.role === "contact_admin")) && (
                                        <li>
                                            <Link to="/admin/servicesAdm" style={{ textDecoration: 'none' }}>
                                                <a className="dropdown-item userDropdown" href=".">
                                                    Administrador
                                                </a>
                                            </Link>
                                        </li>
                                    )}

                                    <li>
                                        {/* Call handleLogout function on logout click */}
                                        <a className="dropdown-item" onClick={handleLogout}>
                                            <p className="userDropdown">Salir</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <button onClick={loginWithRedirect} className='px-4 py-2 rounded-2xl bg-blue-all text-white text-xl font-bold'>Ingresa</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
