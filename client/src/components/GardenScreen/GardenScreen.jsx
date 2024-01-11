import CardCollection from '../CardCollection/CardCollection';
import MenuBar from '../MenuBar/MenuBar';
import './GardenScreen.css';

export default function GardenScreen () {
  return (
    <div id="garden">
      <h1>hello from gardenScreen</h1>
      <CardCollection />
      <MenuBar />
    </div>
  )
}