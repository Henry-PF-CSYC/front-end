import * as Yup from 'yup';

const mySchema = Yup.object().shape({
    type: Yup.string()
        .required('Por favor, seleccione un tipo de publicacion'),

    title: Yup.string()
        .required('Por favor, ingrese un titulo'),

    contact: Yup.string()
        .min(9, 'El número es muy pequeño')
        .max(13, 'El número es muy extenso')
        .required('Por favor, su numero de contacto'),

    description: Yup.string().required('Por favor, ingrese una descripcion'),

    price: Yup.string()
        .required('Por favor, ingrese un precio')
});

export default mySchema;
