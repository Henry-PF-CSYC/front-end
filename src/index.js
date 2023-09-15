import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Ruteado
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

//AUTH0
import { Auth0Provider } from '@auth0/auth0-react';
const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
                    <App/>
                </Auth0Provider>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

reportWebVitals();