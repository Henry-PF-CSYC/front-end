import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Streaming = () => {
  const services = useSelector((state) => state.backUpServices);
  const streamingServices = services.filter((service) => service.type === "streaming");

  return (
   
    <>
    <section className="grid grid-flow-dense grid-cols-3 py-20">
      <div className="col-span-3 text-center mt-4">
        <span className="font-fontGeneral font-bold text-6xl tracking-wide text-blue-all">Streaming</span>
      </div>
      <div className="grid place-content-center">
        <img className="rounded-2xl" width={'300px'} height={'300px'} src={streamingServices[7].image} />
      </div>
      <div className="grid place-content-center col-span-2  mr-32">
        <p className="font-fontGeneral text-xl font-normal px-4 py-3">
        Te ofrecemos acceso a una biblioteca interminable de contenido de transmisión en línea. Desde éxitos de taquilla hasta series originales y documentales, tendrás todo lo que necesitas para tus noches de entretenimiento. 
        </p>
        
        <p className="font-fontGeneral text-xl font-normal px-4 py-3">
        Únete a nosotros y descubre una nueva forma de ver televisión. Con opciones personalizadas y una amplia variedad de contenido, satisfacemos todos tus gustos de entretenimiento.
        </p>
      </div>
    </section>
    <section className="grid grid-flow-dense grid-cols-3 gap-2 mx-10 mb-20 ">
        {streamingServices.map((service, index) => (
          <div key={index}>
            <CardsServicios
              imagen={service.image}
              titulo={service.name}
              nombreBoton="Lo quiero!"
              descripcion={service.description}
              precio={service.price}
              estado={service.status}
              type={service.type}
              id={service.id}
              index={index}
            />
          </div>
        ))}
    </section>
    </>
  );
};

export default Streaming;
