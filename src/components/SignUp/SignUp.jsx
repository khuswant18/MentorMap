import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="form-container">
      <form className="form">
        
        <div className="logo-container">
          <h2>MentorMap</h2>
        </div>

        <p className="form-title">Create an account</p>
        <p className="form-subtitle">Get started with us today!</p>

        <div className="flex-column">
          <label htmlFor="name">Name</label>
          <div className="inputForm">
            <input type="text" id="name" className="input" placeholder="Enter your name" required />
          </div>
        </div>
 
        <div className="flex-column">
          <label htmlFor="email">Email</label>
          <div className="inputForm">
            <input type="email" id="email" className="input" placeholder="Enter your email" required />
          </div>
        </div>

        <div className="flex-column">
          <label htmlFor="password">Password</label>
          <div className="inputForm">
            <input type="password" id="password" className="input" placeholder="Enter password" required />
          </div>
        </div>

        <div className="flex-column">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="inputForm">
            <input type="password" id="confirm-password" className="input" placeholder="Confirm password" required />
          </div>
        </div>

        <div className="terms-check">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            I agree to the <span className="span">Terms & Conditions</span>
          </label>
        </div>

        <button type="submit" className="button-submit">Sign Up</button>

        <p className="p">
          Already have an account? <span className="span">Log In</span>
        </p>

        <p className="line"></p>

        <div className="flex-row">
          <button type="button" className="btn">
            <img
              src="./google.png" 
              alt="Google"
              className="google-icon"
            />
            Sign up with Google
          </button>
        </div>

      </form>
    </div>
  );
}

export default SignUp;
