import React from 'react';
import Header from '../components/Header';

const AddVehicle = () => (
  <>
    <Header />
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Add a Vehicle
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
                    <input type="number" className="form-control" id="priceInput" />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="descriptionInput" className="form-label">
                    Description
                    <textarea className="form-control" id="decriptionInput" />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="availabilityInput" className="form-label">
                    Availability
                    <select className="form-control" id="availabilityInput">
                      <option selected>Choose...</option>
                      <option>True</option>
                      <option>False</option>
                    </select>
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">Add Vehicle</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AddVehicle;
