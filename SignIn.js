import React from 'react';
import './registrationForm.css';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        // Navigate back to the landing page
        navigate('/');
    };

    const handleCreateAccountClick = () => {
        // Navigate to the SignUp route
        navigate('/SignUp');
    };

    return (
        <div className="signin-container">
            <div className="signin-card">
                <h2>Sign In</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit" className="signup-button">Sign In</button>
                </form>
                <button type="button" onClick={handleGoBack}>
                    Back
                </button>
            </div>
            {/* Use a button element and add an onClick event handler */}
            <button className="topright" onClick={handleCreateAccountClick}>
                Create An Account
            </button>
        </div>
    );
};

export default SignInPage;
