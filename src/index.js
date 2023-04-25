import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Todo from './Todo';
import MyForm from './MyForm';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div style={{backgroundColor:'#ccc'}}>

        <MyForm />  

        <Todo />

        <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
