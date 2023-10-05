import './Landing.css';
import { useEffect } from "react"
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from "react-redux"
import { getServices, getUser } from "../../redux/actions"
import { LeftSideHero, RightSideHero } from './componentes/Herocomponent';
import Otrosservicios from './componentes/Otrosservicios';
import {RightNovedades } from './componentes/Novedades';
import novedades from './componentes/imagenes/novedades.png'




const Landing = () =>{

  const { user, isAuthenticated } = useAuth0(); 

     const dispatch = useDispatch();

     useEffect(() => {
         dispatch(getServices());

         const checkUserStatus = async () => {
             if (isAuthenticated && user && user.email) {
                 dispatch(getUser(user.email));
             }
         };

       checkUserStatus();
     }, [dispatch, user, isAuthenticated]); 

    
    // const dispatch = useDispatch() 
    // useEffect(()=>{ dispatch(getServices())},[] )




    // Renderizado
    return (
    <section className="">
      <div className="grid grid-flow-dense grid-cols-2 pt-36 mx-24 mb-44">
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
