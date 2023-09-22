import axios from 'axios';
import { ADDCARTSERVICES, DELETECARTSERVICES, GETPAGINATEDSERVICES, GETUSER, GETALLUSERS } from './action-types';
import { GETSERVICES } from './action-types';
import { EMPTY_USER } from './action-types';
import { GET_CLASIFICADO } from './action-types';

export const getUser = (email) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://csyc.onrender.com/users/?email=${email}`
            );
            dispatch({
                type: GETUSER,
                payload: data
            });
        } catch (error) {
            console.error(`Error encontrar el usuario`, error);
        }
    };
};

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://csyc.onrender.com/users`
            );
            dispatch({
                type: GETALLUSERS,
                payload: data
            });
        } catch (error) {
            console.error(`Error encontrando los usuarios`, error);
        }
    };
};


export const postUser = (user) => {
    return async () => {
        try {
            await axios.post('https://csyc.onrender.com/users', user);
            console.log('me cree');
        } catch (error) {
            console.error('Error finding the user', error);
        }
    };
};
export const emptyUser = () => {
    return {
        type: EMPTY_USER
    };
};

export const getServices = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                'https://csyc.onrender.com/services?size=9999'
            );
            const allservices = response.data.service;
            dispatch({
                type: GETSERVICES,
                payload: allservices
            });
            console.log(allservices);
        } catch (error) {
            console.log(error);
        }
    };
};
export const getServicesPaginated = ({
    name,
    page,
    size,
    order,
    orderBy,
    type,
    rangeMin,
    rangeMax
}) => {
    return async (dispatch) => {
        try {
            // Inicializa un objeto para almacenar las consultas válidas.
            const queries = {};

            // Agrega las consultas que tienen valores definidos.
            if (name) queries.name = name;
            if (page) queries.page = page;
            if (size) queries.size = size;
            if (order) queries.order = order;
            if (orderBy) queries.orderBy = orderBy;
            if (type) queries.type = type;
            if (rangeMin) queries.min = rangeMin;
            if (rangeMax) queries.max = rangeMax;

            // Convierte el objeto queries en una cadena de consulta (query string).
            const queryString = new URLSearchParams(queries).toString();

            // Construye la URL de la solicitud con las consultas válidas.
            const url = `https://csyc.onrender.com/services?${queryString}`;
            console.log(url);
            const response = await axios.get(url);
            const services = response.data.service;
            const totalCount = response.data.count;

            dispatch({
                type: GETPAGINATEDSERVICES,
                payload: {
                    services,
                    totalCount // Incluye el número total de páginas en el payload.
                }
            });
            console.log(services);
        } catch (error) {
            console.log(error);
        }
    };
};


export const getClasificados = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://csyc.onrender.com/offer/`
            );
            dispatch({
                type: GET_CLASIFICADO,
                payload: data
            });
        } catch (error) {
            console.error(`Error al traer los clasificados`, error);
        }
    };
};


export const postClasificados = (clasificado) => {
    return async () => {
        console.log(clasificado);
        try {
            await axios.post('https://csyc.onrender.com/offer/', clasificado);
        } catch (error) {
            console.log(clasificado);
            console.error('Error al crear la publicacion', error);
        }
    };
};

export const addServiceCart = (service) => {
    return {
        type: ADDCARTSERVICES,
        payload: service
    }
}


export const deleteServiceCart = (service) => {
    return {
        type: DELETECARTSERVICES,
        payload: service
    }
}

