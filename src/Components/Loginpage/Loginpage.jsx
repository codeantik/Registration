import React, { useState, useEffect } from 'react';
import './loginpage.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from 'react-google-login';

export default function Loginpage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleLogin = async (googleData) => {
    console.log(googleData)
  }

  return (
    <>
      <div className="login-page-container">
        <div className="login">
          <ToastContainer
            position="top-center"
            autoClose={false}
            theme="dark"
          />

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1430 340">
            <path
              fill="#2c5364"
              fillOpacity="0.6"
              d="M0,256L60,261.3C120,267,240,277,360,250.7C480,224,600,160,720,133.3C840,107,960,117,1080,154.7C1200,192,1320,256,1380,288L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </svg>
          <h1>Login</h1>
          <form className="login-detalis">
            <p>Email</p>
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={handleEmail}
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={handlePassword}
            />
            <span className="forgot-password">forgot password?</span>
            <span type="submit" className="login-button">
              Sign In
            </span>
            <span className="login-page-create-account">
              Not registered yet?{' '}
              <Link
                to="/register"
                style={{
                  color: 'blue',
                  paddingLeft: '4px',
                  textDecoration: 'none'
                }}
              >
                Create an account
              </Link>
            </span>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
            />
          </form>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1440 300">
            <path
              fill="#2c5364"
              fillOpacity="0.6"
              d="M0,32L48,58.7C96,85,192,139,288,181.3C384,224,480,256,576,261.3C672,267,768,245,864,197.3C960,149,1056,75,1152,69.3C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
