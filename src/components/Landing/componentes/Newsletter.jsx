import React from "react"
export const Newsletter = () => {
return (
<>
  <div className='bg-blue-500 flex flex-row rounded-2xl '>
    <div className="w-80 ml-14 my-28">
      <h2 className="font-fira-sans font-bold text-3xl h-28 text-white">Suscribite a nuestro Newsletter</h2>
      <p className="text-sm text-white font-light ">Regístrate y entérate de todas las novedades que CSyC tiene para ti.
        <br />Podrías recibir un descuento para pagar tus servicios.</p>
    </div>
    <div className=" ml-20 bg-white px-8 my-16 w-96 rounded-xl mb-20">
      <div className="flex flex-col mt-10 ">
        <input className=" rounded h-10 border-2 border-blue-300 mb-4 " type="text" placeholder="    Nombre" />
        <input className="rounded h-10 border-2 border-blue-300" type="text" placeholder="    E-mail" />
      </div>
      <div className="mt-20">
        <button className='bg-blue-500 px-10 py-1 rounded-xl'>
          <span className='text-white font-fira-sans'>
            Ingresar
          </span>
        </button>
      </div>
    </div>
  </div>

</>
)
}