import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyForm from './MyForm';
import AddUser from './AddUser';
import Display from './Display';
import DisplayUser from './DisplayUser';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

        <AddUser/>

        <DisplayUser />

        <hr/>

        <MyForm />  

        <Display />

        <App />
  </React.StrictMode>
);

reportWebVitals();
