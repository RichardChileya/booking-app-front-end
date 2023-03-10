import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
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
      .mathches(
        /^(?=.{4,50}$)(?![a-z])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/,
        'Name should have at least 4 characters and should not contain numbers or special characters/punctuations!',
      )
      .required('Name is required!'),
    email: Yup.string().required('Email is required!').email('Invalid Email!'),
    password: Yup.string()
      .required('Password is required!')
      .matches(
        /^[a-zA-Z0-9!@#$%^&* ]{6,20}$/,
        'Password must contain at least 6 characters!',
      ),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password not match!')
      .required('Confirm Password is required!'),
  });

  const message = useSelector(allMessages);
  const status = useSelector(allStatus);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isTokenSet = userToken();

  const signUphsndler = (user) => {
    dispatch(signUp(user));
  };

  useEffect(() => {
    if (isTokenSet) navigate('/');
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
                  onSubmit={handleSubmit}
                  validationSchema={SignUpSchema}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="form-group">
                        <label htmlFor="nameInput" className="form-label">
                          Name
                          <Field type="text" name="name" className="form-control" id="nameInput" />
                          <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </label>
                      </div>
                      <div className="form-group">
                        <label htmlFor="roleInput" className="form-label">
                          Role
                          <Field type="text" name="role" className="form-control" id="roleInput" />
                          <ErrorMessage name="role" component="div" className="invalid-feedback" />
                        </label>
                      </div>
                      <div className="form-group">
                        <label htmlFor="emailInput" className="form-label">
                          Email address
                          <Field type="email" name="email" className="form-control" id="emailInput" />
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </label>
                      </div>
                      <div className="form-group">
                        <label htmlFor="passwordInput" className="form-label">
                          Password
                          <Field type="password" name="password" className="form-control" id="passwordInput" />
                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </label>
                      </div>
                      <div className="form-group">
                        <label htmlFor="confirmPasswordInput" className="form-label">
                          Confirm password
                          <Field type="password" name="confirmPassword" className="form-control" id="confirmPasswordInput" />
                          <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary">Register</button>
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
