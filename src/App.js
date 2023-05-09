import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './User';
import Todo from './Todo';
import Post from './Post';
import './App.css';

class App extends Component {
render() {
	return (
      <>
      <Router>
         <div className="App">
            <ul className="App-header">
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="todo">Todo</Link>
            </li>
            <li>
               <Link to="post">Post</Link>
            </li>
            </ul>
         <Routes>
               <Route exact path='/' element={< Home />}></Route>
               <Route exact path='todo' element={< Todo />}></Route>
               <Route exact path='post' element={< Post />}></Route>
         </Routes>
         </div>
      </Router>
   </>
);
}
}

export default App;
