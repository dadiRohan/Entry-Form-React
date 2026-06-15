import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './User';
import Todo from './Todo';
import Post from './Post';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header1">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? 'active' : '')}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/todo" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Todo
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/post" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Post
              </NavLink>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;