import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Telefonia = () => {
  const services = useSelector((state) => state.backUpServices);
  const telefoniaServices = services.filter((service) => service.type === "telefonia");

  return (
    <section className="serviceNowContainer">
      <section id="servicInfo">
        <div className="titleService">
          <h1>Telefonía</h1>
        </div>
        <div className="containerDescription">
          <div className="textoIzquierda">
            <p>
              Te ofrecemos un servicio de telefonía que va más allá de las llamadas y los mensajes. Nuestra red de telefonía confiable te conecta con tus seres queridos y colegas en cualquier momento y en cualquier lugar. Con tarifas competitivas y una amplia cobertura, puedes estar seguro de que siempre estarás en línea.
            </p>
          </div>
          <div className="textoDerecha">
            <p>
              Además de llamadas nacionales e internacionales asequibles, también ofrecemos funciones avanzadas, como correo de voz y conferencias telefónicas. Nuestra atención al cliente está disponible para brindarte asistencia cuando la necesites. Únete a nosotros y experimenta la comunicación sin fronteras.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section className="row serviceCards">
        {telefoniaServices.map((service, index) => (
          <div key={index} className="col-4">
            <CardsServicios
              imagen={service.image}
              titulo={service.name}
              nombreBoton="Lo quiero!"
              descripcion={service.description}
              precio={service.price}
              estado={service.status}
              type={service.type}
              id={service.id}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Telefonia;
