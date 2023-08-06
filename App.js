import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Usermanage from './userManagement';
import MainPageContents from './mainPage';
import './styles.css';
import './App.css';
import RegistrationForm from './SignUp';
import SignInPage from './SignIn';
import HomePage from './homePage';

const App = () => {
  return (
    <Router>
      <div id='root'>
        <div id='header' className='align-items-center'>
          <Routes>
            {/* Display the MainPageContents and Usermanage components on the landing page */}
            <Route path='/' element={<LandingPage />} />
            <Route path='/SignIn' element={<SignInPage />} />
            <Route path='/SignUp/*' element={<RegistrationForm />} />
            {/* Redirect any manual entry of /Usermanage to the landing page */}
            <Route path='/Usermanage/*' element={<Navigate to='/' />} />
            <Route path="/homePage" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

// Create a separate component to handle the nested routes
const LandingPage = () => {
  return (
    <>
      <MainPageContents />
      <Usermanage />
    </>
  );
};

export default App;
