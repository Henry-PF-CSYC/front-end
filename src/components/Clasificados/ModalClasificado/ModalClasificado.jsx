import { type } from '@testing-library/user-event/dist/type';
import { useFormik } from 'formik';
import { Button, Modal } from 'react-bootstrap';

const ModalClasificado = ({ show, handleSubmit, handleClose, email }) => {
    const { values, handleBlur, handleChange, resetForm } = useFormik({
        initialValues: {
            user_email: email,
            image: '',
            type: '',
            title: '',
            description: '',
            contact: '',
            price: ''
        },
        enableReinitialize: true
        // validationSchema:validations,
    });
    const options = [
        { value: 'Seleccionar una opcion' },
        { value: 'compra', label: 'Compra' },
        { value: 'venta', label: 'Venta' },
        { value: 'laboral', label: 'Se busca' }
    ];

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
                    <Modal.Title>Crear Publicacion</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div className="form-floatin mb-2">
                            <input
                                type="file"
                                placeholder="Imagen"
                                id="image"
                                name="image"
                                value={values.image}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form-control"
                            />
                        </div>
                        <div className="form-floatin mb-2">
                            <select
                                className="form-control"
                                id="type"
                                name="type"
                                value={values.type}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                {options.map((opcion) => (
                                    <option>{opcion.value}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-floatin mb-2">
                            <input
                                type="string"
                                placeholder="Titulo"
                                id="title"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form-control"
                            />
                        </div>
                        <div className="form-floatin mb-2">
                            <textarea
                                type="string"
                                placeholder="Descripcion"
                                id="description"
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                rows="4"
                                className="form-control"
                            />
                        </div>
                        <div className="form-floatin mb-2">
                            <input
                                type="number"
                                placeholder="Numero de Contacto"
                                id="contact"
                                name="contact"
                                value={values.contact}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form-control"
                            />
                        </div>
                        <div className="form-floatin mb-2">
                            <input
                                type="number"
                                placeholder="Precio"
                                id="price"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form-control"
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={() => handleClose()}
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            variant="success"
                            onClick={() => {
                                handleSubmit(values);
                                resetForm();
                            }}
                        >
                            Guaradar cambios
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};

export default ModalClasificado;
