import React from "react";
import { getNotices } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const LeftNovedades = () => {
    return (
        <>
            <div className='h-72'>
                <h3 className="font-fira-sans text-gray-600 text-2xl font-bold decoration-2 h-12">Novedades</h3>
                <img src="" alt="" />
            </div>
        </>
    );
};

export const RightNovedades = () => {
    const dispatch = useDispatch();

    // Despachamos acción para obtener novedades
    useEffect(() => {
        const obtenerNovedades = async () => {
            try {
                dispatch(await getNotices({ randomParam: Date.now() }));
            } catch (error) {
                console.error('Error al obtener novedades:', error);
            }
        };
        obtenerNovedades();
    }, [dispatch]);

    // Guardamos novedades
    const notices = useSelector((state) => state.notices);

    // Verificamos si los datos están disponibles antes de mostrarlos
    if (!notices || notices.length === 0) {
        return <div>Cargando datos... esto suele suceder cuando no los hay!</div>;
    }

    // Carrusel
    const slides = notices.slice(0, 10).map((notice) => {
        const createdAt = new Date(notice.createdAt);
        const day = createdAt.getDate();
        const month = createdAt.getMonth() + 1;
        const year = createdAt.getFullYear();
        const hours = createdAt.getHours();
        const minutes = createdAt.getMinutes();
        const formattedDate = `${day}/${month}/${year} a las ${hours}:${minutes}`;

        return (
            <SwiperSlide key={notice.id}>
                <div className="bg-white p-10 rounded-lg mx-40 shadow-lg">
                    <p className="text-[1.2rem] font-normal text-blue-500 m-1">{formattedDate}</p>
                    <h4 className="text-[1.2rem] font-bold text-gray-600 m-1">{notice.title}</h4>
                    <p className="text-[1rem] font-normal text-gray-600 m-1">{notice.description}</p>
                </div>
            </SwiperSlide>
        );
    });

    return (
        <div>
            <div className="">
                <div className="flex">
                    <h3 className="font-fira-sans text-gray-600 text-2xl font-bold decoration-2 h-12">
                        Novedades / Avisos importantes
                    </h3>
                </div>

                <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]} className="mySwiper">
                    {slides}
                </Swiper>
            </div>
        </div>
    );
};
  
