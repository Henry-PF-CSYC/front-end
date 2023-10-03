import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Internet = () => {
  const services = useSelector((state) => state.backUpServices);
  const internetService = services.filter((service) => service.type === "internet");
  
  return (
    // <section className="serviceNowContainer">
    //   <section id="servicInfo">
    //     <div className="titleService">
    //       <h1>Internet</h1>
    //     </div>
    //     <div className="containerDescription">
    //       <div className="textoIzquierda">
    //         <p>
    //           Nuestra suscripción de Internet de alta velocidad ofrece una experiencia en línea sin igual. Disfrutarás de una navegación suave y sin demoras. Ya sea que estés transmitiendo contenido multimedia, realizando videollamadas de alta definición o trabajando desde casa, nuestra confiable conexión te permitirá hacerlo todo sin problemas.
    //         </p>
    //       </div>
    //       <div className="textoDerecha">
    //         <p>
    //           Además de la velocidad, nuestra suscripción incluye una serie de beneficios adicionales. Obtendrás acceso a un servicio de atención al cliente dedicado para responder a tus preguntas y resolver cualquier problema que puedas enfrentar.
    //         </p>
    //         <p>
    //           En cuanto al costo, ofrecemos varios planes para acoplarte al uso que necesites. Es una inversión que te brindará una conectividad confiable para todas tus necesidades en línea. No esperes más, únete a nosotros y experimenta el Internet en su mejor momento.
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    //   <hr />
    //   <section className="row serviceCards">
    //     {internetService.map((service, index) => (
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
        <span className="font-fontGeneral font-bold text-6xl tracking-wide text-blue-all">Internet</span>
      </div>
      <div className="grid place-content-center">
        <img className="rounded-2xl" width={'300px'} height={'300px'} src={internetService[2].image} />
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
    <section className="grid grid-flow-dense grid-cols-2 gap-2 mx-24 mb-20 ">
        {internetService.map((service, index) => (
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

export default Internet;
