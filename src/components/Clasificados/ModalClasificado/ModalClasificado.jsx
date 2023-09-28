import { useFormik } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { firebase } from '../../Firebase/firebase';
import { useDispatch } from 'react-redux';
import {
    getClasificados,
    getOfferByEmail,
    postClasificados
} from '../../../redux/actions';
import * as Yup from 'yup';



const ModalClasificado = ({ show, handleClose, email }) => {
    const dispatch = useDispatch();
    const [selectedImageFile, setSelectedImageFile] = useState('');

    const { values, handleBlur, handleChange, resetForm, errors, touched } = useFormik({
        initialValues: {
            user_email: email,
            image: '',
            type: '',
            title: '',
            description: '',
            contact: '',
            price: ''
        },
        validationSchema,
    });
    
    const validationSchema = Yup.object().shape({
        user_email: Yup.string().required('El correo electrónico es obligatorio'),
        image: Yup.string().when('type', {
            is: (type) => type !== 'Seleccionar una opcion',
            then: Yup.string().required('La imagen es obligatoria'),
            otherwise: Yup.string(),
        }),
        type: Yup.string().notOneOf(['Seleccionar una opcion'], 'Seleccione un tipo válido').required('El tipo de clasificado es obligatorio'),
        title: Yup.string().required('El título es obligatorio'),
        description: Yup.string().required('La descripción es obligatoria'),
        contact: Yup.string().required('El número de contacto es obligatorio'),
        price: Yup.number()
          .required('El precio es obligatorio')
          .positive('El precio debe ser un número positivo'),
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
                const newImageUrl = await firebase(
                    selectedImageFile,
                    'clasificados/'
                );

                // Actualiza los valores del formulario, incluida la nueva URL de la imagen
                const updatedValues = { ...values, image: newImageUrl };

                // Realiza la acción para enviar los datos del formulario, incluida la nueva URL de la imagen
                dispatch(await postClasificados(updatedValues)); // Asumiendo que tienes una acción llamada "postClasificados"
                console.log(updatedValues);
                handleClose();
            } else {
                dispatch(await postClasificados(values)); // Si no se seleccionó una imagen, se envia la acción sin la misma
                console.log(values);
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
                                className={`form-control ${errors.type && touched.type ? 'is-invalid' : ''}`}
                            />
                        </div>

                        <div className="form-floatin mb-2">
                            <select
                                className={`form-control ${errors.type && touched.type ? 'is-invalid' : ''}`}
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
                                className={`form-control ${errors.type && touched.type ? 'is-invalid' : ''}`}
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
                                className={`form-control ${errors.type && touched.type ? 'is-invalid' : ''}`}
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
                                className={`form-control ${errors.type && touched.type ? 'is-invalid' : ''}`}
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
                                className={`form-control ${errors.type && touched.type ? 'is-invalid' : ''}`}
                            />
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
