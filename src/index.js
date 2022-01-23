import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { BrowserRouter } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import manageSearch from './reducers/manageSearch';



const store = createStore(manageSearch, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  
  
    <Provider store={store}>
      <BrowserRouter>      
        <App />
      </BrowserRouter>
    </Provider>
  ,
  document.getElementById('root')
);


