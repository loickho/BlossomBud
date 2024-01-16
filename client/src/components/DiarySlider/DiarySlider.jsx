import './DiarySlider.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DiarySlider ({ selectedOption, setSelectedOption, plantId }) {
  const { plantId } = useParams();

  const handleClick = (option) => {
    setSelectedOption(option);
  }

  return (
    <div className="diary-slider">
      <button
        className={selectedOption === 'OVERVIEW' ? 'selected' : ''}
        onClick={() => handleClick('OVERVIEW')}
      >
        <Link className='slider' to={`/myplant/${plantId}`}>OVERVIEW</Link>
      </button>
      <button
        className={selectedOption === 'DIARY' ? 'selected' : ''}
        onClick={() => handleClick('DIARY')}
      >
        <Link className='slider' to={`/myplant/${plantId}/diary`}>DIARY</Link>
      </button>
    </div>
  )
}