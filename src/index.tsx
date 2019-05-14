import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import './index.css';
import 'normalize.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationCircle, faCloudUploadAlt, faImages, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faExclamationCircle);
library.add(faCloudUploadAlt);
library.add(faImages);
library.add(faTimes);
library.add(faTrash);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({

});
const store = createStore(rootReducer, composeEnhancers(
  // applyMiddleware()
  
));

const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
