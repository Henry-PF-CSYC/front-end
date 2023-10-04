import React from "react"
export const LeftNovedades = () => {
    return (
      <>
          <div className='h-72'> 
            <h3 className=" font-fira-sans text-gray-600 text-2xl font-bold decoration-2 h-12">Novedades</h3>
            <img src="" alt="" />     
          </div>
      </>
    )
  }
  export const RightNovedades = () => {
    return (
      <>
        <div className="">
            <div className="flex">
                <h3 className=" font-fira-sans text-gray-600 text-2xl font-bold decoration-2 h-12">Novedades</h3>
                <h4 className="text-right font-fira-sans font-medium text-lg  h-10 text-blue-all tracking-wide uppercase">04 octubre 2023</h4>
            </div>
            <div className="bg-white p-10 rounded-lg mx-40">
                <h4 className="text-base font-bold text-gray-600 h-14">Aviso de corte de luz</h4>
                <p className="text-sm font-normal text-gray-600">Estimados clientes, les informamos que debido a trabajos de mantenimiento programados, habrá un corte de energía eléctrica en su área el --- desde las --- hasta las ---.
Este corte es necesario para mejorar la calidad de nuestro servicio y garantizar un suministro de energía confiable en el futuro. Lamentamos los inconvenientes que esto pueda causar y agradecemos su comprensión.</p>
            </div>
        </div>
      </>
    )
  }
  