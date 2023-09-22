import { GETSERVICES, GETUSER, GETALLUSERS, GETPAGINATEDSERVICES, EMPTY_USER, ADDCARTSERVICES, DELETECARTSERVICES, GET_CLASIFICADO } from "./action-types";

// Estado global
const initialState = {
    dataUser: {},
    services: [],
    backUpServices: [],
    totalPages: 1,
    currentServicesPage: [],
    cartServices: [],
    clasificados: [],
    allUsers:[]
};

console.log(initialState.currentServicesPage);

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GETUSER:
            return {
                ...state,
                dataUser: action.payload
            };

        case GETALLUSERS:
            return {
                ...state,
                allUsers: action.payload
            };

        case EMPTY_USER:
            return {
                ...state,
                dataUser: {}
            };

        case GETSERVICES:
            return {
                ...state,
                services: action.payload,
                backUpServices: action.payload
            };

        case GETPAGINATEDSERVICES:
            return {
                ...state,
                currentServicesPage: action.payload.services,
                totalPages: action.payload.totalCount // Almacena el número total de páginas en el estado
            }

        case ADDCARTSERVICES:
            return {
                ...state,
                cartServices: [...state.cartServices, action.payload]
            }

        case DELETECARTSERVICES:
            const filterServices = state.cartServices.filter( service => service.titulo !== action.payload)
            return {
                ...state,
                cartServices: filterServices
            }
           
        case GET_CLASIFICADO:
            return {
                ...state,
                clasificados: action.payload
            };
        default:
            return { ...state };
    }
};

export default reducer;
