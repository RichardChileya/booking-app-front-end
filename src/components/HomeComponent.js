/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { vehicles, listVehicles } from '../redux/reducer/vehicles/vehicleSlice';
import '../App.css';
import VehiclesList from './VehiclesList';

const slide = [
  {
    url: 'https://media.moddb.com/images/downloads/1/66/65217/Random_car_8.jpg',
  },
  {
    url: 'https://auto-didakt.com/assets/images/3/retromobile_2020-bertone_collection00015-c7f4f6a3.jpg',
  },
  {
    url: 'https://photos.smugmug.com/Cars/Modern/Random-Modern-Car-Pictures/i-NGfZXr2/0/b44bae96/XL/IMG_3608-XL.jpg',
  },
];

const HomeComponent = () => {
  const carData = useSelector(vehicles);
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirst = currentIndex === '0';
    const newIndex = isFirst ? carData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slide.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // const nextSlide = () => {};

  useEffect(() => {
    dispatch(listVehicles());
  }, []);
  return (
    <>
      <h2 className="container">Please select a car </h2>
      <div className="container group">
        <div className="car-info">
          {carData.map((car) => (
            <VehiclesList key={car.id} item={car} />
          ))}
        </div>
      </div>

      <div className="max-w-[800px] h-[500px] w-full m-auto py-4 realtive bg-blue/20">
        <div className="max-w-[800px] h-[500px] w-full m-auto py-4 realtive bg-blue/20 ">
          {carData.length > 0 && (
          <>
            {carData.map((car) => (
              <div key={car.id}>
                <img src={carData[currentIndex].image} alt="" />
                <p>{car.name}</p>

              </div>
            ))}
          </>
          )}
        </div>
        <div className="  group-hover:block absolute top  top={50%} -translate-x-0 translate-y-[-50%] left-5  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className=" group-hover:block absolute  top  top={50%} -translate-x-0 translate-y-[-50%] rigt-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>

      {/* <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      ; */}
    </>
  );
};

export default HomeComponent;
