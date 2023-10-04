import './Landing.css';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getServices, getContactData } from "../../redux/actions"
import { Link } from 'react-router-dom';

import novedades from './componentes/imagenes/novedades.png'


import { LeftSideHero, RightSideHero } from './componentes/Herocomponent';
import { Otrosservicios } from './componentes/Otrosservicios';
import {RightNovedades, LeftNovedades} from './componentes/Novedades';
import { Newsletter } from './componentes/Newsletter';

// Imagenes
const gas = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fgas.webp?alt=media&token=9a8899a4-88be-4150-bafa-0b7738e557e8"
const internet = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Finternet.webp?alt=media&token=cb1c9a73-1eee-427a-9a93-6cefd5f7aa23"
const luz = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fluz.webp?alt=media&token=f8739218-4576-4422-9543-f28838a88d28"
const agua = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fagua.jpg?alt=media&token=b6629946-52ef-40df-9f02-02cf1dba940f"
const cable = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fcable.webp?alt=media&token=717d29a6-d670-4812-b656-3cf1bf22dbb6"
const telefonia = "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Ftelefonia.jpg?alt=media&token=865fa468-d6f5-42ab-976d-43509b55f382"
const streaming =  "https://firebasestorage.googleapis.com/v0/b/pf-henry-16edc.appspot.com/o/servicios-landing%2Fstreaming.webp?alt=media&token=5d9b5d20-7a1f-4662-b0c8-1f627221dc50"
// const novedades = url('./componentes/imagenes/novedades.png')



const Landing = () =>{

    const dispatch = useDispatch() 
    useEffect(()=>{ dispatch(getServices())},[] )


    // Renderizado
    return (
    <section className="">
      <div className="columns-2 pt-36 mx-24 mb-52">
        <LeftSideHero /> {/* Aquí utilizas el componente LeftSideHero */}
        <RightSideHero /> {/* Aquí utilizas el componente RightSideHero */}
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
      <div className='mx-60'>
        <Newsletter/>
      </div>
    </section>
    );
};

export default Landing;
