import GardenScreen from "../components/GardenScreen/GardenScreen"
import '../App.css';

export default function GardenPage ({ userId }) {
  return (
    <div className="garden-page">
      <GardenScreen userId={userId} />
    </div>
  )
}