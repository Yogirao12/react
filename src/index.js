import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Authprovider } from './provider/authprovider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Authprovider>
    <App />
    </Authprovider>
    </BrowserRouter>
  </React.StrictMode>
);

