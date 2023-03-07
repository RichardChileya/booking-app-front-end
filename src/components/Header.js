import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
    <nav>
      <ul className="links">
        <li>Home</li>
        <li>Vehicles</li>
        <li>Bookings</li>
      </ul>
    </nav>
	</header>
	);

export default Header;