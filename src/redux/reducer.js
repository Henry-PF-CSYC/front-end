import { GETPAGINATEDSERVICES, GETSERVICES, GETUSER, SET_CURRENT_PAGE, SET_TOTAL_PAGES } from "./action-types";

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
   
    switch (action.type){
        case GETUSER:
            return{
                ...state,
                dataUser: action.payload
            }
        case GETSERVICES:
            return{
                ...state,
                services: action.payload,
                backUpServices: action.payload
            }
        case GETPAGINATEDSERVICES:
            return {
            ...state,
            currentServicesPage: action.payload,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.payload,
            };

        default: return {...state}
    }
}

export default reducer;