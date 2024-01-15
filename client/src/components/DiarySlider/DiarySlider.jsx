import './DiarySlider.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DiarySlider () {
  const [selectedOption, setSelectedOption] = useState('OVERVIEW');
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
        <Link className='slider' to='/myplant/:id'>OVERVIEW</Link>
      </button>
      <button
        className={selectedOption === 'DIARY' ? 'selected' : ''}
        onClick={() => handleClick('DIARY')}
      >
        <Link className='slider' to='/myplant/:id/diary'>DIARY</Link>
      </button>
    </div>
  )
}