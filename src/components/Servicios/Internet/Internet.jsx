import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Internet = () => {
  const services = useSelector((state) => state.backUpServices);
  const internetService = services.filter((service) => service.type === "internet");

  return (
   
    <>
      <section className="grid grid-flow-dense grid-cols-3 py-20">
        <div className="col-span-3 text-center mt-4">
          <span className="font-fontGeneral font-bold text-6xl tracking-wide text-blue-all">Internet</span>
        </div>
        <div className="grid place-content-center">
          <img className="rounded-2xl" width={'300px'} height={'300px'} src={internetService[2].image} />
        </div>
        <div className="grid place-content-center col-span-2  mr-32">
          <p className="font-fontGeneral text-xl font-normal px-4 py-3">
            Nuestra suscripción de Internet de alta velocidad ofrece una experiencia en línea sin igual. Disfrutarás de una navegación suave y sin demoras. 
          </p>
         
          <p className="font-fontGeneral text-xl font-normal px-4 py-3">
          Ya sea que estés transmitiendo contenido multimedia, realizando videollamadas de alta definición o trabajando desde casa, nuestra confiable conexión te permitirá hacerlo todo sin problemas. No esperes más, únete a nosotros y experimenta el Internet en su mejor momento.
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
