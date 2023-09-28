import './RegisterStyles.css';
import { useFormik } from 'formik';
import validations from './validations';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, postUser } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import loader from "../../loading.gif"

const Register = () => {
    const onSubmit = (values, actions) => {
        alert('Registrado!');
        console.log('Submitted!', values);
        actions.resetForm();
    };

    let usuario = useSelector((state) => state.dataUser);
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUser(user.email));
            usuario.email = user.email;
            if (usuario.name !== undefined) {
                navigate('/');
            }
        }
    });

    let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                name: '',
                lastname: '',
                dni: '',
                address: '',
                phone: ''
            },
            validationSchema: validations,
            onSubmit: () => {
                values.email = user.email;
                dispatch(postUser(values));
                navigate('/');
            }
        });

    return (
        <div className="site">
            {isAuthenticated ? (
                <div className="container">
                    <form
                        onSubmit={handleSubmit}
                        autoComplete="off"
                        className="formStyles"
                    >
                        <h2>Completar Registro</h2>

                        <div className="row mt-4 fila">
                            <div className="col-md-3">
                                <h6 className="tagStyle">Nombre</h6>
                            </div>
                            <div className="col-md-9">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={handleChange}
                                    value={values.name}
                                    placeholder="Su nombre aquí"
                                    onBlur={handleBlur}
                                    className={
                                        'form-control form-control-lg inputStyle' +
                                        (errors.name && touched.name
                                            ? ' inputError'
                                            : '')
                                    }
                                />
                                {errors.name && touched.name && (
                                    <p className="errorText">{errors.name}</p>
                                )}
                            </div>
                        </div>

                        <hr className="mx-n3" />

                        <div className="row mt-4 fila">
                            <div className="col-md-3">
                                <h6 className="tagStyle">Apellido</h6>
                            </div>
                            <div className="col-md-9">
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    onChange={handleChange}
                                    value={values.lastname}
                                    placeholder="Su apellido aquí"
                                    onBlur={handleBlur}
                                    className={
                                        'form-control form-control-lg inputStyle' +
                                        (errors.lastname && touched.lastname
                                            ? ' inputError'
                                            : '')
                                    }
                                />
                                {errors.lastname && touched.lastname && (
                                    <p className="errorText">
                                        {errors.lastname}
                                    </p>
                                )}
                            </div>
                        </div>

                        <hr className="mx-n3" />

                        <div className="row mt-4 fila">
                            <div className="col-md-3">
                                <h6 className="tagStyle">DNI</h6>
                            </div>
                            <div className="col-md-9">
                                <input
                                    type="text"
                                    id="dni"
                                    name="dni"
                                    onChange={handleChange}
                                    value={values.dni}
                                    placeholder="Su DNI aquí"
                                    onBlur={handleBlur}
                                    className={
                                        'form-control form-control-lg inputStyle' +
                                        (errors.dni && touched.dni
                                            ? ' inputError'
                                            : '')
                                    }
                                />
                                {errors.dni && touched.dni && (
                                    <p className="errorText">{errors.dni}</p>
                                )}
                            </div>
                        </div>

                        <hr className="mx-n3" />

                        <div className="row mt-4 fila">
                            <div className="col-md-3">
                                <h6 className="tagStyle">Dirección</h6>
                            </div>
                            <div className="col-md-9">
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    onChange={handleChange}
                                    value={values.address}
                                    placeholder="Su dirección aquí"
                                    onBlur={handleBlur}
                                    className={
                                        'form-control form-control-lg inputStyle' +
                                        (errors.address && touched.address
                                            ? ' inputError'
                                            : '')
                                    }
                                />
                                {errors.address && touched.address && (
                                    <p className="errorText">
                                        {errors.address}
                                    </p>
                                )}
                            </div>
                        </div>

                        <hr className="mx-n3" />

                        <div className="row mt-4 fila">
                            <div className="col-md-3">
                                <h6 className="tagStyle">Teléfono</h6>
                            </div>
                            <div className="col-md-9">
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    onChange={handleChange}
                                    value={values.phone}
                                    placeholder="Su teléfono aquí"
                                    onBlur={handleBlur}
                                    className={
                                        'form-control form-control-lg inputStyle' +
                                        (errors.phone && touched.phone
                                            ? ' inputError'
                                            : '')
                                    }
                                />
                                {errors.phone && touched.phone && (
                                    <p className="errorText">{errors.phone}</p>
                                )}
                            </div>
                        </div>

                        <hr className="mx-n3" />

                        <div className="row mt-4 boton">
                            <div className="col-md-9">
                                <button
                                    type="submit"
                                    variant="success"
                                    className="btn btn-primary btn-lg"
                                >
                                    Registrarse
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            ):(<div class="d-flex justify-content-center " >
            <img 
            src={loader}
            />
        </div>)}
        </div>
    );
};

export default Register;
