import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {createStore} from 'redux';
import rootReducer from "./reducers";
import {Provider} from 'react-redux'


const store = createStore(rootReducer, {});

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
