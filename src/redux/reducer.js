import { GETSERVICES, GETUSER } from "./action-types";

// Estado global
const initialState = {
    dataUser: {},
    services:[],
    backUpServices:[]
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

        default: return {...state}
    }
}

export default reducer;