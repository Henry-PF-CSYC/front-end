import axios from 'axios';
import { GETUSER } from './action-types';
import { GETSERVICES } from './action-types';

export const getUser = (email) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://csyc.onrender.com/users/${email}`
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
            const { data } = await axios.post(
                'https://csyc.onrender.com/users',
                user
            );
            console.log('me cree');
        } catch (error) {
            console.error('Error finding the user', error);
        }
    };
};
export const getServices = () => {
    return async ( dispatch ) => {
        try {
            const { data } = await axios.get(
                'https://csyc.onrender.com/services'
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