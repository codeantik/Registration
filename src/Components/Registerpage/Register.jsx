import React, { useState, useEffect } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, useToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleUsername = event => {
    setUsername(event.target.value);
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleSignup = async () => {
    try {
      const registerUserData = {
        username: username,
        password: password,
        email: email
      };

      const registerRequest = await axios
        .post(
          'https://magnifionode-api.herokuapp.com/users/register',
          registerUserData
        )
        .then(data => {
          return data;
        })
        .catch((err) =>{
          
          toast.error(err.response.data.message)

        })

      const { message } = registerRequest.data;

      if (message) {
        toast.success(message);
      }
    } catch (error) {
        toast.error(error)
    }
  };

  return (
    <>
      <div className="register-page-container">
        <div className="register">
          <ToastContainer position="top-center" autoClose="5000" theme="dark" />

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1430 340">
            <path
              fill="#2c5364"
              fill-opacity="0.6"
              d="M0,256L60,261.3C120,267,240,277,360,250.7C480,224,600,160,720,133.3C840,107,960,117,1080,154.7C1200,192,1320,256,1380,288L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </svg>
          <h1>Register</h1>
          <form className="register-detalis">
            <p>Username</p>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={handleUsername}
            />
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
            <span
              type="submit"
              className="register-button"
              onClick={handleSignup}
            >
              Sign Up
            </span>
            <span className="register-page-create-account">
              already an account?
              <Link
                to="/login"
                style={{
                  color: 'blue',
                  paddingLeft: '4px',
                  textDecoration: 'none'
                }}
              >
                Login
              </Link>
            </span>
          </form>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1440 300">
            <path
              fill="#2c5364"
              fill-opacity="0.6"
              d="M0,32L48,58.7C96,85,192,139,288,181.3C384,224,480,256,576,261.3C672,267,768,245,864,197.3C960,149,1056,75,1152,69.3C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
