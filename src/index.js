import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


