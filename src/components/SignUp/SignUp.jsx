import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from 'firebase/auth';
import { app } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
 
function SignUp({ toggleForm }) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password) 
      .then((userCredential) => {
        sendEmailVerification(userCredential.user)
          .then(() => {
            alert('Registration successful! Please check your email for verification.');
            setError('');
            navigate('/auth');  
          })
          .catch((err) => {
            setError('Error sending verification email: ' + err.message);
          });
      })
      .catch((err) => {
        setError('Error: ' + err.message);
      });
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log('Google sign-in success', result);
        navigate('/'); 
      })
      .catch((err) => {
        setError('Google sign-up failed: ' + err.message);
      });
  }; 

  return (
    <div className="form-container">
      <form className="form" onSubmit={createUser}>
        <div className="logo-container">
          <h2>MentorMap</h2>
        </div>

        <p className="form-title">Create an account</p>
        <p className="form-subtitle">Get started with us today!</p>

        <div className="flex-column">
          <label htmlFor="email">Email</label>
          <div className="inputForm">
            <input
              type="email"
              id="email"
              className="input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex-column">
          <label htmlFor="password">Password</label>
          <div className="inputForm">
            <input
              type="password"
              id="password"
              className="input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex-column">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="inputForm">
            <input
              type="password"
              id="confirm-password"
              className="input"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="terms-check">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            I agree to the <span className="span">Terms & Conditions</span>
          </label>
        </div>

        <button type="submit" className="button-submit">
          Sign Up
        </button>

        <p className="p">
          Already have an account?{' '}
          <span className="span" onClick={toggleForm}>
            Log In
          </span>
        </p>

        <p className="p line">Or With</p>

        <div className="flex-row">
          <button type="button" className="btn" onClick={signupWithGoogle}>
            <img src="./google.png" alt="Google" className="google-icon" />
            Sign up with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
