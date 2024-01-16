import CardCollection from '../CardCollection/CardCollection';
import './GardenScreen.css';
import apiService from '../../ApiService';
import { useEffect, useState } from 'react';

export default function GardenScreen ({ userId }) {
  const [userPlants, setUserPlants] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const res = await apiService.fetchUserPlants(userId);
      if (res.error) {
        alert(`${res.message}`)
      } else {
        setUserPlants(res.garden)
      }
    }
    fetchData();
  }, [userId])


  return (
    <div id="garden">
      <h2 className='header'>My Garden</h2>
      <CardCollection userPlants={userPlants} />
    </div>
  )
}