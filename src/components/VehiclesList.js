import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popup from './PopUp';

const VehiclesList = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div className="car-details col-md-4 col-sm-6">
        <img src={item.image} alt=" vehicles" className="car-imgs" />
        <button type="button" onClick={handleOpenPopup}>{item.name}</button>
        <p>{item.description}</p>
        <div className="icons-container">
          <span><img src="https://cdn-icons-png.flaticon.com/512/4628/4628653.png" alt="fb icon" className="icons" /></span>
          <span><img src="https://cdn-icons-png.flaticon.com/512/356/356076.png" alt="twitter icon" className="icons" /></span>
          <span><img src="https://cdn-icons-png.flaticon.com/512/1362/1362857.png" alt="instagram icon" className="icons" /></span>
        </div>
      </div>
      <Popup showPopup={showPopup} handleClosePopup={handleClosePopup} item={item} />
    </>
  );
};

VehiclesList.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default VehiclesList;
