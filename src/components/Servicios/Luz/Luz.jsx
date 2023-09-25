import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Luz = () => {
  const services = useSelector((state) => state.backUpServices);
  const luzService = services.filter((service) => service.type === "luz");

  return (
    <section className="serviceNowContainer">
      <section id="servicInfo">
        <div className="titleService">
          <h1>Electricidad</h1>
        </div>
        <div className="containerDescription">
          <div className="textoIzquierda">
            <p>
              Nuestra suscripción de electricidad te brinda acceso a una fuente confiable de energía que iluminará tu hogar y facilitará tu vida diaria. Con nosotros, disfrutarás de una electricidad de alta calidad que alimenta tus dispositivos y electrodomésticos de manera eficiente y segura.
            </p>
          </div>
          <div className="textoDerecha">
            <p>
              Obtendrás acceso a un servicio de atención al cliente dedicado para responder a tus preguntas y resolver cualquier problema que puedas enfrentar. También te proporcionamos asesoramiento sobre la eficiencia energética para ayudarte a reducir tus costos y minimizar tu impacto ambiental. No esperes más, únete a nosotros y experimenta la diferencia!
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section className="row serviceCards">
        {luzService.map((service, index) => (
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

export default Luz;
