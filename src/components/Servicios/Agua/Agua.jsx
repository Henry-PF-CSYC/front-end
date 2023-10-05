import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Agua = () => {
  const services = useSelector((state) => state.backUpServices);
  const aguaService = services.filter((service) => service.type === "agua");

  return (
    
    <>
      <section className="grid grid-flow-dense grid-cols-3 py-20">
        <div className="col-span-3 text-center mt-3">
          <span className="font-fontGeneral font-bold text-6xl tracking-wide text-blue-all">{aguaService[0].name}</span>
        </div>

        <div className="grid place-content-center">
          <img className="rounded-2xl" width={'300px'} height={'300px'} src={aguaService[0].image} />
        </div>

        <div className="grid place-content-center col-span-2">
          <p className="font-fontGeneral text-xl font-normal px-4 py-3">
            Nuestra suscripción de agua garantiza que tu hogar esté abastecido con agua potable de la más alta calidad. Nos comprometemos a proporcionar agua pura y segura para tu consumo diario y uso doméstico. Cada gota que fluye de nuestros grifos es sometida a rigurosos controles de calidad para garantizar que cumple con los estándares más estrictos.
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
