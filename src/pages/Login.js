import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn, loggedin } from '../redux/reducer/user/userSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(loggedin);

  const handleChange = (e) => {
    const {
      target: { name: input, value },
    } = e;
    setUser({ ...user, [input]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const authLogin = await dispatch(signIn(user));
    console.log(authLogin);
    if (authLogin.payload.status === 'successful') {
      localStorage.setItem('authUser', JSON.stringify(authLogin.payload.user));
      navigate('/');
    }
  };

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn]);

  document.title = 'Luxury Cars | Login';

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Login</h3>
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
