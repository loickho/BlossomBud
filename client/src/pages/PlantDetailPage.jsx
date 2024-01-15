import PlantDetailsScreen from "../components/PlantDetailsScreen/PlantDetailsScreen"
import '../App.css';

export default function PlantDetailsPage ({ userId }) {
  return (
    <div className="plant-details-page">
      <PlantDetailsScreen userId={userId} />
    </div>
  )
}