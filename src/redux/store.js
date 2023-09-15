import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware  from "redux-thunk";
import reducer from "./reducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'user',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer) 

const store = createStore(
    persistedReducer, composeEnhancer(applyMiddleware(thunkMiddleware))
)

const persistor = persistStore(store)

export {
    store,
    persistor
}