import { useDispatch, useSelector } from 'react-redux';
import CardsClasificados from './CardsClasificados/CardsClasificados';
import { useEffect, useState } from 'react';
import { clearClasificados, getClasificados } from '../../redux/actions';
import ModalClasificado from './ModalClasificado/ModalClasificado';
import ModalPublicacion from './ModalPublicacion/ModalPublicacion';
import { useAuth0 } from '@auth0/auth0-react';

const Clasificados = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useAuth0();
    let usuario = useSelector((state) => state.dataUser);
    const clasi = useSelector((state) => state.clasificados);
    const totalPages = useSelector((state) => state.pagesClasificados); //suscribo al numero de paginas de clasificados

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [order, setOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [orderBy, setOrderBy] = useState('');
    const sizeAds = 10;

    const [publicacion, setPublicacion] = useState({});

    const handleClose = () => {
        setShow(false);
        setShow2(false);
        dispatch(loadAdvertisements);
    };

    const loadAdvertisements = () => {
        dispatch(
            getClasificados({
                title: title,
                type: type,
                order: order,
                orderBy: orderBy,
                page: currentPage,
                size: sizeAds
            })
        );
    };
    useEffect(() => {
        dispatch(clearClasificados());
        dispatch(loadAdvertisements);
    }, [title, type, order, currentPage, orderBy]);

    const InputTitle = (event) => {
        event.preventDefault();
        setTitle(event.target.value);
        setCurrentPage(1); // seteo para no tener errores con la pagina en la que se encuentre el current
    };
    const handlerType = (event) => {
        event.preventDefault();
        setType(event.target.value);
    };
    const handleOrder = (event) => {
        event.preventDefault();
        setOrder(event.target.value);
    };
    const handleOrderByChange = (event) => {
        event.preventDefault();
        setOrderBy(event.target.value);
    };
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const pageNumbers = []; //creando el array de numeros
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex flex-row font-bold pt-20 font-fontGeneral">
            <div className="flex flex-col mb-0 justify-center w-1/6 text-center bg-gradient-to-b from-onahau-300/50 to-onahau-900/80 shadow-xl ml-0 ">
                <div>
                    <p>
                        <label>Buscar</label>
                    </p>
                    <input
                        className="rounded-md text-center w-36 mb-3"
                        type="text"
                        placeholder=""
                        value={title}
                        onChange={InputTitle}
                    />
                </div>
                <div>
                    <p>
                        <label>Tipo de Anuncio: </label>
                    </p>
                    <select
                        className="rounded-md text-center w-36 font-normal mb-3"
                        value={type}
                        onChange={handlerType}
                    >
                        <option value="">Todos</option>
                        <option value="compra">Compra</option>
                        <option value="venta">Venta</option>
                        <option value="se busca">Se Busca</option>
                    </select>
                </div>
                <div>
                    <p>
                        <label>Ordenar:</label>
                    </p>
                    <select
                        className="rounded-md text-center w-36 font-normal mb-3"
                        value={order}
                        onChange={handleOrder}
                    >
                        <option value="">Sin orden</option>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                    <br />
                </div>
                <div>
                    <p>
                        <label>Ordenar por:</label>
                    </p>
                    <select
                        className="rounded-md text-center w-36 font-normal"
                        value={orderBy}
                        onChange={handleOrderByChange}
                    >
                        <option value="">Sin orden</option>
                        <option value="title">Titulo</option>
                        <option value="creation">Fecha</option>
                    </select>
                </div>
                {isAuthenticated && (
                    <button
                        className="flex justify-center m-auto pt-2  w-40 h-10 rounded-md  my-2 text-white bg-gradient-to-r from-onahau-500 to-onahau-800 transition-colors duration-300 ease-in-out hover:bg-gradient-to-l hover:from-onahau-500 hover:to-onahau-800"
                        onClick={() => {
                            setShow(true);
                        }}
                    >
                        Crear publicacion
                    </button>
                )}
            </div>
            <div className="w-5/6">
                {clasi.map(
                    (clasificado) =>
                        clasificado.deletedAt !== {} && (
                            <button
                                onClick={() => {
                                    console.log('click');
                                    setPublicacion(clasificado);
                                    setShow2(true);
                                }}
                            >
                                <CardsClasificados
                                    picture={clasificado.image}
                                    tipo={clasificado.type}
                                    titulo={clasificado.title}
                                    descripcion={clasificado.description}
                                    contacto={clasificado.contact}
                                    precio={clasificado.price}
                                />
                            </button>
                        )
                )}
                <div>
                    <div className="pagination justify-content-center ">
                        <ul className="pagination ">
                            <li
                                className={`page-item ${
                                    currentPage === 1 ? 'disabled' : ''
                                }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() =>
                                        handlePageChange(currentPage - 1)
                                    }
                                >
                                    &laquo;
                                </button>
                            </li>
                            {pageNumbers.map((pageNumber) => (
                                <li
                                    key={pageNumber}
                                    className={`page-item ${
                                        currentPage === pageNumber
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    <button
                                        className={`page-link ${
                                            currentPage === pageNumber
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handlePageChange(pageNumber)
                                        }
                                    >
                                        {pageNumber}
                                    </button>
                                </li>
                            ))}
                            <li
                                className={`page-item ${
                                    currentPage === totalPages ? 'disabled' : ''
                                }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() =>
                                        handlePageChange(currentPage + 1)
                                    }
                                >
                                    &raquo;
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ModalClasificado
                show={show}
                handleClose={handleClose}
                email={usuario.email}
            />
            <ModalPublicacion
                show={show2}
                handleClose={handleClose}
                publicacion={publicacion}
            />
        </div>
    );
};

export default Clasificados;
