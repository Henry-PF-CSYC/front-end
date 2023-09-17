import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (

<div id="footerSection">
    <section className="container-fluid footerA">
      
      <div>
        <Link to="servicios" style={{ textDecoration:'none'}}><h6 className="footerTitle">Servicios</h6></Link>
            <div className="footerOptions">
                <Link to="servicios/luz" style={{ textDecoration:'none'}}><span>Luz</span></Link>
                <Link to="servicios/gas" style={{ textDecoration:'none'}}><span>Gas</span></Link>
                <Link to="servicios/internet" style={{ textDecoration:'none'}}><span>Internet</span></Link>
            </div>
      </div>


      <div>
        <Link to="clasificados" style={{ textDecoration:'none'}}><h6 className="footerTitle">Ofertas</h6></Link>
            <div className="footerOptions">
                <Link to="/clasificados" style={{ textDecoration:'none'}}><span>Publica tu oferta!</span></Link>
                <Link to="/usuario" style={{ textDecoration:'none'}}><span>Ver mis ofertas</span></Link>
                <Link to="/terminos&condiciones" style={{ textDecoration:'none'}}><span>Términos y condiciones</span></Link>
            </div>
      </div>


      <div>
        <Link to="/contacto" style={{ textDecoration:'none'}}><h6 className="footerTitle">Contacto</h6></Link>
            <div className="footerOptions">
                <span>Teléfono de contacto: xxxx-xxxx</span>
                <span>Dirección: xxxx-xxxx </span>
                <span>Email: xxxx-xxxx </span>
            </div>
      </div>
    </section>

<hr id="myHr"/>

    <div className="footerB">

        <div id="footerLeft">
            <p>© 2023 CSyC - Todos los derechos reservados</p>
        </div>

        <div id="footerRight">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook footerIco"></i></a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram footerIco"></i></a>

            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter footerIco"></i></a>
        </div>

    </div>

</div>)}

export default Footer;
