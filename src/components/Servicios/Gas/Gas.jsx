import "../ServiciosIndividuales.css";
import CardsServicios from "../CardsServicios/CardsServicios";
import { useSelector } from "react-redux";

const Gas = () => {
  const services = useSelector((state) => state.backUpServices);
  const gasService = services.filter((service) => service.type === "gas");

  return (
   
    <>
      <section className="grid grid-flow-dense grid-cols-3 py-20">
        <div className="col-span-3 text-center mt-4">
          <span className="font-fontGeneral font-bold text-6xl tracking-wide text-blue-all">{gasService[0].name}</span>
        </div>
        <div className="grid place-content-center">
          <img className="rounded-2xl" width={'300px'} height={'300px'} src={gasService[0].image} />
        </div>
        <div className="grid place-content-center col-span-2  mr-32">
          <p className="font-fontGeneral text-xl font-normal px-4 py-3">
            Nuestra suscripción de gas natural te brinda un suministro confiable de calor y energía para tu hogar. Con nosotros, puedes estar seguro de que siempre tendrás la temperatura adecuada en tu casa, sin importar el clima exterior. El gas natural es una opción respetuosa con el medio ambiente y eficiente en términos energéticos.
          </p>
        
          <p className="font-fontGeneral text-xl font-normal px-4 py-3">
          Únete a nosotros y disfruta de la tranquilidad que brinda tener un suministro de gas confiable y eficiente en todo momento.
          </p>
        </div>
      </section>
      <section className="grid grid-flow-dense grid-cols-3 mx-96 px-10 mb-20">
        <div className="col-span-3">
          {gasService.map((service, index) => (
            <div key={index} >
              <CardsServicios
                imagen={gasService[0].image}
                titulo={gasService[0].name}
                nombreBoton="Lo quiero!"
                descripcion={gasService[0].description}
                precio={gasService[0].price}
                estado={gasService[0].status}
                type={gasService[0].type}
                id={gasService[0].id}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gas;
