import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>Luxury Cars </h1>
    <nav className="nav-bar">
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-car">Vehicles</Link></li>
        <li><Link to="/booking">Bookings</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
