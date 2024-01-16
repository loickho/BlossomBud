import { useParams } from 'react-router-dom';
import './PlantDetailsScreen.css';
import DiarySlider from '../DiarySlider/DiarySlider';
import apiService from '../../ApiService';
import { useState, useEffect } from 'react';

export default function PlantDetailsScreen ({ userId }) {
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
  }, [])

  return (
    <div className='plant-details'>
      <img className='detail-img' src={plantData.diary && plantData.diary[0]} />
      {/* checking for plantData.plantDetails is necessary so that it doesn't try to load before fetch  */}
      <h1 className='plant-name'>{plantData.plantDetails && plantData.plantDetails.name}</h1>
      <div className="info">
        <p>Temperature: {plantData.plantDetails && plantData.plantDetails.temperature}</p>
        <p>Humidity: {plantData.plantDetails && plantData.plantDetails.humidity}</p>
        <p>Watering: every {plantData.plantDetails && plantData.plantDetails.watering} days</p>
        <p>Sunlight: {plantData.plantDetails && plantData.plantDetails.sunlight}</p>
        <p>Fertilization: {plantData.plantDetails && plantData.plantDetails.fertilization}</p>
      </div>
      <DiarySlider />
    </div>
  )
}