import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import APIRequestProvider from './store/api-requests';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APIRequestProvider>
      <App />
    </APIRequestProvider>
  </React.StrictMode>
);
