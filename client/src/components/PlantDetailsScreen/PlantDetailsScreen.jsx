import { useParams } from 'react-router-dom';
import './PlantDetailsScreen.css';
import DiarySlider from '../DiarySlider/DiarySlider';
import { useState } from 'react';
import Diary from '../Diary/Diary';
import Overview from '../Overview/Overview';

export default function PlantDetailsScreen ({ userId }) {
  const [selectedOption, setSelectedOption] = useState('OVERVIEW');
  const { plantId } = useParams();

  return (
    <div className='plant-details-screen'>
      {selectedOption == 'OVERVIEW' &&
        <Overview userId={userId} plantId={plantId} /> }
      {selectedOption == 'DIARY' &&
        <Diary userId={userId} plantId={plantId} />}
      <DiarySlider selectedOption={selectedOption} setSelectedOption={setSelectedOption} plantId={plantId} />
    </div>
  )
}