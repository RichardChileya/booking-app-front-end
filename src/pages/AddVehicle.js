import React from 'react';

const AddVehicle = () => (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            Register
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="nameInput" className="form-label">
                  Name
                  <input type="text" className="form-control" id="nameInput" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="imageInput" className="form-label">
                  Image
                  <input type="text" className="form-control" id="imageInput" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="modelInput" className="form-label">
                  Model
                  <input type="text" className="form-control" id="modelInput" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="priceInput" className="form-label">
                  Daily Price
                  <input type="text" className="form-control" id="priceInput" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="descriptionInput" className="form-label">
                  Description
                  <input type="text" className="form-control" id="decriptionInput" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="availabilityInput" className="form-label">
                  Availability(true/false)
                  <input type="text" className="form-control" id="availabilityInput" />
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Add Vehicle</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AddVehicle;
