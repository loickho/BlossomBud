import './RegisterLoginScreen.css'
import Register from '../Register/Register';
import Login from '../Login/Login';
import RegisterLoginSlider from '../RegisterLoginSlider/RegisterLoginSlider';
import { useState } from 'react';

export default function RegisterLoginScreen ({ getUserId, isAuthenticated, setIsAuthenticated }) {
  const [selectedOption, setSelectedOption] = useState('REGISTER');

  return (
    <div className="register-login-screen">
      <RegisterLoginSlider selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      {selectedOption == 'REGISTER' &&
        <Register isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}
      {selectedOption == 'LOGIN' &&
        <Login getUserId={getUserId} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}
    </div>
  )
}