import { useFormik } from "formik"
import { useState } from "react"
import validations from '../../Register/validations'
import "../../Register/Register"
import { Button, Modal } from 'react-bootstrap'

const ModalUsuario = ({ show, handleClose, dataUser, updateUser }) => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: {
            name: dataUser.name,
            surname: dataUser.surname,
            email: dataUser.email,
            dni: dataUser.dni,
            address: dataUser.address,
            phone: dataUser.phone,
            picfile: 'prueba'
        },
        enableReinitialize: true,
        validationSchema: validations,
        onSubmit: () => {
            updateUser(values)
        }
    })

    const [viewPassword, setViewPassword] = useState(false)

    const changeViewPassword = () => {
        setViewPassword(!viewPassword)
    }

    return (
        <>
            <Modal show={show} onHide={ () => {
                handleClose()
                resetForm()
            } }>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar datos de usuario</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div className="form-floating mb-2">
                            <input
                                type="string"
                                id="name"
                                name="name"
                                value={values.name}
                                placeholder="Pepito"
                                onChange={handleChange}
                                className={'form-control ' + (errors.name && touched.name ? 'inputError' : '')}
                                onBlur={handleBlur} />
                            {errors.name && touched.name && <p
                                className="errorText">{errors.name}</p>}
                            <label className='ms-2' htmlFor="floatingNombre">Nombre</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input
                                type="string"
                                id="surname"
                                name="surname"
                                value={values.surname}
                                placeholder="Pepito"
                                onChange={handleChange}
                                className={'form-control ' + (errors.surname && touched.surname ? 'inputError' : '')}
                                onBlur={handleBlur} />
                            {errors.surname && touched.surname && <p
                                className="errorText">{errors.surname}</p>}
                            <label className='ms-2' htmlFor="floatingNombre">Apellido</label>
                        </div>
                        <div className="form-floating mb-2">
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
                        <div className="form-floating mb-2">
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
                            <label className='ms-2' htmlFor="floatingNumero">DNI</label>
                        </div>
                        <div className="form-floating mb-2">
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
                        <div className="form-floating mb-2">
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                value={values.phone}
                                className={'form-control ' + (errors.phone && touched.phone ? 'inputError' : '')}
                                placeholder="123456"
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {errors.phone && touched.phone && <p
                                className="errorText">{errors.phone}</p>}
                            <label className='ms-2' htmlFor="floatingNumero">Telefono</label>
                        </div>
                        <div className="form-floating mb-2">
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={ () => {
                            handleClose()
                            resetForm()
                        }}>
                            Cancelar
                        </Button>
                        <Button type="submit" variant="success">
                            Guardar cambios
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default ModalUsuario