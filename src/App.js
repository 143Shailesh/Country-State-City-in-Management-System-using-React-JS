
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import City from './components/City';
import Country from './components/Country';
import State from './components/State';
const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cities">Cities</Link>
            </li>
            <li>
              <Link to="/countries">Countries</Link>
            </li>
            <li>
              <Link to="/states">States</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome to City Management App</h2>} />
          <Route path="/cities" element={<City />} />
          <Route path="/countries" element={<Country />} />
          <Route path="/states" element={<State />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
