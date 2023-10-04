import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Agua = () => {
  const services = useSelector((state) => state.backUpServices);
  const aguaService = services.filter((service) => service.type === "agua");

  return (
    // <section className="serviceNowContainer">
    //   <section id="servicInfo">
    //     <div className="titleService">
    //       <h1>Agua</h1>
    //     </div>
    //     <div className="containerDescription">
    //       <div className="textoIzquierda">
    //         <p>
    //           Nuestra suscripción de agua garantiza que tu hogar esté abastecido con agua potable de la más alta calidad. Nos comprometemos a proporcionar agua pura y segura para tu consumo diario y uso doméstico. Cada gota que fluye de nuestros grifos es sometida a rigurosos controles de calidad para garantizar que cumple con los estándares más estrictos.
    //         </p>
    //       </div>
    //       <div className="textoDerecha">
    //         <p>
    //           Nuestra red de suministro de agua está diseñada para ser confiable y eficiente. No tendrás que preocuparte por interrupciones en el suministro. Además, ofrecemos un servicio de atención al cliente dedicado para resolver cualquier consulta o problema que puedas tener relacionado con el agua.
    //         </p>
    //         <p>
    //           Tu suscripción de agua está activa y lista para proporcionarte el recurso vital que necesitas en tu hogar. Sabemos que la calidad del agua es esencial para tu salud y bienestar, y nos enorgullece ser tu proveedor de agua de confianza.
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    //   <hr />
    //   <section className="row serviceCards">
    //     {aguaService.map((service, index) => (
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
          <span className="font-fontGeneral font-bold text-6xl tracking-wide text-blue-all">{aguaService[0].name}</span>
        </div>
        <div className="grid place-content-center">
          <img className="rounded-2xl" width={'300px'} height={'300px'} src={aguaService[0].image} />
        </div>
        <div className="grid place-content-center col-span-2  mr-32">
          <p className="font-fontGeneral text-xl font-normal px-4 py-3">
            Nuestra suscripción de agua garantiza que tu hogar esté abastecido con agua potable de la más alta calidad. Nos comprometemos a proporcionar agua pura y segura para tu consumo diario y uso doméstico. Cada gota que fluye de nuestros grifos es sometida a rigurosos controles de calidad para garantizar que cumple con los estándares más estrictos.
          </p>
          <p className="font-fontGeneral text-xl font-normal px-4 py-3">
          Nuestra red de suministro de agua está diseñada para ser confiable y eficiente. No tendrás que preocuparte por interrupciones en el suministro. Además, ofrecemos un servicio de atención al cliente dedicado para resolver cualquier consulta o problema que puedas tener relacionado con el agua.
          </p>
          <p className="font-fontGeneral text-xl font-normal px-4 py-3">
          Tu suscripción de agua está activa y lista para proporcionarte el recurso vital que necesitas en tu hogar. Sabemos que la calidad del agua es esencial para tu salud y bienestar, y nos enorgullece ser tu proveedor de agua de confianza.
          </p>
        </div>
      </section>
      <section className="grid grid-flow-dense grid-cols-3 mx-96 px-10 mb-20">
        <div className="col-span-3">
          {aguaService.map((service, index) => (
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
              />
            </div>
          ))}

        </div>
      </section>
    </>
  );
};

export default Agua;
