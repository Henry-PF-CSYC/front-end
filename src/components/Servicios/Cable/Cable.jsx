import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Cable = () => {
  const services = useSelector((state) => state.backUpServices);
  const cableService = services.filter((service) => service.type === "cable");

  return (
   
    <>
    <section className="grid grid-flow-dense grid-cols-3 py-20">
      <div className="col-span-3 text-center mt-4">
        <span className="font-fontGeneral font-bold text-6xl tracking-wide text-blue-all">Television por Cable</span>
      </div>
      <div className="grid place-content-center">
        <img className="rounded-2xl" width={'300px'} height={'300px'} src={cableService[2].image} />
      </div>
      <div className="grid place-content-center col-span-2  mr-32">
        <p className="font-fontGeneral text-xl font-normal p-4">
        Nuestro servicio de cable es tu puerta de entrada al mejor entretenimiento televisivo. Con una amplia selección de canales, desde programas para niños hasta deportes en vivo, te ofrecemos la televisión por cable más completa. 
        </p>
        <p className="font-fontGeneral text-xl font-normal p-4">
        Disfruta de tus programas y eventos favoritos con una calidad de imagen y sonido excepcionales. Únete a nosotros y experimenta el entretenimiento en su máxima expresión.
        </p>
      </div>
    </section>
    <section className="grid grid-flow-dense grid-cols-2 gap-2 mx-24 mb-20 ">
        {cableService.map((service, index) => (
          <div key={index} >
            <CardsServicios
              imagen={service.image}
              titulo={service.name}
              nombreBoton="Lo quiero!"
              descripcion={service.description}
              precio={service.price}
              estado={service.status}
              type={service.type}
              index={index}
              id={service.id}
            />
          </div>
        ))}
    </section>
    </>
  );
};

export default Cable;
