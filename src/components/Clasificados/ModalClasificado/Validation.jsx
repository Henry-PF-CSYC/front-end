import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    type: Yup.string().required('El tipo de clasificado es obligatorio'),
    title: Yup.string().required('El título es obligatorio'),
    description: Yup.string().required('La descripción es obligatoria'),
    contact: Yup.string().required('El número de contacto es obligatorio'),
    price: Yup.number()
      .required('El precio es obligatorio')
      .positive('El precio debe ser un número positivo'),
    image: Yup.mixed()
      .test('fileSize', 'La imagen es demasiado grande', (value) => {
        if (value) {
          return value.size <= 1024 * 1024; // Tamaño máximo de imagen de 1 MB
        }
        return true; // No se proporcionó una imagen, por lo que no se aplica la validación
      }),
  });


  
  <div className="form-floating mb-2">
  <select
    className="form-control"
    id="type"
    name="type"
    value={values.type}
    onChange={handleChange}
    onBlur={handleBlur}
  >
    {options.map((opcion) => (
      <option key={opcion.value} value={opcion.value}>
        {opcion.label}
      </option>
    ))}
  </select>
  {errors.type && touched.type && (
    <div className="error">{errors.type}</div>
  )}
</div>















const validateForm = (values) => {
  const errors = {};

  // Validación del correo electrónico
  if (!values.user_email) {
      errors.user_email = 'El correo electrónico es obligatorio';
  } else if (!isValidEmail(values.user_email)) {
      errors.user_email = 'El correo electrónico no es válido';
  }

  // Validación de la imagen (si se ha seleccionado un tipo válido)
  if (values.type !== 'Seleccionar una opcion' && !values.image) {
      errors.image = 'La imagen es obligatoria';
  }

  // Validación del tipo de clasificado
  if (values.type === 'Seleccionar una opcion') {
      errors.type = 'Seleccione un tipo válido';
  }

  // Validación del título
  if (!values.title) {
      errors.title = 'El título es obligatorio';
  }

  // Validación de la descripción
  if (!values.description) {
      errors.description = 'La descripción es obligatoria';
  }

  // Validación del número de contacto
  if (!values.contact) {
      errors.contact = 'El número de contacto es obligatorio';
  }

  // Validación del precio
  if (values.price === '' || isNaN(values.price) || values.price <= 0) {
      errors.price = 'El precio debe ser un número positivo';
  }

  return errors;
};

const isValidEmail = (email) => {
  // Validación simple de formato de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// validateFormes una función que toma los valores del formulario y devuelve un objeto errorsque contiene los mensajes de error para cada campo. Esta función valida cada campo según las reglas especificadas.

// isValidEmailes una función que verifica si una cadena es un correo electrónico válido utilizando una expresión regular simple.

// Luego, puedes utilizar esta función validateFormen tu componente para realizar las validaciones:

const handleSubmit = async (event) => {
  event.preventDefault();

  const errors = validateForm(values);

  if (Object.keys(errors).length === 0) {
      // No hay errores de validación, puedes enviar el formulario
      try {
          // ... Tu lógica de envío de formulario aquí ...
      } catch (error) {
          console.log('Error al crear la publicación:', error);
      }
  } else {
      // Hay errores de validación, muestra los mensajes de error
      console.log('Errores de validación:', errors);
  }
};