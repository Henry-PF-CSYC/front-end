import './RegisterStyles.css'; 
import { useFormik } from 'formik';     
import validations from "./validations";


const Register = () => {
  const onSubmit = (values, actions) => {
    alert("Registrado!");
    console.log("Submitted!", values);
    actions.resetForm();
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      dni: "",
      address: "",
      phone: "",
      picfile: null,
      idpic1: null,
      idpic2: null,
    },
    validationSchema: validations,
    onSubmit,
  });

  return (
  <div className="site">
    <div className="container">
      <form onSubmit={handleSubmit} autoComplete='off' className='formStyles'>
        <h1>Formulario de Registro</h1>

        <div className="row mt-4 fila">
          <div className="col-md-3">
            <h6 className="tagStyle">Nombre</h6>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              id='name'
              name="name"
              onChange={handleChange}
              value={values.name}
              placeholder="Su nombre aquí"
              onBlur={handleBlur}
              className={"form-control form-control-lg inputStyle" + (errors.name && touched.name ? " inputError" : "")}
            />
            {errors.name && touched.name && <p className='errorText'>{errors.name}</p>}
          </div>
        </div>

        <hr className="mx-n3" />

        <div className="row mt-4 fila">
          <div className="col-md-3">
            <h6 className="tagStyle">Apellido</h6>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              id='surname'
              name="surname"
              onChange={handleChange}
              value={values.surname}
              placeholder="Su apellido aquí"
              onBlur={handleBlur}
              className={"form-control form-control-lg inputStyle" + (errors.surname && touched.surname ? " inputError" : "")}
            />
            {errors.surname && touched.surname && <p className='errorText'>{errors.surname}</p>}
          </div>
        </div>

        <hr className="mx-n3" />

        <div className="row mt-4 fila">
          <div className="col-md-3">
            <h6 className="tagStyle">Correo Electrónico</h6>
          </div>
          <div className="col-md-9">
            <input
              type="email"
              name="email"
              placeholder="Su correo aquí"
              id='email'
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              className={"form-control form-control-lg inputStyle" + (errors.email && touched.email ? " inputError" : "")}
            />
            {errors.email && touched.email && <p className='errorText'>{errors.email}</p>}
          </div>
        </div>

        <hr className="mx-n3" />

        <div className="row mt-4 fila">
          <div className="col-md-3">
            <h6 className="tagStyle">DNI</h6>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              id='dni'
              name="dni"
              onChange={handleChange}
              value={values.dni}
              placeholder="Su DNI aquí"
              onBlur={handleBlur}
              className={"form-control form-control-lg inputStyle" + (errors.dni && touched.dni ? " inputError" : "")}
            />
            {errors.dni && touched.dni && <p className='errorText'>{errors.dni}</p>}
          </div>
        </div>

        <hr className="mx-n3" />

        <div className="row mt-4 fila">
          <div className="col-md-3">
            <h6 className="tagStyle">Dirección</h6>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              id='address'
              name="address"
              onChange={handleChange}
              value={values.address}
              placeholder="Su dirección aquí"
              onBlur={handleBlur}
              className={"form-control form-control-lg inputStyle" + (errors.address && touched.address ? " inputError" : "")}
            />
            {errors.address && touched.address && <p className='errorText'>{errors.address}</p>}
          </div>
        </div>

        <hr className="mx-n3" />

        <div className="row mt-4 fila">
          <div className="col-md-3">
            <h6 className="tagStyle">Teléfono</h6>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              id='phone'
              name="phone"
              onChange={handleChange}
              value={values.phone}
              placeholder="Su teléfono aquí"
              onBlur={handleBlur}
              className={"form-control form-control-lg inputStyle" + (errors.phone && touched.phone ? " inputError" : "")}
            />
            {errors.phone && touched.phone && <p className='errorText'>{errors.phone}</p>}
          </div>
        </div>

        <hr className="mx-n3" />

        <div className="row mt-4 fila">
          <div className="col-md-3">
            <h6 className="tagStyle">Foto de Socio</h6>
          </div>
          <div className="col-md-9">
            <input
              type="file"
              id='picfile'
              name="picfile"
              value={values.picfile}
              onBlur={handleBlur}
              onChange={handleChange}
              className={"form-control form-control-lg inputStyle" + (errors.picfile && touched.picfile ? " inputError" : "")}
            />
            {errors.picfile && touched.picfile && <p className='errorText'>{errors.picfile}</p>}
          </div>
        </div>

        <hr className="mx-n3" />

        <div className="row mt-4 boton">
          <div className="col-md-9">
            <button type="submit" className="btn btn-primary btn-lg">Registrarse</button>
          </div>
        </div>

        <div className='login mt-3'>
          <h5 className='tagStyle'>Ya eres miembro?<a className='linksReg' href="/login">Inicia sesión</a></h5>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Register;
