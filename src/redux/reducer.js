import { GETUSER, EMPTY_USER } from './action-types';

// Estado global
const initialState = {
    dataUser: {}
};

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
        default:
            return { ...state };
    }
};

export default reducer;
