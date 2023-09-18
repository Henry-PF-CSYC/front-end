import axios from 'axios';
import { GETUSER, ORDER_BY_NAME } from './action-types';
import { GETSERVICES } from './action-types';
import { GETPAGINATEDSERVICES } from './action-types'
import { SET_TOTAL_PAGES } from "./action-types"
import { SET_CURRENT_PAGE } from './action-types';
import { EMPTY_USER } from './action-types';
import { FILTER_BY_TYPE } from './action-types';


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
        } catch (error) {
            console.log(error)
        }
    }
}


export const getPaginated= (page) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://csyc.onrender.com/services?page=${page}&size=9999`
            )
            dispatch({
                type:GETPAGINATEDSERVICES,
                payload: data
            })
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


// export const orderByName = (order) =>{
//     return async (dispatch) => {
//         try {
//             const { data } = await axios.get(
//                 `https://csyc.onrender.com/services?order=${order}&size=9999`
//             )
//             dispatch({
//                 type: ORDER_BY_NAME,
//                 payload: data
//             })
//             console.log(data)
//         } catch (error) {
//            console.log(error) 
//         }
//     }
// }


export const orderByName = (order) => {
    return async (dispatch, getState) => {
      try {
        // Obtiene la propiedad services del estado global
        const services = getState().services;
  
        // Ordena el array services según la propiedad 'name' y el parámetro 'order'
        services.sort((a, b) => {
          // Cambia 'name' a la propiedad que desees ordenar
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
  
          if (order === "ASC") {
            return nameA.localeCompare(nameB);
          } else if (order === "DESC") {
            return nameB.localeCompare(nameA);
          }
          return 0;
        });
  
        dispatch({
          type: ORDER_BY_NAME,
          payload: services, // Usar services en lugar de data
        });
  
      } catch (error) {
        console.log(error);
      }
    };
  };
  ;



export const filterByType = (type) =>{
    return async (dispatch) => {
        try {
            if(type==="base"){
                const { data } = await axios.get(
                    `https://csyc.onrender.com/services?order=ASC&size=9999`
                )
                return dispatch({
                    type: ORDER_BY_NAME,
                    payload: data
                })
            }
            const { data } = await axios.get(
                `https://csyc.onrender.com/services?type=${type}&size=9999`
            )
            return dispatch({
                type: FILTER_BY_TYPE,
                payload: data
            })
            console.log(data)
        } catch (error) {
           console.log(error) 
        }
    }
}