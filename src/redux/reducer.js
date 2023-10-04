import {
    SHOW_LOADER, HIDE_LOADER,
    
    GETSERVICES, GETPAGINATEDSERVICES,
    
    GETALLUSERS, GETUSER, EMPTY_USER,
   
    GET_CLASIFICADO, GETOFFERBYEMAIL, DELETECLASIFICADOS,
    
    ADDCARTSERVICES, DELETECARTSERVICES, EMPTYCARTSERVICES,

    GETALLRATING, GETRATINGBYSERVICE, GETALLRATINGBYUSER, GETRATINGBYID,

    GETNOTICES} 
from './action-types';

// Estado global
const initialState = {
    // Loader
    isLoading: false,
    
    // User & All
    dataUser: {},
    allUsers: [],

    // Services + Pages
    services: [],
    backUpServices: [],
    totalPages: 1,
    currentServicesPage: [],

    // Offers
    clasificados: [],
    pagesClasificados: [],
    publicacionesusuario: [],
   
    // Cart
    cartServices: [],

    // Rating 
    allRating: [],
    ratingService: [],
    ratingByUser: [] ,
    selectedReview: [],

    // Notices
    notices: []
};

console.log(initialState.dataUser);




// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        // Loader
        case SHOW_LOADER:
            return {
                ...state,
                isLoading: true 
            };

        case HIDE_LOADER:
            return {
                ...state,
                isLoading: false 
            };

        

        // Users
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

        

        // Services
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
                totalPages: action.payload.totalCount 
            };



        // Cart
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
        
        case EMPTYCARTSERVICES:
            return {
                ...state,
                cartServices: []
            }


        
        // Offers
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
        
        // Rating
        case GETALLRATING:
            return { 
                ...state,
                allRating: action.payload
            }
        case GETRATINGBYSERVICE:
            return {
                ...state,
                ratingService: action.payload
            }
        case GETALLRATINGBYUSER:
            return {
                ...state,
                ratingByUser: action.payload
            }
        case  GETRATINGBYID:
            return {
                ...state,
                selectedReview: action.payload
            }

       

        // Notices
        case GETNOTICES:
            return {
                ...state,
                notices: action.payload
            }


        default: return { ...state };}
};

export default reducer;