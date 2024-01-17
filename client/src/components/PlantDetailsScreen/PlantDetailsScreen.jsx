import { useParams } from 'react-router-dom';
import './PlantDetailsScreen.css';
import DiarySlider from '../DiarySlider/DiarySlider';
import { useState, useEffect } from 'react';
import apiService from '../../ApiService';
import Diary from '../Diary/Diary';
import Overview from '../Overview/Overview';

export default function PlantDetailsScreen ({ userId }) {
  const [selectedOption, setSelectedOption] = useState('OVERVIEW');
  const [plantData, setPlantData] = useState({});
  const { plantId } = useParams();

  useEffect(() => {
    async function fetchData () {
      const res = await apiService.fetchPlantDetails(userId, plantId);
      if (res.error) {
        alert(`${res.message}`)
      } else {
        setPlantData(res)
      }
    }
    fetchData();
  }, [userId])

  return (
    <div className='plant-details-screen'>
      {selectedOption == 'OVERVIEW' &&
        <Overview plantData={plantData} /> }
      {selectedOption == 'DIARY' &&
        <Diary plantData={plantData} />}
      <DiarySlider selectedOption={selectedOption} setSelectedOption={setSelectedOption} plantId={plantId} />
    </div>
  )
}