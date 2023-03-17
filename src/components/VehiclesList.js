import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const VehiclesList = ({ item }) => {
  const path = `/vehicle-details/${item.id}`;
  return (
    <div className="car-details col-md-4 col-sm-6">
      <Link to={path}>
        <img src={item.image} alt=" vehicles" className="car-imgs" />
        <h2 className="vehicle-name">{item.name}</h2>
      </Link>
      <p>{item.description}</p>
      <div className="icons-container">
        <span><img src="https://cdn-icons-png.flaticon.com/512/4628/4628653.png" alt="fb icon" className="icons" /></span>
        <span><img src="https://cdn-icons-png.flaticon.com/512/356/356076.png" alt="twitter icon" className="icons" /></span>
        <span><img src="https://cdn-icons-png.flaticon.com/512/1362/1362857.png" alt="instagram icon" className="icons" /></span>
      </div>

    </div>
  );
};

VehiclesList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default VehiclesList;
