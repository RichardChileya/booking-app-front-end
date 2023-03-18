import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import VehicleDetails from '../pages/VehicleDetails';
import Booking from '../pages/Booking';
import SingleBooking from '../pages/SingleBooking';
import Reservation from '../pages/Reservation';
import AddVehicle from '../pages/AddVehicle';
import DeleteVehicle from '../pages/DeleteVehicle';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="vehicle-details/:id" element={<VehicleDetails />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/booking" element={<Booking />} />
      <Route path="/singlebooking/:id" element={<SingleBooking />} />
      <Route path="/reservation" element={<Reservation />} />
    </Route>
    <Route path="/add-vehicle" element={<AddVehicle />} />
    <Route path="/delete-vehicle" element={<DeleteVehicle />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);
export default AppRouter;
