import Card from '../Card/Card';
import './CardCollection.css';

export default function CardCollection ({ userPlants, userId }) {
  const timestamp = Date.now();
  return (
    <div id="card-collection">
      {userPlants.map((plant) => {
        // TODO: make each key unique
        return <Card key={plant.plantid} id={plant.plantid} pictures={plant.pictures} userId={userId} waterIn={plant.waterIn} />
      })}
    </div>
  )
}