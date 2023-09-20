import {
    GETSERVICES,
    GETUSER,
    GETPAGINATEDSERVICES,
    EMPTY_USER,
    GET_CLASIFICADO
} from './action-types';

// Estado global
const initialState = {
    dataUser: {},
    services: [],
    backUpServices: [],
    totalPages: 1,
    currentServicesPage: [],
    clasificados: []
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
                totalPages: action.payload.totalCount // Almacena el número total de páginas en el estado.
            };
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
