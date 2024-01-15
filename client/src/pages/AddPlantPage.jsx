import AddPlantScreen from "../components/AddPlantScreen/AddPlantScreen";

export default function AddPlantPage ({ userId }) {
  return (
    <div className="add-plant-page">
      <AddPlantScreen userId={userId}/>
    </div>
  )
}