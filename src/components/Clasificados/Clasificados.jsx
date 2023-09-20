import { useDispatch, useSelector } from 'react-redux';
import CardsClasificados from './CardsClasificados/CardsClasificados';
import style from './Clasificados.module.css';
import { useEffect } from 'react';
import { getClasificados } from '../../redux/actions';

const array = [
    {
        tipo: 'oferta',
        titulo: 'titulo',
        descripcion: 'descripcion',
        contacto: 'contacto'
    },
    {
        tipo: 'oferta',
        titulo: 'titulo',
        descripcion: 'descripcion',
        contacto: 'contacto'
    },
    {
        tipo: 'oferta',
        titulo: 'titulo',
        descripcion: 'descripcion',
        contacto: 'contacto'
    },
    {
        tipo: 'oferta',
        titulo: 'titulo',
        descripcion: 'descripcion',
        contacto: 'contacto'
    },
    {
        tipo: 'oferta',
        titulo: 'titulo',
        descripcion: 'descripcion',
        contacto: 'contacto'
    },
    {
        tipo: 'oferta',
        titulo: 'titulo',
        descripcion: 'descripcion',
        contacto: 'contacto'
    },
    {
        tipo: 'oferta',
        titulo: 'titulo',
        descripcion: 'descripcion',
        contacto: 'contacto'
    },
    {
        tipo: 'oferta',
        titulo: 'titulo',
        descripcion: 'descripcion',
        contacto: 'contacto'
    },
    {
        tipo: 'oferta',
        titulo: 'titulo',
        descripcion: 'descripcion',
        contacto: 'contacto'
    },
    {
        tipo: 'oferta',
        titulo: 'titulo',
        descripcion: 'descripcion',
        contacto: 'contacto'
    },
    {
        tipo: 'oferta',
        titulo: 'titulo',
        descripcion: 'descripcion',
        contacto: 'contacto'
    }
];
// const dispatch = useDispatch();
// useEffect(() => {
//     dispatch(getClasificados());
// }, []);

// const clasi = useSelector((state) => state.clasificados);

const Clasificados = () => {
    return (
        <div className={style.page}>
            <div className={style.container}>
                {array.map((clasificado) => (
                    <CardsClasificados
                        tipo={clasificado.tipo}
                        titulo={clasificado.titulo}
                        descripcion={clasificado.descripcion}
                        contacto={clasificado.contacto}
                    />
                ))}
            </div>
            <button className={style.button}>
                <span className={style.span}>Crear publicacion</span>
            </button>
        </div>
    );
};

export default Clasificados;
