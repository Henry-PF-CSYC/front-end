import { useState } from "react"
import "./ContactStyle.css"
import { Modal, Button } from "react-bootstrap"

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
      })
      const [showModal, setShowModal] = useState(false);
      const [modalMessage, setModalMessage] = useState("");
      const [modalVariant, setModalVariant] = useState("success")

    const handlerSubmit=async(event)=>{
        event.preventDefault()

        const { name, phone, message } = formData

        if (name && phone && message) {

            const dataToSend={
                name, 
                phone,
                message
            };
            try {
              const response=await fetch("https://csyc.onrender.com/contact/send", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend), 
              })
              if (response.ok) {
                setModalVariant("success")
                setModalMessage("Su mensaje fue enviado con éxito.")
              } else {
                setModalVariant("danger")
                setModalMessage("Inténtelo más tarde. Hubo un error.")
              }
              setShowModal(true)
            } catch (error) {
              console.error(error);
              setModalVariant("danger");
              setModalMessage("Hubo un error en la solicitud.");
              setShowModal(true);
            }
          } 
    }

    const handlerInputChange = (event) => {
        const { name, value } = event.target

        if (name === "phone") {
            const numericValue = value.replace(/\D/g, "")
            setFormData({
              ...formData,
              [name]: numericValue
            })
          } else {
            setFormData({
              ...formData,
              [name]: value
            })
          }
        }

      const closeModal = () => {
          setShowModal(false);
          setModalMessage("");
      }


    return (
        <div className="content">
        <h2 className="contact-title">Contacto</h2>
        <div className="contact-container">
            <div className="contact-info">
                <div className="d-flex align-items-center">
                    <i class="bi bi-person-check" style={{ fontSize: '1.9rem' }}></i>
                    <p className="contact-detail-options">Administrado por:</p>
                </div>
                <p>Juanito Bustos Segovia</p>
                <div className="d-flex align-items-center">
                    <i class="bi bi-house-check" style={{ fontSize: '1.9rem' }}></i>
                    <p className="contact-detail-options">Dirección:</p>
                </div>
                <p>Calle Falsa</p>
                <div className="d-flex align-items-center">
                    <i class="bi bi-telephone" style={{ fontSize: '1.9rem' }}></i>
                    <p className="contact-detail-options">Teléfono:</p>
                </div>
                <p>+54 9 0000 0000</p>
                <div className="d-flex align-items-center">
                    <i class="bi bi-envelope-at" style={{ fontSize: '1.9rem' }}></i>
                    <p className="contact-detail-options">Email:</p>
                </div>
                <p>dpto.cobranzas@csyc.com.ar</p>
            </div>
         <div className="contact-detail">
            <p className="contact-detail-options">Horario de Atención:</p>
            <p>Lunes a viernes de 08:00 a 12:00 hs.</p>
            <p>Sabados de 08:00 a 12:00 hs.</p>
            <p className="contact-detail-options">Para una atencion personalizada presencial, diríjase a:</p>
            <p>Municipalidad </p>
            <p className="contact-detail-options">También puede solicitar asesoramiento personalizado telefónico llamando al:</p>
            <p>03999-422000</p>
            <p>0800 888 2335</p>
         </div>

         <div className="contact-form">
            <h5>Para enviar consultas/sugerencias, complete el siguiente formulario:</h5>
            <form className="contact-form" onSubmit={handlerSubmit}>
              <div>
                <label for="name" className="contact-label-text">Nombre y Apellido</label>
                <input 
                type="text" 
                id="name" 
                name="name"
                className="contact-input" 
                value={formData.name} 
                onChange={handlerInputChange}
                required />
              </div>
              <div>
                <label for="phone" className="contact-label-text">Telefono Whatsapp</label>
                <input 
                type="tel" 
                id="phone"
                name="phone" 
                className="contact-input" 
                pattern="[0-9]{10}" 
                value={formData.phone}  
                onChange={handlerInputChange}required />
              </div>
              <div>
                <label for="message" className="contact-label-text">Mensaje</label>
                <textarea 
                id="message" 
                name="message" 
                className="contact-input" 
                value={formData.message}  
                onChange={handlerInputChange} 
                required></textarea>
              </div>
              <button type="submit" className="contact-button">Enviar</button> 
            </form>
            <Modal show={showModal} onHide={closeModal} centered>
              <Modal.Header closeButton>
               <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className={`alert alert-${modalVariant}`} role="alert">
                  {modalMessage}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={closeModal}>
                    Cerrar
                  </Button>
                </Modal.Footer>
            </Modal>
         </div>
        </div>
       </div>
      );
    }
  
  export default Contact;