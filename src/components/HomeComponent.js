/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { vehicles, listVehicles } from '../redux/reducer/vehicles/vehicleSlice';
import '../App.css';
import VehiclesList from './VehiclesList';

const HomeComponent = () => {
  const carData = useSelector(vehicles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listVehicles());
  }, []);
  return (
    <>
      <h2 className="container">Please select a car </h2>
      <div className="container-fluid group">
        <div className="car-info">
          <OwlCarousel className="owl-theme" items={3} margin={20} loop autoplay>
            {carData.map((car) => (
              <VehiclesList key={car.id} item={car} />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
