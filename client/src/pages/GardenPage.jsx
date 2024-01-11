import GardenScreen from "../components/GardenScreen/GardenScreen"
import MenuBar from '../components/MenuBar/MenuBar';
import '../App.css';
import Header from "../components/Header/Header";

export default function GardenPage () {
  return (
    <div className="garden-page">
      <Header />
      <GardenScreen />
      <MenuBar className="menu-bar"/>
    </div>
  )
}