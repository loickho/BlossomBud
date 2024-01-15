import Camera from "../Camera/Camera";
import './AddPlantScreen.css';
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function AddPlantScreen ({ userId }) {
  const [plants, setPlants] = useState([]);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch('http://localhost:3000/getall');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])

  async function handleSubmit (event) {
    event.preventDefault();
    const selectedPlant = event.target.elements.plantName.value;
    const response = await fetch(`http://localhost:3000/${userId}/addUserPlant`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: userId, plantid: selectedPlant, pictures: [capturedImage] })
    });
    TODO: // make this navigate to the newly added plant's screen
    <Navigate to="/mygarden" />
  }

  return (
    <div className="add-plant-screen">
      <h1>Add a new plant</h1>
      <Camera capturedImage={capturedImage} setCapturedImage={setCapturedImage}/>
      <form onSubmit={handleSubmit}>
      <select name="plantName">
        {plants.map(plant => {
          return <option key={plant._id} value={`${plant._id}`}>{plant.name}</option>
        })}
      </select>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}