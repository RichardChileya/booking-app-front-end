import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authenticatedUser } from '../redux/reducer/user/userSlice';

const ProtectedRoute = () => {
  const authenticated = useSelector(authenticatedUser);
  let auth = false;
  if (Object.keys(authenticated).length > 0) {
    auth = true;
  }
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
