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
    console.log(values);
  };
  return (
    <>
      <div className="container-fluid mt-5">
        <div>
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-header">
                Add a Vehicle
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label" style={{ width: '100%' }}>
                      Name
                      <input type="text" value={values.name} onChange={handleChange} name="name" className="form-control" id="nameInput" />
                    </label>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="imageInput" className="form-label" style={{ width: '100%' }}>
                      Image
                      <input type="text" value={values.image} onChange={handleChange} name="image" className="form-control" id="imageInput" />
                    </label>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="modelInput" className="form-label" style={{ width: '100%' }}>
                      Model
                      <input type="text" value={values.model} onChange={handleChange} name="model" className="form-control" id="modelInput" />
                    </label>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="priceInput" className="form-label" style={{ width: '100%' }}>
                      Daily Price
                      <input type="number" value={values.price} onChange={handleChange} name="price" className="form-control" id="priceInput" />
                    </label>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="descriptionInput" className="form-label" style={{ width: '100%' }}>
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
