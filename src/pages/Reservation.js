import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { vehiclesBookings, getBooking, includedVehicles } from '../redux/reducer/bookings/bookingSlice';
import { authenticatedUser } from '../redux/reducer/user/userSlice';

const Reservation = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const bookingsData = useSelector(vehiclesBookings);
  const vehicleRelationship = useSelector(includedVehicles);
  const auth = useSelector(authenticatedUser);

  useEffect(() => {
    const updateBooking = async () => {
      setLoading(true);
      await dispatch(getBooking(auth.id));
    };
    updateBooking();
    setLoading(false);
  }, []);
  return (
    loading ? 'Loading'
      : (
        <div className="container">
          <div className="car-info row">
            {bookingsData.map((booking) => {
              const vehicle = vehicleRelationship.filter(
                (car) => car.id === booking.relationships.vehicle.data.id,
              );
              return (
                <div key={booking.id}>
                  {vehicle.name}
                </div>
              );
            })}
          </div>
        </div>
      )
  );
};

export default Reservation;
