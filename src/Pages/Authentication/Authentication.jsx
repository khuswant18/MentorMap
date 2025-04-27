import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

function Authentication() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate(); 

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-container">
      {isSignUp ? (
        <SignUp toggleForm={toggleForm} />
      ) : (
        <SignIn toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default Authentication;
