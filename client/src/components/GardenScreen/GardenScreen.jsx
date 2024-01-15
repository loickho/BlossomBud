import CardCollection from '../CardCollection/CardCollection';
import './GardenScreen.css';
import { useEffect, useState } from 'react';

export default function GardenScreen ({ userId }) {
  const [userPlants, setUserPlants] = useState([]);

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch(`http://localhost:3000/mygarden/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUserPlants(data.garden);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId])

  return (
    <div id="garden">
      <h3>My Garden</h3>
      <CardCollection userPlants={userPlants} />
    </div>
  )
}