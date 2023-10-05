import './Landing.css';
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getServices } from "../../redux/actions"

import novedades from './componentes/imagenes/novedades.png'

import { LeftSideHero, RightSideHero } from './componentes/Herocomponent';
import { Otrosservicios } from './componentes/Otrosservicios';
import {RightNovedades, LeftNovedades} from './componentes/Novedades';
import { Newsletter } from './componentes/Newsletter';



const Landing = () =>{

    const dispatch = useDispatch() 
    useEffect(()=>{ dispatch(getServices())},[] )


    // Renderizado
    return (
    <section className="">
      <div className="columns-2 pt-36 mx-24 mb-52">
        <LeftSideHero /> 
        <RightSideHero /> 
      </div>
      <div className='mx-24'>
        <Otrosservicios/>
      </div>
        <div>
          <img src={novedades} alt="error de imagen" />
        </div>
      <div className='mx-24 '>
        <RightNovedades/>
      </div>
    
    </section>
    );
};

export default Landing;
