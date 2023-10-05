import React from 'react';
import { useEffect } from "react"
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { emptyUser, getContactData } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux"
import "./BannedOrError.css"

const Banned = () => {
  const { logout } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
      const obtenerContacto = async () => {
          try {
              await dispatch( getContactData({ randomParam: Date.now() }));
              } catch (error) { console.error('Error al obtener contacto:', error);}};
              obtenerContacto()}, [dispatch]); 
  const contactData = useSelector((state) => state.contactData); 

  const handleLogout = async () => {
    await dispatch(await emptyUser());
    await logout(); 
    window.location.href = '/'}
  
 

  // Renderizado
  return (
    <section className='errorOrBanned'>

      <div className='bannedOrErrorContainer'>
        <h1> Has sido baneado por incumplir los términos de servicio. </h1>

        <img src="./error.png" alt="error" />

        <h1> Escriba al correo de contacto para solicitar asistencia: </h1>
        <h1> {contactData.email} </h1>
        
        <br/>

        <h1> O bien, escriba a nuestro teléfono: </h1>
        <h1> {contactData.phone} </h1>

        <Button variant="primary" onClick={handleLogout}>Cerrar sesión</Button>
    </div>

    </section>);
};

export default Banned;