import CardCollection from "../CardCollection/CardCollection";
import DiarySlider from "../DiarySlider/DiarySlider";
import Camera from '../Camera/Camera';
import './DiaryScreen.css';

export default function DiaryScreen({ userId }) {
  return (
    <div className="diary-screen">
      <h1>Diary</h1>
      <Camera />
      <CardCollection userId={userId}/>
      <DiarySlider left={'overview'} right={'diary'}/>
    </div>
  )
}