import React from "react";
import CardsServicios from "../../Servicios/CardsServicios/CardsServicios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Otrosservicios = () => {
  const servicios = [
    { titulo: "Gas Natural", descripcion: "El servicio de gas más seguro y confiable para tu hogar.", type: "gas",},
    { titulo: "Internet", descripcion: "Conéctate a la velocidad de la luz con nuestro servicio de Internet.", type: "internet" },
    { titulo: "Electricidad", descripcion: "Energía eléctrica eficiente y confiable para tu hogar.", type: "luz" },
    { titulo: "Agua", descripcion: "Disfruta de agua potable de alta calidad en tu hogar.", type: "agua" },
    { titulo: "Telefonía", descripcion: "Comunicación clara y estable con nuestro servicio de telefonía.", type: "telefonia" },
    { titulo: "Cable", descripcion: "Entretenimiento sin límites con nuestro servicio de cable.", type: "cable" },
    { titulo: "Streaming", descripcion: "Descubre un mundo de contenido con nuestro servicio de streaming.", type: "streaming" },
   
  ];

  return (
    <>
      <div className=''>
        <div>
          <h4 className="font-fira-sans font-medium text-xl h-10 text-blue-all tracking-wide uppercase">Otros servicios</h4>
          <h3 className=" font-fira-sans text-gray-600 text-3xl font-bold decoration-2 h-12"> Servicios individuales</h3>
          <p className="font-fira-sans text-gray-600 font-medium text-lg leading-7 h-24">Consulta nuestros servicios más populares:</p>
        </div>


        {/* Carrusel */}
        <Swiper slidesPerView={2} spaceBetween={20} navigation pagination={{ clickable: true }} className="mySwiper mb-10"
          modules={[Navigation, Pagination, Mousewheel, Keyboard]} cssMode={true} keyboard={true}>

          {servicios.map((servicio, index) => (
            <SwiperSlide key={index}>
              <div className="h-[20rem] mb-[3rem]">
                <CardsServicios titulo={servicio.titulo} descripcion={servicio.descripcion} nombreBoton="Conocer más" type={servicio.type} />
              </div>
            </SwiperSlide>
          ))}

        </Swiper>

        <div className="flex flex-row h-14">
          <p className="font-fira-sans text-gray-600 font-normal text-sm "> Tienes dudas o preguntas? Visita este
            <a className="text-blue-all text-sm" href="/contacto"> link! </a></p>
        </div>

        <hr className="border-t-2 text-blue-400 h-10" />

        <div>
          <button></button>
          <button></button>
        </div>

        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Otrosservicios;
