import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { vehicles, listVehicles } from '../redux/reducer/vehicles/vehicleSlice';
import '../App.css';
// import VehiclesList from './VehiclesList';

const HomeComponent = () => {
  const carData = useSelector(vehicles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listVehicles());
  }, []);
  return (
    <>
      <h2 className="container">Please select a car </h2>
      <div className="container">
        <div className="car-info row">
          {carData.map((car) => (
            <React.Fragment key={car.id}>
              <img src={car.image} alt={car.name} />
              <h2>{car.name}</h2>
              <p>{car.description}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
