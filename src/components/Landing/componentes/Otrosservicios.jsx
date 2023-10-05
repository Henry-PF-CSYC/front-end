import React from "react"
import CardsServicios from "../../Servicios/CardsServicios/CardsServicios"
import propano from "../../assets/propane.svg"

export const Otrosservicios = () => {
    return (
      <>
        <div className=''>
          <div>  
            <h4 className="font-fira-sans font-medium text-xl h-10 text-blue-all tracking-wide uppercase">Otros servicios</h4>
            <h3 className=" font-fira-sans text-gray-600 text-3xl font-bold decoration-2 h-12"> Servicios individuales</h3>
            <p className="font-fira-sans text-gray-600 font-medium text-lg leading-7 h-24" >Consulta nuestros servicios más populares:</p>
          </div>



          <CardsServicios titulo="Gas Natural" descripcion="El servicio de gas más seguro y confiable." 
          nombreBoton="Más información" imagen={propano}/>
          <CardsServicios/>
          <CardsServicios/>






          <div className="flex flex-row h-14">
            <p className="font-fira-sans text-gray-600 font-normal text-sm "> Para descubrir aún más, visita este
            <a className="text-blue-all text-sm" href="/servicios"> link! </a></p>
           
          </div>
          <div>
          </div>
          <hr className="border-t-2 text-blue-400 h-10"/>
          <div>
            <button></button>
            <button></button>
          </div>
          <div></div>
          <div></div>
        </div>

      </>
    )
  }