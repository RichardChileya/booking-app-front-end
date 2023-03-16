import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({ showPopup, handleClosePopup, item }) => (
  <>
    {/* <button type="button" onClick={handleOpenPopup}>Open Popup</button> */}
    {showPopup && (
    <div className=" popup">
      <div className="popup-content">
        <button type="button" className="close" onClick={handleClosePopup}>&times;</button>
        <div className="left-block">
          <img src={item.image} alt="vehicle img" className="pop-imgs" />
        </div>
        <div className="right-block">

          <h2 className="desc">{item.name}</h2>
          <h3 className="desc">
            {' '}
            model:
            {' '}
            {item.model}
          </h3>
          <p className="desc">{item.description}</p>
          <p>
            Availability:
            {' '}
            {item.available.toString()}
          </p>
          <p>
            {' '}
            Daily Price $:
            {item.daily_price}
          </p>
        </div>
      </div>
    </div>
    )}
  </>
);

export default Popup;

Popup.propTypes = {
  showPopup: PropTypes.bool.isRequired,
  handleClosePopup: PropTypes.func.isRequired,
  item: PropTypes.shape({
    available: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    daily_price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
