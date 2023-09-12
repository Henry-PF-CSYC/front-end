import "./Footer.css";

const Footer = () => {
  return (

<div id="footerSection">
    <section className="container-fluid footerA">
      
      <div>
        <h6 className="footerTitle">Servicios</h6>
            <div className="footerOptions">
                <span>Luz</span>
                <span>Gas</span>
                <span>Internet</span>
            </div>
      </div>


      <div>
        <h6 className="footerTitle">Ofertas</h6>
            <div className="footerOptions">
                <span>Publica tu oferta!</span>
            </div>
      </div>


      <div>
        <h6 className="footerTitle">Contacto</h6>
            <div className="footerOptions">
                <span>Teléfon de contacto: xxxx-xxxx</span>
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
            <i class="bi bi-facebook footerIco"></i>
            <i class="bi bi-instagram footerIco"></i>
            <i class="bi bi-twitter footerIco"></i>
        </div>

    </div>

</div>)}

export default Footer;
