import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setStatusIdle as setBookingStatus } from '../redux/reducer/bookings/bookingSlice';
import { setStatusIdle as setUserStatus } from '../redux/reducer/user/userSlice';
import { setStatusIdle as setVehiclesStatus } from '../redux/reducer/vehicles/vehicleSlice';

const Alert = ({ message }) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch;
  const { pathName } = useLocation;

  const setBookingStatusIdle = () => {
    if (pathName === '/booking') dispatch(setBookingStatus());
  };

  const setUserStatusIdle = () => {
    if (pathName === '/login') dispatch(setUserStatus());
  };

  const setVehiclesStatusIdle = () => {
    if (pathName === '/vehicles') dispatch(setVehiclesStatus());
  };

  setTimeout(() => {
    setShow(false);
    setBookingStatusIdle();
    setUserStatusIdle();
    setVehiclesStatusIdle();
  }, 5000);

  const filterMessage = (msg) => {
    const lot = [
      ...new Set(
        msg
          .replace(/Validation failed:/g, '')
          .replace(/can't be blank/g, 'is required')
          .split(','),
      ),
    ].join(',');
    return lot;
  };

  return (
    <>
      <Alert
        className="mb-3 ml-2"
        variant="danger"
        show={show}
        dismissible
        onClose={() => {
          setBookingStatusIdle();
          setUserStatusIdle();
          setVehiclesStatusIdle();
          setShow(false);
        }}
      >
        {filterMessage(message) || ''}
      </Alert>
    </>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Alert;
