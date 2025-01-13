import {BrowserRouter}  from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import React from 'react'; 
import './index.css';
import App from './App.jsx'; 
import StoreContextProvider from '../Context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
