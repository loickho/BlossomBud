import Camera from "../Camera/Camera";
import './AddPlantScreen.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPlantScreen ({ userId }) {
  const navigate = useNavigate();
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
    navigate('/mygarden');
  }

  return (
    <div className="add-plant-screen">
      <hr />
      <h2 className="header">Add a new plant</h2>
      <Camera capturedImage={capturedImage} setCapturedImage={setCapturedImage}/>
      <form onSubmit={handleSubmit}>
        <div className="question-section">
          <p className="questions">What kind of plant do you have?</p>
          <select name="plantName">
            {plants.map(plant => {
              return <option key={plant._id} value={`${plant._id}`}>{plant.name}</option>
            })}
          </select>
        </div>
        <div className="question-section">
          <p className="questions">How many days ago did you last water your plant?</p>
          <select name="daysSinceWatering">
            {Array.from({ length: 12 }, (_,i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </div>
        {/* TODO: make button component */}
        <button className="submit-button button" type="submit">Add Plant</button>
      </form>
    </div>
  )
}