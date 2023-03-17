import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { vehicle, vehicleDetails } from '../redux/reducer/vehicles/vehicleSlice';

const VehicleDetails = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const setVehicle = useSelector(vehicle);

  useEffect(() => {
    const updateVehicle = async () => {
      setLoading(true);
      await dispatch(vehicleDetails(id));
    };
    updateVehicle();
    setLoading(false);
  }, []);
  return (
    loading ? 'Loading'
      : (
        <>
          <div className="row d-flex justify">
            <div className=" details">
              <div className="img-div">
                <img className="detail-img" src={setVehicle.image} alt="Vehicle" width="100%" />
              </div>
              <div className="detailed col-md-4">
                <h2 className="vehicle-named">{setVehicle.name}</h2>
                <h4 className="vehicle-detailed">
                  {' '}
                  Model:
                  {' '}
                  {setVehicle.model}
                </h4>
                <p className="vehicle-detail">
                  {' '}
                  Availablilty:
                  {' '}
                  {setVehicle.available ? 'Available' : 'Not Available' }
                </p>
                <p className="vehicle-detail">
                  {' '}
                  daily price $:
                  {' '}

                  {' '}
                  {setVehicle.daily_price}
                  {' '}
                </p>
              </div>
            </div>
          </div>
          <div className="btnss">
            <button className="vehicle-but btn btn-dark" type="button"><Link to="/">Back</Link></button>
            <button className="vehicle-buti btn btn-success" type="button"><Link to="/singlebooking">Book This Vehicle</Link></button>
          </div>
        </>
      )
  );
};

export default VehicleDetails;
