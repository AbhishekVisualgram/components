import React from 'react';
import './registrationForm.css';
import { useNavigate } from 'react-router-dom';


const SignInPage = () => {
    const navigate = useNavigate();
    
    const handleGoBack = () => {
        navigate('/');
    };
    
    const handleLoadHomePage = () => {
        navigate('/HomePage');
    };

    const handleCreateAccountClick = () => {
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
                    <button type="submit" className="signup-button" onClick={handleLoadHomePage}>
                        Sign In
                    </button>
                </form>
                <button type="button" onClick={handleGoBack}>
                    Back
                </button>
            </div>
            <button className="topright" onClick={handleCreateAccountClick}>
                Create An Account
            </button>
        </div>
    );
};

export default SignInPage;
