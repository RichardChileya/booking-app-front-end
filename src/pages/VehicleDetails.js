import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
        <div className="row">
          <div className="col-md-8 mt-5">
            <img src={setVehicle.image} alt="Vehicle" width="100%" />
          </div>
          <div className="col-md-4">
            {setVehicle.name}
          </div>
        </div>
      )
  );
};

export default VehicleDetails;
