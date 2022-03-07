import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import manageSearch from './reducers/manageSpotify';
import Dashboard from './components/dashboard'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, manageSearch)
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const persistor = persistStore(store)


ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter> 
         <Routes>
           <Route exact path="/" element={<App persistor={persistor}/>} />
           <Route path="/dashboard" element={<Dashboard />} />
         </Routes>      
        </BrowserRouter>
      </PersistGate>
    </Provider>
  ,
  document.getElementById('root')
);
