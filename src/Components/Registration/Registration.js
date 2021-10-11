import React from "react";
import useAuth from "../Hooks/useAuth";
import "./Registration.css";

const Registration = () => {
  const { SigninWithGoogle, user } = useAuth();
  console.log(user);
  return (
    <div className='col-md-4 col-md-offset-4 mx-auto' id='login'>
      <section id='inner-wrapper' className='login mx-auto shadow rounded-3'>
        <article>
          <h5 className='card-title text-center mb-5 fw-light fs-5'>
            Create a new account
          </h5>
          <form>
            <div className='form-group'>
              <div className='input-group'>
                <span className='input-group-addon'>
                  <i className='fa fa-user'> </i>
                </span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-group'>
                <span className='input-group-addon'>
                  <i className='fa fa-envelope'> </i>
                </span>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email Address'
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-group'>
                <span className='input-group-addon'>
                  <i className='fa fa-key'> </i>
                </span>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-group'>
                <span className='input-group-addon'>
                  <i className='fa fa-key'> </i>
                </span>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Confirm Password'
                />
              </div>
            </div>
            <div className='d-grid'>
              <button
                className='btn btn-success btn-login text-uppercase fw-bold w-50 mx-auto'
                type='submit'>
                Sign Up
              </button>
            </div>
            <hr className='my-4' />
          </form>
          <div className='d-grid mb-2'>
            <button
              className='btn btn-google btn-login text-uppercase fw-bold'
              type='submit'
              onClick={SigninWithGoogle}>
              <i className='fab fa-google me-2 '></i> Sign up with Google
            </button>
          </div>
          <div className='d-grid'>
            <button
              className='btn btn-facebook btn-login text-uppercase fw-bold'
              type='submit'>
              <i className='fab fa-facebook-f me-2'></i> Sign up with Facebook
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Registration;
