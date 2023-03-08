import React from 'react';

const Register = () => (
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
                <label htmlFor="roleInput" className="form-label">
                  Role
                  <input type="text" className="form-control" id="roleInput" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="emailInput" className="form-label">
                  Email address
                  <input type="email" className="form-control" id="emailInput" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput" className="form-label">
                  Password
                  <input type="password" className="form-control" id="passwordInput" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPasswordInput" className="form-label">
                  Confirm password
                  <input type="password" className="form-control" id="confirmPasswordInput" />
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <div className="mt-3">
              Already have an account?
              {' '}
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Register;
