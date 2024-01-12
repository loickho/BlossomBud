import './RegisterLoginSlider.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterLoginSlider ({ selectedOption, setSelectedOption }) {
  const handleClick = (option) => {
    setSelectedOption(option);
  }

  return (
    <div className="register-login-slider">
      <button
        className={selectedOption === 'REGISTER' ? 'selected' : ''}
        onClick={() => handleClick('REGISTER')}
      >
        <Link className='slider' to='/register'>REGISTER</Link>
      </button>
      <button
        className={selectedOption === 'LOGIN' ? 'selected' : ''}
        onClick={() => handleClick('LOGIN')}
      >
        <Link className='slider' to='/login'>LOGIN</Link>
      </button>
    </div>
  )
}