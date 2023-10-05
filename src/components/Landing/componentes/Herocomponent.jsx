import React from 'react'

const imagen = "https://cdn.discordapp.com/attachments/1148640720442359982/1157050868714192896/Group_6.png?ex=651c7918&is=651b2798&hm=bdcd685d6bac448fe947a5b8f6747afd5ad5379abe5d31bcc374b19b92859431&"

export const LeftSideHero = () => {
  return (
    <>
        <div className='mt-14 pb-10'>
                 <h1 className='font-fontGeneral font-bold text-4xl leading-10 text-gray-600 w-44 h-16'>CSyC</h1>
                 <p className='font-fontGeneral text-3xl leading-8 text-gray-600 w-425 h-10 font-medium'>
                    Donde todos nos  
                </p>
                <p className='font-fontGeneral font-medium text-3xl leading-8  w-auto h-20 text-blue-all tracking-wide '>
                        ayudamos
                    </p>
                 <p className='font-fira-sans font-normal text-base leading-7 text-gray-600 w-96 h-40'>    
                        Pasión y compromiso son nuestras prioridades para ofrecerte servicios de vanguardia. 
                        Nuestra experiencia te aseguran resultados excepcionales y soluciones adaptadas a tus necesidades.
                </p>
                <button className='bg-blue-500  px-10 py-2 rounded-xl  hover:bg-blue-600 duration-400'>
                    <span className='text-white font-fira-sans'>
                        Ingresar
                    </span>
                </button>
        </div>
    </>
  )
}
export const RightSideHero = () => {
  return (
    <>
        <div className=' ml-4'>
                <img className='w-100 ' src={imagen}></img>
                 
             </div>
    </>
  )
}
