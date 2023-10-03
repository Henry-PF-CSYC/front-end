import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import "./ContactStyle.css"

// Sweetalert
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';

// Loader
import { Rings } from "react-loader-spinner";
import { showLoader, hideLoader } from "../../redux/actions";



function Contact() {

    // Accedemos al estado global del loader
    const isLoading = useSelector((state) => state.isLoading); 
    const dispatch = useDispatch();

    // Datos del formulario
    const [formData, setFormData] = useState({name: "", phone: "", message: ""})
    



    // Submit 
    const handlerSubmit=async(event)=>{
      
        event.preventDefault()
        const { name, phone, message } = formData
        if (name && phone && message) {

          const dataToSend={ name, phone, message};
            try {
              dispatch(showLoader());
              const response= await fetch("https://csyc.onrender.com/contact/send", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(dataToSend)})

              if (response.ok) {
                dispatch(hideLoader());
                Swal.fire("Mensaje enviado correctamente", "", "success")
                .then(() => {window.location.reload(200);});
                
              } else {
                dispatch(hideLoader());
                Swal.fire("Hubo un error enviando el mensaje, inténtelo de nuevo más tarde", "", "error")}

            } catch (error) {
              dispatch(hideLoader());
              Swal.fire("Hubo un error en la solicitud", "", "error")}
          } 
    }



    // Validacion
    const handlerInputChange = (event) => {
        const { name, value } = event.target

        if (name === "phone") {
            const numericValue = value.replace(/\D/g, "")
            setFormData({ ...formData, [name]: numericValue })
          
          } else {setFormData({ ...formData,[name]: value })
       }
    }





    // Renderizado
    return (
      <section className="bg-blue-400 contactSection">

        <div className="contentContact max-w-screen-lg mx-auto p-4">
           
        {/*Loader*/}
        {isLoading && (<div className="loader-overlay">
                          <div className="loader-container"><Rings color="#007bff" /></div>
                      </div>)}

       
          <div className="contact-container flex">


            {/*1era columna*/}

            <div className="contact-info flex-col items-center w-5/12 p-4">

            <h1 className="text-[1.4rem] font-bold mb-2  mt-1">Contacte con nosotros!</h1>
            <br />

                <div className="d-flex align-items-center">
                    <i class="bi bi-person-check mr-2" style={{ fontSize: '1.9rem' }}></i>
                    <p className="contact-detail-options">Administrado por:</p>
                </div>

                <p>Cosme Fulanito</p>

                <div className="d-flex align-items-center m-1">
                    <i class="bi bi-house-check mr-2" style={{ fontSize: '1.9rem' }}></i>
                    <p className="contact-detail-options">Dirección:</p>
                </div>

                <p>Calle Falsa 123</p>

                <div className="d-flex align-items-center m-1">
                    <i class="bi bi-telephone mr-2" style={{ fontSize: '1.9rem' }}></i>
                    <p className="contact-detail-options">Teléfono:</p>
                </div>

                <p>+54 9 0000 0000</p>

                <div className="d-flex align-items-center m-1">
                    <i class="bi bi-envelope-at mr-2" style={{ fontSize: '1.9rem' }}></i>
                    <p className="contact-detail-options">Email:</p>
                </div>

                <p>dpto.cobranzas@csyc.com.ar</p>
            </div>



        

            {/*2nda columna, Form*/}
            <div className="contact-form flex-col items-center w-7/12 p-4">

                <h5 className="text-lg font-bold mb-4">¿Reclamos o sugerencias? Háganoslo saber y estaremos con usted lo antes posible</h5>
                
                <form onSubmit={handlerSubmit}>

                  <div>
                    <label for="name" className="contact-label-text">Nombre y Apellido</label>
                    <input type="text" id="name" name="name" required
                    className="contact-input" value={formData.name} onChange={handlerInputChange}/>
                  </div>

                  <div>
                    <label for="phone" className="contact-label-text">Telefono / Whatsapp</label>
                    <input type="tel" id="phone"name="phone" className="contact-input" 
                    pattern="[0-9]{10}" value={formData.phone} onChange={handlerInputChange}required />
                  </div>

                  <div>
                    <label for="message" className="contact-label-text">Su mensaje</label>
                    <textarea id="message" name="message" className="contact-input" value={formData.message}  
                    onChange={handlerInputChange} required></textarea>
                  </div>

                  <button type="submit" className="buttonSubmit">Enviar</button> 

                </form>
            </div>
          </div>
        </div>
    </section>);
}
  
export default Contact;