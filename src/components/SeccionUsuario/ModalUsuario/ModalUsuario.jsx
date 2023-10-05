import { useFormik } from 'formik';
import validations from '../../Register/validations';
import '../../Register/Register';
import { Button, Modal } from 'react-bootstrap';


// Loader
import { Rings } from "react-loader-spinner";
import { showLoader, hideLoader } from '../../../redux/actions';


const ModalUsuario = ({ show, handleClose, dataUser, updateUser }) => {
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm
    } = useFormik({
        initialValues: {
            name: dataUser.name,
            lastname: dataUser.lastname,
            dni: dataUser.dni,
            email: dataUser.email,
            address: dataUser.address,
            phone: dataUser.phone
        },
        enableReinitialize: true,
        validationSchema: validations,
        onSubmit: async () => {
            try {
                updateUser(await values);
            } catch (error) {
                console.log("Error actualizando datos");
            } 
        }
    });

    return (
        <>
            <Modal
                show={show}
                onHide={() => {
                    handleClose();
                    resetForm();
                }}
            >
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
                                className={
                                    'form-control ' +
                                    (errors.name && touched.name
                                        ? 'inputError'
                                        : '')
                                }
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name && (
                                <p className="errorText">{errors.name}</p>
                            )}
                            <label className="ms-2" htmlFor="floatingNombre">
                                Nombre
                            </label>
                        </div>
                        <div className="form-floating mb-2">
                            <input
                                type="string"
                                id="lastname"
                                name="lastname"
                                value={values.lastname}
                                placeholder="Pepito"
                                onChange={handleChange}
                                className={
                                    'form-control ' +
                                    (errors.lastname && touched.lastname
                                        ? 'inputError'
                                        : '')
                                }
                                onBlur={handleBlur}
                            />
                            {errors.lastname && touched.lastname && (
                                <p className="errorText">{errors.lastname}</p>
                            )}
                            <label className="ms-2" htmlFor="floatingNombre">
                                Apellido
                            </label>
                        </div>
      
                        <div className="form-floating mb-2">
                            <input
                                type="number"
                                id="dni"
                                name="dni"
                                value={Number(values.dni)}
                                className={
                                    'form-control ' +
                                    (errors.dni && touched.dni
                                        ? 'inputError'
                                        : '')
                                }
                                placeholder="123456"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.dni && touched.dni && (
                                <p className="errorText">{errors.dni}</p>
                            )}
                            <label className="ms-2" htmlFor="floatingNumero">
                                DNI
                            </label>
                        </div>
                        <div className="form-floating mb-2">
                            <input
                                type="string"
                                name="address"
                                value={values.address}
                                className={
                                    'form-control ' +
                                    (errors.address && touched.address
                                        ? 'inputError'
                                        : '')
                                }
                                id="address"
                                placeholder="calle 123"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.address && touched.address && (
                                <p className="errorText">{errors.address}</p>
                            )}
                            <label className="ms-2" htmlFor="floatingDireccion">
                                Direccion
                            </label>
                        </div>
                        <div className="form-floating mb-2">
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                value={values.phone}
                                className={
                                    'form-control ' +
                                    (errors.phone && touched.phone
                                        ? 'inputError'
                                        : '')
                                }
                                placeholder="123456"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.phone && touched.phone && (
                                <p className="errorText">{errors.phone}</p>
                            )}
                            <label className="ms-2" htmlFor="floatingNumero">
                                Telefono
                            </label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                handleClose();
                                resetForm();
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button type="submit" variant="primary">
                            Guardar cambios
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};

export default ModalUsuario;
