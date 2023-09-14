import { GETUSER } from "./action-types";

// Estado global
const initialState = {
    dataUser: {}
} 

// Reducer 
const reducer = (state = initialState, action) => {
   
    switch (action.type){
        case GETUSER:
            return{
                ...state,
                dataUser: action.payload
            }

        default: return {...state}
    }
}

export default reducer;