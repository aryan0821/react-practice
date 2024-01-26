import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Calculator from './Calculator';
import TodoList from './TodoList'; // Ensure you have this component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/todo-list"><button>To-Do List</button></Link>
              </li>
              <li>
                <Link to="/calculator"><button>Calculator</button></Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
