import { useParams } from 'react-router-dom';
import './PlantDetailsScreen.css';
import DiarySlider from '../DiarySlider/DiarySlider';

export default function PlantDetailsScreen () {
  const { id } = useParams();
  return (
    <div className='plant-details'>
      <img className='detail-img' src="https://www.mein-schoener-garten.de/sites/default/files/styles/inline_scaled_l_16_9/public/korbmarante-aufmacher-696763350-istock.jpg?h=bfa41935&itok=2dTflD7-" />
      <h1 className='plant-name'>Calathea{id}</h1>
      <div className="info">
        <p>Temperature: 20-26ºC</p>
        <p>Humidity: 50%-70%</p>
        <p>Watering: every 6 days</p>
        <p>Sunlight: Filtered or low light conditions</p>
        <p>Fertilization: Bi-weekly during the growing season</p>
      </div>
      <DiarySlider />
    </div>
  )
}