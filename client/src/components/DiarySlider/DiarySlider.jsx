import './DiarySlider.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function DiarySlider ({ selectedOption, setSelectedOption }) {
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
        {/* TODO: set fixed position on screen for slider (so it doesnt bounce around screen depending on amount of cards in diary) */}
        {/* TODO: make slider actually slide instead of bounce */}
        <Link className='slider' to={`/myplant/${plantId}`}>DIARY</Link>
      </button>
    </div>
  )
}