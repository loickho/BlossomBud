import './DiarySlider.css';
import { useState } from 'react';

export default function DiarySlider () {
  const [selectedOption, setSelectedOption] = useState('OVERVIEW');

  const handleClick = (option) => {
    setSelectedOption(option);
  }

  return (
    <div className="diary-slider">
      <button
        className={selectedOption === 'OVERVIEW' ? 'selected' : ''}
        onClick={() => handleClick('OVERVIEW')}
      >
        OVERVIEW
      </button>
      <button
        className={selectedOption === 'DIARY' ? 'selected' : ''}
        onClick={() => handleClick('DIARY')}
      >
        DIARY
      </button>
    </div>
  )
}