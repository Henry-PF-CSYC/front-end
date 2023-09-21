import { useDispatch, useSelector } from 'react-redux';
import CardsClasificados from './CardsClasificados/CardsClasificados';
import style from './Clasificados.module.css';
import { useEffect, useState } from 'react';
import { getClasificados, postClasificados } from '../../redux/actions';
import ModalClasificado from './ModalClasificado/ModalClasificado';
import ModalPublicacion from './ModalPublicacion/ModalPublicacion';
import { useAuth0 } from '@auth0/auth0-react';

const Clasificados = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [publicacion, setPublicacion] = useState({});
    const handleClose = () => {
        setShow(false);
        setShow2(false);
    };
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useAuth0();
    const handleSubmit = (value, event) => {
        event.preventDefault();
        console.log(value);
        dispatch(postClasificados(value));
        setShow(false);
    };

    useEffect(() => {
        dispatch(getClasificados());
    }, []);

    const clasi = useSelector((state) => state.clasificados);

    return (
        <div className={style.page}>
            <div className={style.container}>
                {clasi.map((clasificado) => (
                    <button
                        onClick={() => {
                            console.log('click');
                            setPublicacion(clasificado);
                            setShow2(true);
                        }}
                        className={style.boton}
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
                ))}
            </div>
            {isAuthenticated && (
                <button
                    className={style.button}
                    onClick={() => {
                        setShow(true);
                    }}
                >
                    <span className={style.span}>Crear publicacion</span>
                </button>
            )}
            <ModalClasificado
                show={show}
                handleSubmit={handleSubmit}
                handleClose={handleClose}
                email={isAuthenticated ? user.email : ''}
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
