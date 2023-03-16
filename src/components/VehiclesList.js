import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popup from './PopUp';

const VehiclesList = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);
  // const [selectedCar, setSelectedCar] = useState(null);

  const handleOpenPopup = () => {
    setShowPopup(true);
    // setSelectedCar(car);
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
        {/* {showPopup && (
        <div className="modal">
          <div className="modal-content">
            <button type="button" className="close" onClick={handleClosePopup}>&times;</button>
            <h2>{item.name}</h2>
            <p>{item.details}</p>
            <img src={item.image} alt="modal vehicle" />
          </div>
        </div>
        )} */}
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
