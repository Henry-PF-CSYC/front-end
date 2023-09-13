import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import "./LoginStyles.css"


function Login(){
    
    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    })
    const [error,setError] = useState("") 
    const [loginAttempts, setLoginAttempts] = useState(0) //intentos de inicio
    const [blockedUntil, setBlockedUntil] = useState(null) //bloqueo para que no pueda iniciar sesion
    const [fieldsDisabled, setFieldsDisabled] = useState(false) //para desabilitar campos
    const navigate = useNavigate()


    const handlerInputChange=(event)=>{
        const {name, value} = event.target
        setFormData({...formData, [name]:value})
    }


    const handlerSubmit=(event)=>{
        event.preventDefault()

        const correctUsername = "prueba1@hotmail.com" //Por el momento, despues con un use selector puedo pulir la logica
        const correctPassword = "gracias" //Por el momento, despues con un use selector puedo pulir la logica

        if(!formData.userName || !formData.password){
            setError("Por favor completa los campos faltantes")
            return
        }

        if (blockedUntil && new Date() < blockedUntil) { //aca estaria seteado blocked con la hora anterior al momento de el ultimo intento, por ultimmo si la fecha es menor al bloqueo envio el mensaje
            setError('Has excedido el número máximo de intentos. Inténtalo nuevamente más tarde.')
            return
        }

        if (formData.userName === correctUsername && formData.password === correctPassword) {
            alert("Inicio de sesion exitoso")//Momentaneamente hasta que pueda implementar la logica a realizar
            setLoginAttempts(0) //seteo en 0 los intentos
            setFieldsDisabled(false)//restablezco habilitacion de campos
            setError("")
        } else {
            setLoginAttempts(loginAttempts + 1)
            if(loginAttempts>=5){
                const blockTime= new Date() //nueva instancia de date/fecha
                //blockTime.setMinutes(blockTime.getMinutes()+5) //seteo blockTime con la fecha y le sumo 5 Mins
                blockTime.setSeconds(blockTime.getSeconds() + 5) //para la demo le doy 5 segundos
                setBlockedUntil(blockTime)//seteo el bloqueo con el valor 
                setError("Has exedido el numero maximo de intentos.intenta nuevamente mas tarde")
                setFieldsDisabled(true) //seteo el bloqueo de campos en true
            } else {
                setError("Datos incorrectos. Por favor intentalo nuevamente")
            }
        }
    }
    
    useEffect(() => {
        //console.log("useEfect ejecutado")
        const timer = setInterval(() => { // es una parte de la actaulizacion del componenete que solo se ejecuta con la dependencia
          const currentTime = new Date().getTime();
          if (blockedUntil && currentTime >= blockedUntil.getTime()) {
            clearInterval(timer); // Detiene el temporizador una vez que se desbloquee
            setBlockedUntil(null)
            setLoginAttempts(0)
            setFieldsDisabled(false)
          }
        }, 1000) // Comprueba cada segundo () varia luego es solo para demo
      }, [blockedUntil]) //esta atento solo si se establece un bloqueo

      return (
        <div className="site">
          <div className="login-container">
           <i class="bi bi-person-circle icono-grande"></i>
            <form className="login-form" onSubmit={handlerSubmit}>
            <label className="label-text">
              Usuario:
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handlerInputChange}
                disabled={fieldsDisabled ? "disabled" : ""}
                className={`login-input ${fieldsDisabled ? "disabled" : ""}`}
              />

            </label>
            <label className="label-text">
              Contraseña:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handlerInputChange}
                disabled={fieldsDisabled ? "disabled" : ""}
                className={`login-input ${fieldsDisabled ? "disabled" : ""}`}
              />
            </label>

            {error && <p className="login-error">{error}</p>}
            <button type="submit" disabled={fieldsDisabled} className="login-button">Iniciar sesión</button>
            <p className="text-noMenber">Aun no eres miembro?</p>
            <button className="login-button" onClick={() => navigate("/register")}>Registrarse</button>
          </form>
         </div>
        </div>
       
      )
    
}

export default Login;