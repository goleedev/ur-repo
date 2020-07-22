import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GithubProvider } from './components/Context/Context';
import { Auth0Provider } from '@auth0/auth0-react';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-sep8gdo8.auth0.com'
      clientId='OvupbFyZAa3hKMTr8FpNXhr7CImNLB0E'
      redirectUri={window.location.origin}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
