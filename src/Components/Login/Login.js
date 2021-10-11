import React from "react";
import useAuth from "../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { SigninWithGoogle } = useAuth();
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card border-0 shadow rounded-3 my-5'>
              <div className='card-body p-4 p-sm-5'>
                <h5 className='card-title text-center mb-5 fw-light fs-5'>
                  Sign In
                </h5>
                <form>
                  <div className='form-floating mb-3'>
                    <input
                      type='email'
                      className='form-control'
                      id='floatingInput'
                      placeholder='name@example.com'
                    />
                    <label htmlFor='floatingInput'>Email address</label>
                  </div>
                  <div className='form-floating mb-3'>
                    <input
                      type='password'
                      className='form-control'
                      id='floatingPassword'
                      placeholder='Password'
                    />
                    <label htmlFor='floatingPassword'>Password</label>
                  </div>

                  <div className='form-check mb-3'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='rememberPasswordCheck'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='rememberPasswordCheck'>
                      Remember password
                    </label>
                  </div>
                  <div className='d-grid'>
                    <button
                      className='btn btn-success btn-login text-uppercase fw-bold w-50 mx-auto'
                      type='submit'>
                      Sign in
                    </button>
                  </div>
                  <hr className='my-4' />
                </form>
                <div className='d-grid mb-2'>
                  <button
                    className='btn btn-google btn-login text-uppercase fw-bold'
                    onClick={SigninWithGoogle}
                    type='submit'>
                    <i className='fab fa-google me-2'></i> Sign in with Google
                  </button>
                </div>
                <div className='d-grid'>
                  <button
                    className='btn btn-facebook btn-login text-uppercase fw-bold'
                    type='submit'>
                    <i className='fab fa-facebook-f me-2'></i> Sign in with
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
