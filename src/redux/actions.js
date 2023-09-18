import axios from 'axios';
import { GETUSER } from './action-types';
import { GETSERVICES } from './action-types';
import { GETPAGINATEDSERVICES } from './action-types'
import { SET_TOTAL_PAGES } from "./action-types"
import { SET_CURRENT_PAGE } from './action-types';
import { EMPTY_USER } from './action-types';


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
export const postUser = (user) => {
    return async (dispatch) => {
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
    return async ( dispatch ) => {
        try {
            const { data } = await axios.get(
                'https://csyc.onrender.com/services?size=9999'
            );
            dispatch({
                type: GETSERVICES,
                payload: data
            })
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
}

export const getPaginated= (page) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://csyc.onrender.com/services?page=${page}`
            )
            dispatch({
                type:GETPAGINATEDSERVICES,
                payload: data
            })
            console.log(data)
        } catch (error) {
           console.log(error) 
        }
    }
}
export const setTotalPages = (totalPages) => {
    return {
        type: SET_TOTAL_PAGES,
        payload: totalPages
    }
}
export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page,
    };
};

