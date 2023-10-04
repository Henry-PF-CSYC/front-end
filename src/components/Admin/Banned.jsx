import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { emptyUser } from '../../redux/actions';
import "./Banned.css"

const Banned = () => {
  const { logout } = useAuth0();
  const dispatch = useDispatch();


  const handleLogout = async () => {
  await dispatch(await emptyUser());
  await logout({returnTo: window.location.origin})};
  

  return (
    <div className='errorOrBanned'>
      <h1> Has sido baneado, por incumplir los términos de servicio, escribe al correo de contacto para solicitar asistencia.</h1>

      <Button variant="primary" onClick={handleLogout}>Cerrar sesión</Button>
    </div>);
};

export default Banned;