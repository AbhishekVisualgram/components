import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Usermanage = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    // Navigate to the SignIn route
    navigate('/SignIn');
  };

  return (
    <div>
      {/* Use a button element and add an onClick event handler */}
      <button className="topright" onClick={handleSignInClick}>
        Sign In
      </button>
    </div>
  );
};

export default Usermanage;
