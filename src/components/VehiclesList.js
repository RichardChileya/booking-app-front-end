import React from 'react';
import PropTypes from 'prop-types';

const VehiclesList = ({ item }) => (
  <div className="car-details col-md-4 col-sm-6">
    <img src={item.image} alt=" vehicles" className="car-imgs" />
    <h2>{item.name}</h2>
    <p>{item.desc}</p>
    <div className="icons-container">
      <span><img src="https://cdn-icons-png.flaticon.com/512/4628/4628653.png" alt="fb icon" className="icons" /></span>
      <span><img src="https://cdn-icons-png.flaticon.com/512/356/356076.png" alt="twitter icon" className="icons" /></span>
      <span><img src="https://cdn-icons-png.flaticon.com/512/1362/1362857.png" alt="instagram icon" className="icons" /></span>
    </div>
  </div>
);

VehiclesList.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default VehiclesList;
