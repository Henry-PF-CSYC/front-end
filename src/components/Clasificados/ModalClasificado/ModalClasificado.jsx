import { useFormik } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { firebase } from '../../Firebase/firebase';
import { useDispatch } from 'react-redux';
import { postClasificados } from '../../../redux/actions';

const ModalClasificado = ({ show, handleClose, email }) => {
    
    const { values, handleBlur, handleChange, resetForm } = useFormik({
        initialValues: {
            user_email: email,  image: '',  type: '',
            title: '',  description: '',  contact: '', price: ''},
        enableReinitialize: true});
        // validationSchema:validations,


    const options = [
        { value: 'Seleccionar una opcion' },
        { value: 'compra', label: 'Compra' },
        { value: 'venta', label: 'Venta' },
        { value: 'laboral', label: 'Se busca' }
    ];


    const dispatch = useDispatch()

    const [selectedImageFile, setSelectedImageFile] = useState(""); // Estado para la imagen seleccionada

    
    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setSelectedImageFile(imageFile);
      };


    const handleSubmit = async (values, event) => {
        event.preventDefault();
      
        try {
          // Si hay una nueva imagen seleccionada
          if (selectedImageFile) {
          // Usamos la función de Firebase para obtener la URL de la nueva imagen
          const newImageUrl = await firebase(selectedImageFile, "clasificados/");
      
          // Actualiza los valores del formulario, incluida la nueva URL de la imagen
          const updatedValues = { ...values, image: newImageUrl };
      
          // Vemos valores
          console.log(updatedValues);

          // Realiza la acción para enviar los datos del formulario, incluida la nueva URL de la imagen
          dispatch(postClasificados(updatedValues)); // Asumiendo que tienes una acción llamada "postClasificados"
      
          } else {

          // Si no se seleccionó una imagen, simplemente realiza la acción para enviar los datos del formulario
          dispatch(postClasificados(values)); // Asumiendo que tienes una acción llamada "postClasificados"
      
          alert("La publicación fue creada correctamente")}
      
          // Cierra el modal después de guardar
          handleClose();

          // Recarga la página
          setTimeout(() => {window.location.reload();}, 300)

        } catch (error) {
          console.error("Error al crear la publicación:", error)}
      };


    
// Renderizado
return (
        <>
            <Modal show={show} onHide={() => {handleClose(); resetForm();}}>
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
                                onChange={(event) => {
                                    handleChange(event);
                                    handleImageChange(event); 
                                }}
                                onBlur={handleBlur}
                                className="form-control"/>
                        </div>


                        <div className="form-floatin mb-2">
                            <select
                                className="form-control"
                                id="type"
                                name="type"
                                value={values.type}
                                onChange={handleChange}
                                onBlur={handleBlur}>
                                {options.map((opcion) => (
                                    <option>{opcion.value}</option>))}
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
                                className="form-control"/>
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
                                className="form-control"/>
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
                                className="form-control"/>
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
                                className="form-control"/>
                        </div>
                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleClose()}> Descartar </Button>
                        <Button type="submit" variant="success" 
                        onClick={(event) => { handleSubmit(values, event); resetForm();}}> Crear Publicacion </Button>
                    </Modal.Footer>

                </form>
            </Modal>
        </>);
};

export default ModalClasificado;
