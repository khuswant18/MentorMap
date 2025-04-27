import React from 'react' 
import './SignIn.css'
import { NavLink } from 'react-router-dom';

function SignIn() { 
  return (
    <div className="form-container">
      <form className="form">

        <div className="logo-container">
          <h2>MentorMap</h2>
        </div>

        <h2 className="form-title">Welcome Back!</h2>
        <p className="form-subtitle">Sign in to continue your journey</p>

        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <input type="text" className="input" placeholder="Enter your Email" />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>         
        <div className="inputForm">
          <input type="password" className="input" placeholder="Enter your Password" />
        </div>


        <div className="password-check">
          <div>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <span className="span">Forgot password?</span>
        </div>

        <button className="button-submit">Sign In</button>

        <p className="p">Don't have an account? <NavLink to='signup' className="span">Sign Up</NavLink></p> 

        <p className="p line">Or With</p>

        <div className="flex-row">
  <button className="btn google">
    <img className="google-icon" src="./google.png" alt="google-icon" />
    <p className='google-text'>Sign in with Google</p>
  </button>
</div>


      </form>
    </div>
  )
}

export default SignIn
