import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Cable = () => {
  const services = useSelector((state) => state.backUpServices);
  const cableService = services.filter((service) => service.type === "cable");

  return (
    <section className="serviceNowContainer">
      <section id="servicInfo">
        <div className="titleService">
          <h1>Television por Cable</h1>
        </div>
        <div className="containerDescription">
          <div className="textoIzquierda">
            <p>
              Nuestro servicio de cable es tu puerta de entrada al mejor entretenimiento televisivo. Con una amplia selección de canales, desde programas para niños hasta deportes en vivo, te ofrecemos la televisión por cable más completa. Disfruta de tus programas y eventos favoritos con una calidad de imagen y sonido excepcionales.
            </p>
          </div>
          <div className="textoDerecha">
            <p>
              Nuestra suscripción de televisión por cable también incluye funciones adicionales, como grabación de programas y acceso a aplicaciones de transmisión. Ya sea que quieras relajarte en casa o mantenerte al día con las últimas noticias, VisiónFamiliar tiene algo para cada miembro de la familia. Únete a nosotros y experimenta el entretenimiento en su máxima expresión.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section className="row serviceCards">
        {cableService.map((service, index) => (
          <div key={index} className="col-4">
            <CardsServicios
              imagen={service.image}
              titulo={service.name}
              nombreBoton="Lo quiero!"
              descripcion={service.description}
              precio={service.price}
              estado={service.status}
              id={service.id}
              type={service.type}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Cable;
