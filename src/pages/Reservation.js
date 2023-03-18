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
      setLoading(false);
    };
    updateBooking();
  }, []);
  return (
    loading ? 'Loading'
      : (
        <div className="container">
          <div className="car-info row">
            <h4 className="py-5">My Reservations</h4>
            {bookingsData.map((booking) => {
              const vehicle = vehicleRelationship.filter(
                (car) => car.id === booking.relationships.vehicle.data.id,
              );
              const pickupDate = new Date(booking.attributes.pickup_date);
              const returnDate = new Date(booking.attributes.return_date);
              return (
                <div key={booking.id}>
                  <div className="row my-4">
                    <img className="col-md-6" src={vehicle[0].attributes.image} height="220" alt="booked vehicle" />
                    <div className="col-md-6">
                      <table className="table table-striped vehicle-data-table">
                        <tbody id="tbody">
                          <tr>
                            <th>Vehicle Name</th>
                            <td>{vehicle[0].attributes.name}</td>
                          </tr>
                          <tr>
                            <th>Model</th>
                            <td>{vehicle[0].attributes.model}</td>
                          </tr>
                          <tr>
                            <th>Price</th>
                            <td>{`$ ${vehicle[0].attributes.daily_price}`}</td>
                          </tr>
                          <tr>
                            <th>Pick Up Date</th>
                            <td>{pickupDate.toLocaleDateString()}</td>
                          </tr>
                          <tr>
                            <th>Return Date</th>
                            <td>{returnDate.toLocaleDateString()}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )
  );
};

export default Reservation;
