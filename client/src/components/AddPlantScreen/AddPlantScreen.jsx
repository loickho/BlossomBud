import Camera from "../Camera/Camera";
import './AddPlantScreen.css';

export default function AddPlantScreen () {
  function addPlant(formData) {
    const plantName = formData.get('plantName');
    alert(`Plant added`);
  }

  return (
    <div className="add-plant-screen">
      <h1>Add a new plant</h1>
      <Camera />
      <form action={addPlant}>
        <input name="plantName" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}