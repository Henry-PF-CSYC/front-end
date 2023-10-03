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
        <div className=" flex-row w-full pt-24 m-auto">
            <div className="flex flex-row justify-around text-center rounded-xl mt-2 w-11/12 bg-onahau-50 bg-opacity-50 shadow-xl mx-auto h-10 pt-2  ">
                <div>
                    <label>Buscar</label>
                    <input
                        className="rounded-md text-center w-36"
                        type="text"
                        placeholder=""
                        value={title}
                        onChange={InputTitle}
                    />
                </div>
                <div>
                    <label>Tipo de Anuncio: </label>
                    <select
                        className="rounded-md text-center w-36"
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
                    <label>Ordenar:</label>
                    <select
                        className="rounded-md text-center w-36"
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
                    <label>Ordenar por:</label>
                    <select
                        className="rounded-md text-center w-36"
                        value={orderBy}
                        onChange={handleOrderByChange}
                    >
                        <option value="">Sin orden</option>
                        <option value="title">Titulo</option>
                        <option value="creation">Fecha</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-row border-3 border-red-800">
                <div className="flex flex-row flex-wrap justify-around">
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
                </div>
            </div>
            {isAuthenticated && (
                <button
                    className="flex justify-around mx-auto my-2 border-3 border-red-100"
                    onClick={() => {
                        setShow(true);
                    }}
                >
                    <span>Crear publicacion</span>
                </button>
            )}
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
            <div>
                <div className="pagination justify-content-center">
                    <ul className="pagination">
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
                                    currentPage === pageNumber ? 'active' : ''
                                }`}
                            >
                                <button
                                    className={`page-link ${
                                        currentPage === pageNumber
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={() => handlePageChange(pageNumber)}
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
    );
};

export default Clasificados;
