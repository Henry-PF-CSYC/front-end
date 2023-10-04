import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./BannedOrError.css"

const NotFound = () => {
  return (
    <section className='errorOrBanned'>

      <div className='bannedOrErrorContainer'>
        <h1> Ups! No encontrado! </h1>
        <img src="./error.png" alt="error" />
        <h1> La página que buscas no existe o se ha eliminado </h1>
        <br/>
        <h1> Haz click para volver al inicio! </h1>
        <Link to="/"><Button variant="primary">Volver</Button></Link>
    </div>

    </section>);
};

export default NotFound;