/* eslint-disable import/no-extraneous-dependencies */
// import '~antd/dist/antd.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import dayjs from 'dayjs';
import { DatePicker } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { bookVehicle } from '../redux/reducer/bookings/bookingSlice';
import { authenticatedUser } from '../redux/reducer/user/userSlice';

const SingleBooking = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const { id } = useParams();
  const auth = useSelector(authenticatedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDateFormat = (date) => dayjs(date).format('YYYY/MM/DD');

  const handleBooking = async () => {
    const bookings = {
      pickup_date: pickupDate,
      return_date: returnDate,
      vehicle_id: id,
    };

    const userId = auth.id;

    const bookResponse = await dispatch(bookVehicle({ userId, bookings }));
    if (bookResponse.payload.status === '00') {
      setPickupDate('');
      setReturnDate('');
      navigate('/reservation');
    }
  };

  document.title = 'Luxury Vehicles | Booking';
  return (
    <>
      <div className="mt-4 mx-auto w-100 bg-light border-0 rounded-3 p-3" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <div className="mb-3 d-flex justify-content-center align-items-center text-light bg-dark opacity-50 bg-gradient" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <h3 className="text-uppercase text-light" style={{ letterSpacing: '0.1em; font-weight: 300' }}>
            Book This Vehicle
          </h3>
        </div>
        <div className="text-center">
          <h5 className="mb-2">Kind Note</h5>
          <p className="text-left">
            From Lamborghini to Mercedes, we have it all. Luxury Cars provides you with
            the best luxury car rental services worldwide.
          </p>
        </div>
        <div className="d-flex flex-column gap-4 text-danger">
          <DatePicker
            placeholder="Pickup Date"
            placement="topLeft"
            size="large"
            format="YYYY/MM/DD"
            allowClear
            minDate={new Date()}
            onChange={(date) => setPickupDate(handleDateFormat(date))}
          />
          <DatePicker
            placeholder="Return Date"
            placement="topLeft"
            size="large"
            format="YYYY/MM/DD"
            allowClear
            minDate={new Date()}
            onChange={(date) => setReturnDate(handleDateFormat(date))}
          />
        </div>
        <div className="mt-3">
          <Button
            type="button"
            onClick={handleBooking}
            variant="gradient"
            className="text-uppercase font-weight-bold py-3 btn btn-primary w-100"
            style={{ color: 'rgb(255, 193, 7)' }}
          >
            <span>Reserve</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SingleBooking;
