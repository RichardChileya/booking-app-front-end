import React from 'react';

const Booking = () => (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            Book A Car
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="nameInput" className="form-label">
                  Select a Car
                  <select className="form-control" id="nameInput">
                    <option selected>Choose...</option>
                    <option>Car1</option>
                    <option>Car2</option>
                    <option>Car3</option>
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="pickInput" className="form-label">
                  Pickup_Date
                  <input type="date" className="form-control" id="pickInput" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="returnInput" className="form-label">
                  Return_Date
                  <input type="date" className="form-control" id="returnInput" />
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Book A Car</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Booking;
