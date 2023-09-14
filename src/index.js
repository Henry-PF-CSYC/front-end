import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
// Ruteado
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//AUTH0
const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(domain,clientId)
root.render(

    <Provider store={store}>
        <BrowserRouter>
            <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
                <App/>
            </Auth0Provider>
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
