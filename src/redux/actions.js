import axios from 'axios';
import {
    SHOW_LOADER, HIDE_LOADER,
    GETSERVICES, GETPAGINATEDSERVICES,
    GETALLUSERS, GETUSER, EMPTY_USER,
    GET_CLASIFICADO, GETOFFERBYEMAIL, DELETECLASIFICADOS,
    ADDCARTSERVICES, DELETECARTSERVICES, EMPTYCARTSERVICES, 
    GETALLRATING, GETRATINGBYSERVICE, GETALLRATINGBYUSER, GETRATINGBYID,
    GETNOTICES} 
from './action-types';



// Loader actions
export const showLoader = () => {
    return {
        type: SHOW_LOADER
    };
};


export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    };
};




// Users actions
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
            const {data} = await axios.get(`https://csyc.onrender.com/users`)
            dispatch({ type: GETALLUSERS, payload: data});
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
            console.error('Error creando el usuario', error);
            throw error;
        }
    };
};


export const putUser = (user) => {
    return async () => {
        try {
            await axios.put('https://csyc.onrender.com/users', user);
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




// Services actions
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




// Offers actions
export const getClasificados = ({title,type,order,orderBy,page,size}) => {

    return async (dispatch) => {
        try {
            const queriesAds={}

            if (title) {
                queriesAds.title = title;
            }
            
            if (type) {
                queriesAds.type = type;
            }
            
            if (order) {
                queriesAds.order = order;
            }
            
            if (orderBy) {
                queriesAds.orderBy = orderBy;
            }
            
            if (page) {
                queriesAds.page = page;
            }
            
            if (size) {
                queriesAds.size = size;
            }

            const queryAdsString = new URLSearchParams(queriesAds).toString();
            const url = `https://csyc.onrender.com/offer?${queryAdsString}`;
            console.log(url)
            const response= await axios.get(url);
            const offer= response.data.offers;
            const pagesOffer= response.data.totalPages;
            console.log(offer)
            dispatch({
                type: GET_CLASIFICADO,
                payload: {
                    offer,
                    pagesOffer
                }
            });
        } catch (error) {
            dispatch({ 
                type: GET_CLASIFICADO,
                payload: {
                    offer:[],
                    pagesOffer:0
                }
            });
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

export const getOfferByEmail = (email) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://csyc.onrender.com/offer/${email}`
            );
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




// Cart actions
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


export const emptyCart = () => {
    return {
        type: EMPTYCARTSERVICES
    }
}



// Rating actions
export const raitingPost = ({rating,comment,user_email,serviceId}) => {
    return async () => {
        try {
            let rating1={rating,comment,user_email,serviceId}
            const response = await axios.post(`https://csyc.onrender.com/reviews`, rating1)
            const dataRaiting = response.data
            console.log(dataRaiting)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
}


export const getAllRating = () => { // para el admin dario 
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://csyc.onrender.com/reviews`)
            dispatch({
                type: GETALLRATING,
                payload: data
            });
        
        } catch (error) {
            console.log(error)
        }
    }
}


export const getRatingService = ({serviceId}) => { // la ocupamos para servicios modal que hizo cristian
    return async (dispatch) => {
        try {
            
            const { data } = await axios.get(`https://csyc.onrender.com/reviews/${serviceId}`)
            dispatch({
                type: GETRATINGBYSERVICE,
                payload:data
            });

        } catch (error) {
            dispatch({
                type: GETRATINGBYSERVICE,
                payload:[]
            });
            console.log(error)
        }
    }
}


export const getAllRatingByUser = ({user_email}) => { // en usuarios para jason , esta maneja todas reviews que hizo el usuario 
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://csyc.onrender.com/reviews/byUser/${user_email}`)
            dispatch({
                type: GETALLRATINGBYUSER,
                payload:data
            });
        } catch (error) {
            console.log(error)
        }
    }
}


export const getRatingById = ({idReview}) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://csyc.onrender.com/reviews/${idReview}`)
            dispatch({
                type: GETRATINGBYID,
                payload:data
            });
            
        } catch (error) {
            console.log(error)
        }
    }
}


export const deleteRatingById = (idReview) => {
    return async () => {
        try {
            await axios.delete(`https://csyc.onrender.com/reviews/${idReview}`)
        } catch (error) {
            console.log(error)
        }
    }
}




// Notice Actions
export const getNotices = () =>{
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://csyc.onrender.com/notices`);
            dispatch({
                type: GETNOTICES,
                payload:data
            });
        } catch (error) {
            console.log(error)
        }
    }
}


export const editNotice = (id, notice) =>{
    return async () => {
        try {
            await axios.put(`https://csyc.onrender.com/notices/${id}`, notice);
            } catch (error) {
            alert('Error al editar el aviso', error);
        }
    };
};


export const addNotice = (notice) => {
    return async () => {
        try {
            await axios.post('https://csyc.onrender.com/notices',notice);
        } catch (error) {
            alert('Error al crear el aviso', error);
        }
    };
};


export const deleteNotice = (id) => {
    return async () => {
        try {
            await axios.delete(
                `https://csyc.onrender.com/notices/${id}`
            );
        } catch (error) {
            alert('Error al borrar el aviso', error);
        }
    };
};


// Admin actions
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


