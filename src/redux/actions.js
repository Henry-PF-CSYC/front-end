import axios from 'axios';
import { ADDCARTSERVICES, GETSERVICES, DELETECARTSERVICES, GETPAGINATEDSERVICES, GETALLUSERS, GETUSER, EMPTY_USER, GET_CLASIFICADO,
    GETOFFERBYEMAIL, DELETECLASIFICADOS, EMPTYCARTSERVICES} from './action-types';


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
            const [usersResponse, adminsResponse] = await Promise.all([
                axios.get(`https://csyc.onrender.com/users`),
                axios.get(`https://csyc.onrender.com/users/admin`),
            ]);

            const usersData = usersResponse.data;
            const adminsData = adminsResponse.data;
            const data = [...usersData, ...adminsData];

            dispatch({ type: GETALLUSERS, payload: data,});
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
            dispatch({
                type: GETPAGINATEDSERVICES,
                payload: {
                    services: [],
                    totalCount: 0 // Incluye el número total de páginas en el payload.
                }
            });
        }
    };
};


export const getClasificados = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://csyc.onrender.com/offer/");
            const offer= response.data.offers
            dispatch({
                type: GET_CLASIFICADO,
                payload: offer
            });
        } catch (error) {
            console.error("Error al traer los clasificados", error);
        }
    };
};



export const postClasificados = (clasificado) => {
    return async () => {
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
    };
};


export const deleteServiceCart = (service) => {
    return {
        type: DELETECARTSERVICES,
        payload: service
    };
};


export const getOfferByEmail = (email) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://csyc.onrender.com/offer/${email}`
            );
            console.log('data', data);
            dispatch({
                type: GETOFFERBYEMAIL,
                payload: data
            });
        } catch (error) {
            console.error(`Error al traer publicaciones`, error);
        }
    };
};


export const clearClasificados = () => {
    return {
        type: DELETECLASIFICADOS
    };
};


export const deleteOffer = (id,type) => {
    return async () => {
        try {
            await axios.delete(`https://csyc.onrender.com/offer/${id}?type=${type}`);
        } catch (error) {
            console.error(`Error al borrar la publicacion`, error);
        }
    };
};


export const restaurarOffer = (id) => {
    return async () => {
        try {
            await axios.put(`https://csyc.onrender.com/offer/${id}`);
        } catch (error) {
            console.error(`Error al restaurar la publicacion`, error);
        }
    };
};


export const addService = (service) => {
    return async () => {
        try {
            await axios.post('https://csyc.onrender.com/services', service);
        } catch (error) {
            alert('Error al crear el servicio', error);
        }
    };
};


export const updateService = (id, service) => {
    return async () => {
        try {
            await axios.put(`https://csyc.onrender.com/services/${id}`, service);
        } catch (error) {
            alert('Error al editar el servicio', error);
        }
    };
};


export const deleteService = (id) => {
    return async () => {
        try {
            await axios.delete(
                `https://csyc.onrender.com/services/delete/${id}`
            );
        } catch (error) {
            alert('Error al borrar el servicio', error);
        }
    };
};


export const createOrDesignAdmin = (userEmail,type) =>{
    return async () => {
        try {
            await axios.put(`https://csyc.onrender.com/users/admin/${userEmail}?type=${type}`);

        } catch (error) {
            console.log('Error al designar como administrador', error);
        }
    };
};


export const designNewContactEmail = (email) =>{
    return async () => {
        try {
            await axios.put(`https://csyc.onrender.com/contact/set_target/${email}`);

        } catch (error) {
            console.log('Error al cambiar el email de contacto por defecto', error);
        }
    };
};


export const banOrUnbanUser = (email,type) =>{
    return async () => {
        try {
            await axios.put(`https://csyc.onrender.com/users/ban/${email}?type=${type}`);

        } catch (error) {
            console.log('Error al cambiar el estado del usuario', error);
        }
    };
};


export const emptyCart = () => {
    return {
        type: EMPTYCARTSERVICES
    }
}
