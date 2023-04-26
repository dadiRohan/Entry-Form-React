import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyForm from './MyForm';
import Display from './Display';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

        <MyForm />  

        <Display />

        <App />
  </React.StrictMode>
);

reportWebVitals();
