import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import VehicleDetails from '../pages/VehicleDetails';
import Booking from '../pages/Booking';
import Reservation from '../pages/Reservation';
import AddVehicle from '../pages/AddVehicle';
import DeleteVehicle from '../pages/DeleteVehicle';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/booking" element={<Booking />} />
    <Route element={<ProtectedRoute />}>
      <Route path="vehicle-details/:id" element={<VehicleDetails />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/add-vehicle" element={<AddVehicle />} />
      <Route path="/delete-vehicle" element={<DeleteVehicle />} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);
export default AppRouter;
