import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Streaming = () => {
  const services = useSelector((state) => state.backUpServices);
  const streamingServices = services.filter((service) => service.type === "streaming");

  return (
    // <section className="serviceNowContainer">
    //   <section id="servicInfo">
    //     <div className="titleService">
    //       <h1>Streaming</h1>
    //     </div>
    //     <div className="containerDescription">
    //       <div className="textoIzquierda">
    //         <p>
    //           Te ofrecemos acceso a una biblioteca interminable de contenido de transmisión en línea. Desde éxitos de taquilla hasta series originales y documentales, tendrás todo lo que necesitas para tus noches de entretenimiento. Con una interfaz fácil de usar y transmisión en alta definición, podrás disfrutar de tus programas y películas favoritos sin interrupciones.
    //         </p>
    //       </div>
    //       <div className="textoDerecha">
    //         <p>
    //           Nuestra suscripción de streaming también permite la visualización en múltiples dispositivos, para que puedas disfrutar en casa o mientras te desplazas. Además, estamos constantemente actualizando nuestro catálogo para ofrecerte lo último en entretenimiento.
    //         </p>
    //         <p>
    //           Únete a nosotros y descubre una nueva forma de ver televisión. Con opciones personalizadas y una amplia variedad de contenido, satisfacemos todos tus gustos de entretenimiento.
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    //   <hr />
    //   <section className="row serviceCards">
    //     {streamingServices.map((service, index) => (
    //       <div key={index} className="col-4">
    //         <CardsServicios
    //           imagen={service.image}
    //           titulo={service.name}
    //           nombreBoton="Lo quiero!"
    //           descripcion={service.description}
    //           precio={service.price}
    //           estado={service.status}
    //           type={service.type}
    //           id={service.id}
    //         />
    //       </div>
    //     ))}
    //   </section>
    // </section>
    <>
    <section className="grid grid-flow-dense grid-cols-3 py-20">
      <div className="col-span-3 text-center">
        <span className="font-fontGeneral font-bold text-6xl tracking-wide text-blue-all">Streaming</span>
      </div>
      <div className="grid place-content-center">
        <img className="rounded-2xl" width={'300px'} height={'300px'} src={streamingServices[7].image} />
      </div>
      <div className="grid place-content-center col-span-2  mr-32">
        <p className="font-fontGeneral text-xl font-normal p-4">
          Nuestra suscripción de electricidad te brinda acceso a una fuente confiable de energía que iluminará tu hogar y facilitará tu vida diaria. Con nosotros, disfrutarás de una electricidad de alta calidad que alimenta tus dispositivos y electrodomésticos de manera eficiente y segura.
        </p>
        <p className="font-fontGeneral text-xl font-normal p-4">
          Obtendrás acceso a un servicio de atención al cliente dedicado para responder a tus preguntas y resolver cualquier problema que puedas enfrentar. También te proporcionamos asesoramiento sobre la eficiencia energética para ayudarte a reducir tus costos y minimizar tu impacto ambiental. No esperes más, únete a nosotros y experimenta la diferencia!
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
