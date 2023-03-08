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

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="vehicle-details/:id" element={<VehicleDetails />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/reservation" element={<Reservation />} />
    <Route path="/add-car" element={<AddVehicle />} />
    <Route path="/delete-car" element={<DeleteVehicle />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);
export default AppRouter;
