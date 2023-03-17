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
              <div className="col-md-4">
                <h2>{setVehicle.name}</h2>
                <h4 className="">
                  {' '}
                  Model:
                  {' '}
                  {setVehicle.model}
                </h4>
                <p className="">{setVehicle.description}</p>
                <p>
                  {' '}
                  Availablilty:
                  {' '}
                  {setVehicle.available ? 'Available' : 'Not Available' }
                </p>
                <p className="">
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
          <button className="btn btn-dark" type="button"><Link to="/">Back</Link></button>
        </>
      )
  );
};

export default VehicleDetails;
