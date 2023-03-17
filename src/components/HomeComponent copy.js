/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { vehicles, listVehicles } from '../redux/reducer/vehicles/vehicleSlice';
import '../App.css';
import VehiclesList from './VehiclesList';

const HomeComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // End whe
  const carData = useSelector(vehicles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listVehicles());
  }, []);
  return (
    <>
      <h2 className="container">Please select a car </h2>
      <Carousel responsive={responsive}>
        <div className="container">
          <div className="car-info ">
            {carData.map((car) => (
              <VehiclesList key={car.id} item={car} />
            ))}
          </div>
        </div>
      </Carousel>

      {/* <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      ; */}
    </>
  );
};

export default HomeComponent;
