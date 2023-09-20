import { useDispatch, useSelector } from 'react-redux';
import CardsClasificados from './CardsClasificados/CardsClasificados';
import style from './Clasificados.module.css';
import { useEffect, useState } from 'react';
import { getClasificados, postClasificados } from '../../redux/actions';
import ModalClasificado from './ModalClasificado/ModalClasificado';
import { useAuth0 } from '@auth0/auth0-react';

const array = [
    {
        picture:
            'https://upload.wikimedia.org/wikipedia/commons/7/7c/Mallard_080508.jpg',
        tipo: 'oferta',
        titulo: 'titulo',
        descripcion: 'descripcion',
        contacto: 'contacto'
    }
];

const Clasificados = () => {
    const [show, setShow] = useState(false);

    const handleClose = (value) => {
        dispatch(postClasificados(value));
        setShow(false);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClasificados());
    }, []);

    const clasi = useSelector((state) => state.clasificados);

    return (
        <div className={style.page}>
            <div className={style.container}>
                {array.map((clasificado) => (
                    <CardsClasificados
                        picture={clasificado.picture}
                        tipo={clasificado.tipo}
                        titulo={clasificado.titulo}
                        descripcion={clasificado.descripcion}
                        contacto={clasificado.contacto}
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
            <ModalClasificado show={show} handleClose={handleClose} />
        </div>
    );
};

export default Clasificados;
