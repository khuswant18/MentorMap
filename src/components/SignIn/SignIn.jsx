import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function SignIn({ toggleForm }) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const SigninUser = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Check if email is verified
        if (!auth.currentUser.emailVerified) {
          setError('Please verify your email before logging in.');
          return;
        }
        setError('');
        navigate('/'); // Redirect to home or dashboard page
      })
      .catch((err) => {
        setError('Error: ' + err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log('Google Sign-In successful:', user);
        navigate('/'); // Redirect to home or dashboard page
      })
      .catch((error) => {
        setError('Error: ' + error.message);
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={SigninUser}>
        <div className="logo-container">
          <h2>MentorMap</h2>
        </div>

        <h2 className="form-title">Welcome Back!</h2>
        <p className="form-subtitle">Sign in to continue your journey</p>

        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <input
            type="email"
            className="input"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <input
            type="password"
            className="input"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="button-submit">
          Sign In
        </button>

        <p className="p">
          Don't have an account?{' '}
          <span className="span" onClick={toggleForm}>
            Sign Up
          </span>
        </p>

        <p className="p line">Or With</p>

        <div className="flex-row">
          <button type="button" className="btn google" onClick={handleGoogleSignIn}>
            <img className="google-icon" src="./google.png" alt="google-icon" />
            <p className="google-text">Sign in with Google</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
