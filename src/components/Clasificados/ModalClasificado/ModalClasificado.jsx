import { useFormik } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { postClasificados } from '../../../redux/actions';

const ModalClasificado = ({ show, handleClose }) => {
    const { values, handleBlur, handleChange, handleSubmit, resetForm } =
        useFormik({
            initialValues: {
                tipo: '',
                titulo: '',
                descripcion: '',
                contacto: ''
            },
            enableReinitialize: true,
            // validationSchema:validations,
            onSubmit: () => {
                postClasificados(values);
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
                    <Modal.Title>Crear Publicacion</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div className="form-floatin mb-2">
                            <input
                                type="string"
                                placeholder="Tipo"
                                id="tipo"
                                name="tipo"
                                value={values.tipo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form-control"
                            />
                        </div>
                        <div className="form-floatin mb-2">
                            <input
                                type="string"
                                placeholder="Titulo"
                                id="titulo"
                                name="titulo"
                                value={values.titulo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form-control"
                            />
                        </div>
                        <div className="form-floatin mb-2">
                            <textarea
                                type="string"
                                placeholder="Descripcion"
                                id="descripcion"
                                name="descripcion"
                                value={values.descripcion}
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
                                id="contacto"
                                name="contacto"
                                value={values.contacto}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form-control"
                            />
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
                        <Button type="submit" variant="success">
                            Guaradar cambios
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};

export default ModalClasificado;
