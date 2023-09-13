import { useFormik } from "formik"
import { useState } from "react"
import validations from '../Register/validations'
import '../Register/RegisterStyles.css'

const ModalUsuario = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "Prueba",
            email: "",
            dni: "",
            address: "",
            phone: "",
        },
        validationSchema: validations,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
        }
    })

    const [viewPassword, setViewPassword] = useState(false)

    const changeViewPassword = () => {
        setViewPassword(!viewPassword)
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border border-bottom-0">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar usuario</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body row">
                                <div className="form-floating mb-3">
                                    <input 
                                    type="string" 
                                    id="name" 
                                    name="name" 
                                    value={values.name} 
                                    placeholder="Pepito" 
                                    onChange={handleChange}
                                    className={'form-control ' + (errors.name && touched.name ? 'inputError': '')} 
                                    onBlur={handleBlur} />
                                    {errors.name && touched.name && <p 
                                    className="errorText">{errors.name}</p>}
                                    <label className='ms-2' htmlFor="floatingNombre">Nombre</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                    type="number"
                                    id="dni"
                                    name="dni"
                                    value={values.dni}
                                    className={'form-control ' + (errors.dni && touched.dni ? 'inputError' : '')}
                                    placeholder="123456"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                    {errors.dni && touched.dni && <p 
                                    className="errorText">{errors.dni}</p>}
                                    <label className='ms-2' htmlFor="floatingNumero">Numero</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                    type="string"
                                    name="address"
                                    value={values.address}
                                    className={'form-control ' + (errors.address && touched.address ? 'inputError' : '')} 
                                    id="address" 
                                    placeholder="calle 123" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    />
                                    {errors.address && touched.address && <p 
                                    className="errorText">{errors.address}</p>}
                                    <label className='ms-2' htmlFor="floatingDireccion">Direccion</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                    type="email" 
                                    name="email"
                                    className={'form-control ' + (errors.email && touched.email ? 'inputError' : '')} 
                                    id="email" 
                                    placeholder="name@example.com" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    />
                                    {errors.email && touched.email && <p 
                                    className="errorText">{errors.email}</p>}
                                    <label className='ms-2' htmlFor="floatingEmail">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                    type={viewPassword ? 'text' : 'password'} 
                                    className={'form-control'} id="contrasena" placeholder="123456abc" />
                                    <label className='ms-2' htmlFor="floatingPassword">Contraseña</label>
                                    <i
                                        className={`bi bi-eye${viewPassword ? '' : '-slash'}`}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            right: '21px',
                                            transform: 'translateY(-50%)',
                                            cursor: 'pointer'
                                        }}
                                        onClick={changeViewPassword}
                                    ></i>
                                </div>

                            </div>
                            <div className="modal-footer border border-top-0">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="submit" className="btn btn-primary">Guardar cambios</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalUsuario