import React, { useState } from 'react';

const AddVehicle = () => {
  const [values, setValues] = useState({
    name: '',
    image: '',
    model: '',
    price: '',
    description: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Add a Vehicle
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nameInput" className="form-label">
                      Name
                      <input type="text" value={values.name} onChange={handleChange} name="name" className="form-control" id="nameInput" />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="imageInput" className="form-label">
                      Image
                      <input type="text" value={values.image} onChange={handleChange} name="image" className="form-control" id="imageInput" />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="modelInput" className="form-label">
                      Model
                      <input type="text" value={values.model} onChange={handleChange} name="model" className="form-control" id="modelInput" />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="priceInput" className="form-label">
                      Daily Price
                      <input type="number" value={values.price} onChange={handleChange} name="price" className="form-control" id="priceInput" />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="descriptionInput" className="form-label">
                      Description
                      <textarea name="description" value={values.description} onChange={handleChange} className="form-control" id="decriptionInput" />
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
};

export default AddVehicle;
