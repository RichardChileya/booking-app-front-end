import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { vehicle, vehicleDetails } from '../redux/reducer/vehicles/vehicleSlice';
import { loggedin } from '../redux/reducer/user/userSlice';

const VehicleDetails = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const setVehicle = useSelector(vehicle);
  const isLoggedIn = useSelector(loggedin);

  useEffect(() => {
    const updateVehicle = async () => {
      setLoading(true);
      await dispatch(vehicleDetails(id));
      setLoading(false);
    };
    updateVehicle();
  }, []);
  return (
    loading ? 'Loading'
      : (
        <>
          <div className="container-fluid mt-5">
            <div className="row">
              <img className="col-md-7 mt-5 details-img" src={setVehicle.image} alt="booked vehicle" />
              <div className="col-md-5">
                <h4 className="mb-5" style={{ textAlign: 'right' }}>{setVehicle.name}</h4>
                <table className="table table-striped vehicle-data-table">
                  <tbody id="tbody">
                    <tr>
                      <th>Model</th>
                      <td>{setVehicle.model}</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td>{`$ ${setVehicle.daily_price}`}</td>
                    </tr>
                    <tr>
                      <th>Availability</th>
                      <td>{setVehicle.available ? 'Available' : 'Not Available'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="btnss">
            <button className="vehicle-but btn btn-dark" type="button"><Link to="/">Back</Link></button>
            {isLoggedIn && <button className="vehicle-buti btn btn-success" type="button"><Link to={`/singlebooking/${setVehicle.id}`}>Book This Vehicle</Link></button>}
          </div>
        </>
      )
  );
};

export default VehicleDetails;
