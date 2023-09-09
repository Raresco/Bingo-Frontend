import React from 'react';
import NavBar from '../components/NavBar';
import { Nav } from 'react-bootstrap';

function LoginPage() {
        return (
      <div>
      <NavBar /> {/* Render the NavBar component */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">Login Form</h2>
            <div className="card my-5">
              <form className="card-body p-lg-5 bg-light">
                <div className="text-center">
                  <img
                    src="https://cdn.vox-cdn.com/thumbor/2NGRhhBaWMr8_uOQzuWmJK22gyA=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9182433/NancyMeyersBingo_Final.jpg"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    placeholder="User Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-5 mb-5 w-100">
                    Login
                  </button>
                </div>
                <div className="form-text text-center mb-5">
                  Not Registered?{' '}
                  <a href="#" className="text-dark fw-bold">
                    Create an Account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;