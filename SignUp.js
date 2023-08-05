// src/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './registrationForm.css';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTermsAccepted = () => {
    setTermsAccepted((prevValue) => !prevValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Perform form validation
    if (!termsAccepted) {
      setError('Please accept the terms and conditions.');
      return;
    }

    try {
      // Make API call to the backend to save user data in MongoDB
      const response = await axios.post('/api/SignUp', formData);
      console.log('User data saved:', response.data);
      // Reset form data
      setFormData({
        name: '',
        email: '',
        password: '',
      });
      // Redirect user to the confirmation page
      navigate('/Usermanage');
    } catch (error) {
      setError('Error registering user.');
      console.error('Error registering user:', error);
    }
  };

  const handleGoBack = () => {
    // Navigate back to the landing page
    navigate('/');
  };

  return (
    <div className="registration-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={handleTermsAccepted}
            required
          />
          I accept the terms and conditions.
        </label>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <button type="button" onClick={handleGoBack}>
          Back
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
