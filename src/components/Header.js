import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="text-black pb-5">Luxury Cars </h1>
    <nav className="nav-bar">
      <ul className="links d-flex flex-column sidebar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-vehicle">Add Vehicle</Link></li>
        <li><Link to="/booking">Bookings</Link></li>
        <li><Link to="/reservation">Reservations</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
