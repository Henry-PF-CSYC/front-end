import { useDispatch, useSelector } from 'react-redux';
import CardsClasificados from './CardsClasificados/CardsClasificados';
import style from './Clasificados.module.css';
import { useEffect, useState } from 'react';
import { getClasificados, postClasificados } from '../../redux/actions';
import ModalClasificado from './ModalClasificado/ModalClasificado';
import { useAuth0 } from '@auth0/auth0-react';

const Clasificados = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
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
                    <CardsClasificados
                        picture={clasificado.image}
                        tipo={clasificado.type}
                        titulo={clasificado.title}
                        descripcion={clasificado.description}
                        contacto={clasificado.contact}
                        precio={clasificado.price}
                    />
                ))}
            </div>
            {true && (
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
                //email={user.email}
                email="cristianbarth.1@gmail.com"
            />
        </div>
    );
};

export default Clasificados;
