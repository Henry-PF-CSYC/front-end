import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Telefonia = () => {
  const services = useSelector((state) => state.backUpServices);
  const telefoniaServices = services.filter((service) => service.type === "telefonia");

  return (

    <>
    <section className="grid grid-flow-dense grid-cols-3 py-20">
      <div className="col-span-3 text-center mt-4">
        <span className="font-fontGeneral font-bold text-6xl tracking-wide text-blue-all">Telefonía</span>
      </div>
      <div className="grid place-content-center">
        <img className="rounded-2xl" width={'300px'} height={'300px'} src={telefoniaServices[2].image} />
      </div>
      <div className="grid place-content-center col-span-2  mr-32">
        <p className="font-fontGeneral text-xl font-normal p-4">
        Te ofrecemos un servicio de telefonía que va más allá de las llamadas y los mensajes. Nuestra red de telefonía confiable te conecta con tus seres queridos y colegas en cualquier momento y en cualquier lugar.
        </p>
        <p className="font-fontGeneral text-xl font-normal p-4">
        Nuestra atención al cliente está disponible para brindarte asistencia cuando la necesites. Únete a nosotros y experimenta la comunicación sin fronteras.
        </p>
      </div>
    </section>
    <section className="grid grid-flow-dense grid-cols-3 gap-2 mx-10 mb-20 ">
        {telefoniaServices.map((service, index) => (
          <div key={index} >
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

export default Telefonia;
