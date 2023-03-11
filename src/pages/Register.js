import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Alert from '../components/Alert';
import { allMessages, allStatus } from '../redux/reducer/bookings/bookingSlice';
import userToken from '../redux/reducer/user/userToken';
import { signUp } from '../redux/reducer/user/userSlice';

const Register = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, 'Too Short!')
      .max(100, 'Too Long')
      .matches(
        /^(?=.{4,50}$)(?![a-z])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/,
        'Name should have at least 4 characters and should not contain numbers or special characters/punctuations!',
      ),
    // .required('Name is required!'),
    email: Yup.string()
    // .required('Email is required!')
      .email('Invalid Email!'),
    password: Yup.string()
    // .required('Password is required!')
      .matches(
        /^[a-zA-Z0-9!@#$%^&* ]{6,20}$/,
        'Password must contain at least 6 characters!',
      ),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password not match!'),
    // .required('Confirm Password is required!'),
  });

  const message = useSelector(allMessages);
  const status = useSelector(allStatus);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isTokenSet = userToken();

  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const signUphandler = (user) => {
    dispatch(signUp(user));
  };

  useEffect(() => {
    // if (isTokenSet) navigate('/');
  }, [isTokenSet]);

  // const register = () =>
  document.title = 'Luxury Cars | Register';
  return (
    <>
      {status === 'failed' && <Alert message={message} />}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Register
              </div>
              <div className="card-body">
                <Formik
                  initialValues={initialValues}
                  validationSchema={SignUpSchema}
                  onSubmit={() => signUphandler(values)}
                >
                  {({
                    errors, touched,
                  }) => (
                    <Form>
                      <div className="form-group">
                        <label htmlFor="nameInput" className="form-label">
                          Name
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="nameInput"
                            autoComplete="name"
                            value={values.name}
                            onChange={handleChange}
                          />
                        </label>
                        {errors.name && touched.name && <div className="form-error">{errors.name}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="roleInput" className="form-label">
                          Role
                          <input
                            type="text"
                            name="role"
                            className="form-control"
                            id="roleInput"
                            autoComplete="role"
                            value={values.role}
                            onChange={handleChange}
                          />
                        </label>
                        {errors.role && touched.role && <div className="form-error">{errors.role}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="emailInput" className="form-label">
                          Email address
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="emailInput"
                            autoComplete="email"
                            value={values.email}
                            onChange={handleChange}
                          />
                        </label>
                        {errors.email && touched.email && <div className="form-error">{errors.email}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="passwordInput" className="form-label">
                          Password
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="passwordInput"
                            autoComplete="password"
                            value={values.password}
                            onChange={handleChange}
                          />
                        </label>
                        {errors.password && touched.password && <div className="form-error">{errors.password}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="confirmPasswordInput" className="form-label">
                          Confirm password
                          <input
                            type="password"
                            name="passwordConfirmation"
                            className="form-control"
                            id="confirmPasswordInput"
                            autoComplete="password"
                            value={values.passwordConfirmation}
                            onChange={handleChange}
                          />
                        </label>
                        {errors.confirmPassword && touched.confirmPassword && (
                        <div className="form-error">{errors.confirmPassword}</div>
                        )}
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
                    </Form>
                  )}
                </Formik>
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
    </>
  );
};

export default Register;
