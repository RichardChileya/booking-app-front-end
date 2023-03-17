import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signOut,
  loggedin,
} from '../redux/reducer/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(loggedin);

  const handleLogout = () => {
    dispatch(signOut());
  };
  return (
    <header className="header">
      <h1 className="text-black pb-5">Luxury Cars </h1>
      <nav className="nav-bar">
        <ul className="links d-flex flex-column sidebar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Bookings</Link></li>
          <li><Link to="/reservation">Reservations</Link></li>
          {
            isLoggedIn ? <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
              : <Link className="btn btn-primary" to="/login">Login</Link>
          }

          <li />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
