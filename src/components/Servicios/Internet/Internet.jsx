import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Internet = () => {
  const services = useSelector((state) => state.backUpServices);
  const internetService = services.filter((service) => service.type === "internet");

  return (
    <section className="serviceNowContainer">
      <section id="servicInfo">
        <div className="titleService">
          <h1>Internet</h1>
        </div>
        <div className="containerDescription">
          <div className="textoIzquierda">
            <p>
              Nuestra suscripción de Internet de alta velocidad ofrece una experiencia en línea sin igual. Disfrutarás de una navegación suave y sin demoras. Ya sea que estés transmitiendo contenido multimedia, realizando videollamadas de alta definición o trabajando desde casa, nuestra confiable conexión te permitirá hacerlo todo sin problemas.
            </p>
          </div>
          <div className="textoDerecha">
            <p>
              Además de la velocidad, nuestra suscripción incluye una serie de beneficios adicionales. Obtendrás acceso a un servicio de atención al cliente dedicado para responder a tus preguntas y resolver cualquier problema que puedas enfrentar.
            </p>
            <p>
              En cuanto al costo, ofrecemos varios planes para acoplarte al uso que necesites. Es una inversión que te brindará una conectividad confiable para todas tus necesidades en línea. No esperes más, únete a nosotros y experimenta el Internet en su mejor momento.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section className="row serviceCards">
        {internetService.map((service, index) => (
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

export default Internet;
