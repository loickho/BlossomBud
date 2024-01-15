import Card from '../Card/Card';
import './CardCollection.css';

export default function CardCollection ({ userPlants, userId }) {
  return (
    <div id="card-collection">
      {userPlants.map((plant) => {
        return <Card key={plant.plantid} id={plant.plantid} pictures={plant.pictures} userId={userId}/>
      })}
    </div>
  )
}