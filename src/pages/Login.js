import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            Login
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="emailInput">
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
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className="mt-3">
              Don&apos;t have an account?
              {' '}
              <a href="/register">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
