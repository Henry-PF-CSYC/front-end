import { useFormik } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { firebase } from '../../Firebase/firebase';
import { useDispatch } from 'react-redux';
import { postClasificados } from '../../../redux/actions';
import validations from "../validations"

const ModalClasificado = ({ show, handleClose, email }) => {
    const dispatch = useDispatch();
    const [selectedImageFile, setSelectedImageFile] = useState('');

    const { values, handleBlur , errors, touched, handleChange, resetForm } = useFormik({
        initialValues: {
            user_email: email,
            image: '',
            type: '',
            title: '',
            description: '',
            contact: '',
            price: ''
        },
        validationSchema: validations,
    });

    const options = [
        { value: 'Seleccionar una opcion' },
        { value: 'compra', label: 'Compra' },
        { value: 'venta', label: 'Venta' },
        { value: 'se busca', label: 'Se busca' }
    ];

    // Manejador para subida de imágenes seguras
    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];

        // Verificar si se seleccionó un archivo
        if (imageFile) {
            // Verificar si el tipo de archivo es una imagen (por ejemplo, png, jpeg, jpg, gif)
            const allowedImageTypes = ['image/png', 'image/jpeg', 'image/jpg'];
            if (allowedImageTypes.includes(imageFile.type)) {
                // El archivo es una imagen válida, puedes continuar con el manejo de la imagen
                setSelectedImageFile(imageFile);
            } else {
                // El archivo no es una imagen válida, muestra un mensaje de error o realiza alguna acción
                alert(
                    'Por favor, seleccione una imagen válida (png, jpeg, jpg).'
                );
                event.target.value = null; // Restablece el valor del input a null para evitar el error
            }
        }
    };


    // Submit
    const handleSubmit = async (values, event) => {
        event.preventDefault();

        try {
            // Si hay una nueva imagen seleccionada
            if (selectedImageFile) {
                // Usamos la función de Firebase para obtener la URL de la nueva imagen
                const newImageUrl = await firebase( selectedImageFile,'clasificados/');

                // Actualiza los valores del formulario, incluida la nueva URL de la imagen
                const updatedValues = { ...values, image: newImageUrl };

                // Realiza la acción para enviar los datos del formulario, incluida la nueva URL de la imagen
                dispatch(await postClasificados(updatedValues)); 
                console.log(values)  
                handleClose();
            } else {
                dispatch(await postClasificados(values)); // Si no se seleccionó una imagen, se envia la acción sin la misma
                console.log(values)
                handleClose();
            }

            alert('La publicación fue creada correctamente');
        } catch (error) {
            console.log('Error al crear la publicación:', error);
        }
    };

    // Renderizado
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
                                accept="image/*"
                                type="file"
                                placeholder="Imagen"
                                id="image"
                                name="image"
                                value={values.image}
                                onChange={(event) => {
                                    handleChange(event);
                                    handleImageChange(event);
                                }}
                                onBlur={handleBlur}
                                className="form-control"
                            />
                        </div>

                        <div className="form-floatin mb-2">
                            <select
                                id="type"
                                name="type"
                                value={values.type}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    'form-control form-control-lg inputStyle' +
                                    (errors.name && touched.name
                                        ? ' inputError'
                                        : '')
                                }
                            >
                                {options.map((opcion) => (
                                    <option>{opcion.value}</option>
                                ))}
                            </select>{errors.type && touched.type && (
                                    <p className="errorText">{errors.type}</p>
                                )}
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
                                className={
                                    'form-control form-control-lg inputStyle' +
                                    (errors.name && touched.name
                                        ? ' inputError'
                                        : '')
                                }
                            />{errors.title && touched.title && (
                                    <p className="errorText">{errors.title}</p>
                                )}
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
                                className={
                                    'form-control form-control-lg inputStyle' +
                                    (errors.name && touched.name
                                        ? ' inputError'
                                        : '')
                                }
                            />{errors.description && touched.description && (
                                    <p className="errorText">{errors.description}</p>
                                )}
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
                                className={
                                    'form-control form-control-lg inputStyle' +
                                    (errors.name && touched.name
                                        ? ' inputError'
                                        : '')
                                }
                            />{errors.contact && touched.contact && (
                                <p className="errorText">{errors.contact}</p>
                            )}
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
                                className={
                                    'form-control form-control-lg inputStyle' +
                                    (errors.name && touched.name
                                        ? ' inputError'
                                        : '')
                                }
                            />{errors.price && touched.price && (
                                    <p className="errorText">{errors.price}</p>
                                )}
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={() => handleClose()}
                        >
                            {' '}
                            Descartar{' '}
                        </Button>
                        <Button
                            type="submit"
                            variant="success"
                            onClick={(event) => {
                                handleSubmit(values, event);
                            }}
                        >
                            {' '}
                            Crear Publicacion{' '}
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};

export default ModalClasificado;
