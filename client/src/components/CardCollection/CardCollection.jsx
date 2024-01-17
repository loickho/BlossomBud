import Card from '../Card/Card';
import './CardCollection.css';

export default function CardCollection ({ userPlants, userId }) {
  function getRandomNumber() {
    // returns random number between 1000 and 9999
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  }
  return (
    <div className="card-collection">
      {userPlants.map((plant) => {
        const uniqueId = plant.plantid + '' + getRandomNumber();
        return <Card key={uniqueId} id={plant.plantid} pictures={plant.pictures} userId={userId} waterIn={plant.waterIn} />
      })}
    </div>
  )
}