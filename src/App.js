import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Bookings from './components/Bookings';
import Vehicles from './components/Vehicles';

function App() {
  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/" element={(<Header />)} />
          <Route path="/Vehicles/" element={(<Vehicles />)} />
          <Route path="/Bookings/" element={(<Bookings />)} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
