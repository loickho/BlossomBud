import Card from '../Card/Card';
import './CardCollection.css';

export default function CardCollection ({ userPlants, userId }) {
  function getRandomNumber() {
    // returns random number between 1000 and 9999
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  }

  return (
    <div className="card-collection">
      { userPlants ? userPlants.map((plant) => {
        const uniqueId = plant.plantid + '' + getRandomNumber();
        return <Card key={uniqueId} id={plant.plantid} pictures={plant.pictures} userId={userId} waterIn={plant.waterIn} />
      }) : (
        <div className="first-plant-container">
          <h2>Add your first plant by tapping the camera icon!</h2>
        </div>
      )}
    </div>
  )
}