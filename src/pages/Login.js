import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../redux/reducer/user/userSlice';
import userToken from '../redux/reducer/user/userToken';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTokenSet = userToken();

  const handleChange = (e) => {
    const {
      target: { name: input, value },
    } = e;
    setUser({ ...user, [input]: value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      dispatch(signIn(user));
    } else {
      <h1>Error</h1>;
    }
  };

  useDispatch(() => {
    if (isTokenSet) navigate('/');
  }, [isTokenSet, navigate]);

  document.title = 'Luxury Cars | Login';

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Login
            </div>
            <div className="card-body">
              <form onSubmit={handleSignIn}>
                <div className="form-group">

                  <label htmlFor="email">
                    Email address
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={handleChange}
                    />

                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="passwordInput"
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSignIn}>Login </button>
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
};

export default Login;
