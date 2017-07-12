import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import getRoutes from './routes';
import App from './components/App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>  
    <App />
  </Provider>,
  document.getElementById('app')
);

