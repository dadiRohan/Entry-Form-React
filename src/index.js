import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyForm from './MyForm';
import AddUser from './AddUser';
import AddTodo from './AddTodo';
import Display from './Display';
import DisplayUser from './DisplayUser';
import DisplayTodo from './DisplayTodo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

        <AddTodo/>
        <DisplayTodo/>
        <App />

        <AddUser/>
        <DisplayUser />
        <App />

        <MyForm />  
        <Display />

  </React.StrictMode>
);

reportWebVitals();
