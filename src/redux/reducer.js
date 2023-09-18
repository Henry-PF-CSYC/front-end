import { GETPAGINATEDSERVICES, GETSERVICES, GETUSER, SET_CURRENT_PAGE, SET_TOTAL_PAGES, EMPTY_USER, ORDER_BY_NAME, FILTER_BY_TYPE} from "./action-types";


// Estado global
const initialState = {
    dataUser: {},
    services:[],
    backUpServices:[],
    
    currentPage: 1,
    totalPages: 1, 
    currentServicesPage: [],
} 


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
            return{
                ...state,
                services: action.payload,
                backUpServices: action.payload
            };

        // case GETPAGINATEDSERVICES:
        //     return {
        //     ...state,
        //     currentServicesPage: action.payload,
        //     };

        // case SET_CURRENT_PAGE:
        //     return {
        //         ...state,
        //         currentPage: action.payload,
        //     };

        // case SET_TOTAL_PAGES:
        //     return {
        //         ...state,
        //         totalPages: action.payload,
        //     };

        case ORDER_BY_NAME:
            return{
                ...state, 
                services: action.payload,
                backUpServices :action.payload,
            }

        case FILTER_BY_TYPE:
            return{
                ...state, 
                services: action.payload,
                backUpServices :action.payload,
            }

        default: return { ...state };
            };
};

export default reducer;
