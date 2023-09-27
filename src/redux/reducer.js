import {
    GETSERVICES,
    GETUSER,
    GETPAGINATEDSERVICES,
    EMPTY_USER,
    ADDCARTSERVICES,
    GETALLUSERS,
    DELETECARTSERVICES,
    GET_CLASIFICADO,
    GETOFFERBYEMAIL,
    DELETECLASIFICADOS,
    RESTOREOFFER,
    EMPTYCARTSERVICES
} from './action-types';

// Estado global
const initialState = {
    dataUser: {},
    services: [],
    backUpServices: [],
    totalPages: 1,
    currentServicesPage: [],
    cartServices: [],
    clasificados: [],
    pagesClasificados: [],
    publicacionesusuario: [],
    allUsers: []
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
                dataUser: {},
                publicacionesusuario: {}
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
            };

        case ADDCARTSERVICES:
            const index = state.cartServices.findIndex(
                (service) => service.id === action.payload.id
            );
            if (index > -1) {
                state.cartServices[index].quantity = action.payload.quantity;
                return {
                    ...state,
                    cartServices: state.cartServices
                };
            } else {
                return {
                    ...state,
                    cartServices: [...state.cartServices, action.payload]
                };
            }
        case DELETECARTSERVICES:
            const filterServices = state.cartServices.filter(
                (service) => service.titulo !== action.payload
            );
            return {
                ...state,
                cartServices: filterServices
            };

        case GET_CLASIFICADO:
            return {
                ...state,
                clasificados: action.payload.offer,
                pagesClasificados: action.payload.pagesOffer
            };
        case GETOFFERBYEMAIL:
            return {
                ...state,
                publicacionesusuario: action.payload
            };
        case DELETECLASIFICADOS:
            return {
                ...state,
                clasificados: [],
                publicacionesusuario: []
            };
        case EMPTYCARTSERVICES:
            return {
                ...state,
                cartServices: []
            }

        default:
            return { ...state };
    }
};

export default reducer;
