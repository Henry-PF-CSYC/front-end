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
        let section = document.querySelector(".fixed");
        if (section) {
            section.classList.toggle("navbar", window.scrollY > 0);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        // <div className='containerPrimary'>
        // <section className="container-fluid navbar">
        //     <div id="logoContainer">
        //         <Link to="/">
        //             <img
        //                 src="https://www.amucss.org/images/logos/engranajes1.gif"  
        //                 id="logo"
        //                 alt="logo"
        //                 title="Volver al inicio"
        //                 style={{ width: '50px', height: 'auto' }} 
        //             />
        //         </Link>
        //     </div>

        //     <div className="options">
        //         <div className="dropdown">
        //             <h5
        //                 title="Informacion sobre nuestros servicios!"
        //                 className="dropdown-toggle"
        //                 data-bs-toggle="dropdown"
        //             >
        //                 Servicios
        //             </h5>
        //             <ul className="dropdown-menu">
        //                 <li>
        //                     <Link
        //                         to="/servicios"
        //                         style={{ textDecoration: 'none' }}
        //                     >
        //                         <span className="dropdown-item">Ver todos</span>
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         to="/servicios/luz"
        //                         style={{ textDecoration: 'none' }}
        //                     >
        //                         <span className="dropdown-item">Luz</span>
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         to="/servicios/gas"
        //                         style={{ textDecoration: 'none' }}
        //                     >
        //                         <span className="dropdown-item">Gas</span>
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         to="/servicios/internet"
        //                         style={{ textDecoration: 'none' }}
        //                     >
        //                         <span className="dropdown-item">Internet</span>
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         to="/servicios/agua"
        //                         style={{ textDecoration: 'none' }}
        //                     >
        //                         <span className="dropdown-item">Agua</span>
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         to="/servicios/cable"
        //                         style={{ textDecoration: 'none' }}
        //                     >
        //                         <span className="dropdown-item">Cable</span>
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         to="/servicios/telefonia"
        //                         style={{ textDecoration: 'none' }}
        //                     >
        //                         <span className="dropdown-item">Telefonia</span>
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         to="/servicios/streaming"
        //                         style={{ textDecoration: 'none' }}
        //                     >
        //                         <span className="dropdown-item">Streaming</span>
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>

        //         <h5 title="Contacta con nosotros">
        //             <Link className="linkh5" to="/contacto">
        //                 Contacto
        //             </Link>
        //         </h5>

        //         <h5 title="Ve las ofertas en tu área!">
        //             <Link className="linkh5" to="/clasificados">
        //                 Clasificados
        //             </Link>
        //         </h5>

        //         <h5 title="Contacta con nosotros">
        //             <Link className="linkh5" to="/about_us">
        //                 Conocenos
        //             </Link>
        //         </h5>

        //         {isAuthenticated ? (
        //             <div className="dropdown">
        //                 <button
        //                     className="btn btn-secondary dropdown-toggle"
        //                     type="button"
        //                     onClick={click}
        //                     id="dropdownMenuButton1"
        //                     data-bs-toggle="dropdown"
        //                     aria-expanded="false"
        //                     className="ProfileBtn"
        //                 >
        //                     <img
        //                         src={user.picture}
        //                         alt="userImage"
        //                         className="img"
        //                         title="Puedes ver tu perfil y cerrar sesión"
        //                     />
        //                 </button>
        //                 <ul

        //                     className="dropdown-menu"
        //                     aria-labelledby="dropdownMenuButton1"

        //                 >{(isAuthenticated &&usuario.name)?
        //                     (<li>
        //                         <Link
        //                             to="/usuario"
        //                             style={{ textDecoration: 'none' }}
        //                         >
        //                             <a
        //                                 className="dropdown-item userDropdown"
        //                                 href="."
        //                             >
        //                                 Ver mi perfil
        //                             </a>
        //                         </Link>
        //                     </li>):(<li>
        //                         <Link
        //                             to="/register"
        //                             style={{ textDecoration: 'none' }}
        //                         >
        //                             <a
        //                                 className="dropdown-item userDropdown"
        //                                 href="."
        //                             >
        //                                 Ver mi perfil
        //                             </a>
        //                         </Link>
        //                     </li>)}

        //                     {(isAuthenticated && (usuario.role === "admin" || usuario.role === "contact_admin")) && (
        //                     <li>
        //                         <Link to="/admin" style={{ textDecoration: 'none' }}>
        //                         <a className="dropdown-item userDropdown" href=".">
        //                             Administrador
        //                         </a>
        //                         </Link>
        //                     </li>
        //                     )}

        //                     <li>
        //                         {/* Call handleLogout function on logout click */}
        //                         <a className="dropdown-item" onClick={handleLogout}>
        //                             <p className="userDropdown">Salir</p>
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         ) : (
        //             <button
        //                 className="button"
        //                 onClick={() => loginWithRedirect()}
        //             >Ingresa
        //             </button>
        //         )}
        //     </div>
        // </section>
        // </div>
        <div className='fixed bg-blue-200 z-50'>
            <div className='grid grid-flow-col-dense grid-cols-8 mx-44 gap-14 py-2'>
                <div className='col-span-4'>
                    <Link to="/">
                        <span className='font-fontGeneral text-6xl font-bold text-blue-all'>CS<span className='text-white'>y</span>C</span>
                    </Link>
                </div>
                <div className="dropdown grid place-content-center">
                    <h5
                        title="Informacion sobre nuestros servicios!"
                        className="dropdown-toggle font-fontGeneral text-gray-palido text-2xl font-normal"
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
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-xl font-normal">Ver todos</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/luz"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-xl font-normal">Luz</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/gas"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-xl font-normal">Gas</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/internet"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-xl font-normal">Internet</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/agua"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-xl font-normal">Agua</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/cable"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-xl font-normal">Cable</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/telefonia"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-xl font-normal">Telefonia</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios/streaming"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="dropdown-item font-fontGeneral text-gray-palido text-xl font-normal">Streaming</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='grid place-content-center'>
                    <Link to="/contacto">
                        <p className='font-fontGeneral text-gray-palido text-2xl font-normal'>Contacto</p>
                    </Link>
                </div>
                <div className='grid place-content-center'>
                    <Link to="/clasificados">
                        <p className='font-fontGeneral text-gray-palido text-2xl font-normal'>Clasificados</p>
                    </Link>
                </div>
                <div className="grid place-content-center">
                    <Link to="/about_us">
                        <p className='font-fontGeneral text-gray-palido text-2xl font-normal'>Conocenos</p>
                    </Link>
                </div>
                <div className="grid place-content-center">
                    {
                        isAuthenticated ? (
                            <div className="dropdown">
                                <button
                                    className="rounded-2xl  dropdown-toggle"
                                    type="button"
                                    onClick={click}
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    
                                >
                                    <img
                                        src={user.picture}
                                        alt="userImage"
                                        className="rounded-2xl"
                                        title="Puedes ver tu perfil y cerrar sesión"
                                        height={'60px'}
                                        width={'60px'}
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
                                            <Link to="/admin" style={{ textDecoration: 'none' }}>
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
