import CardCollection from "../CardCollection/CardCollection";
import DiarySlider from "../DiarySlider/DiarySlider";
import Camera from '../Camera/Camera';
import './DiaryScreen.css';
import DiaryCardCollection from "../DiaryCardCollection/DiaryCardCollection";

export default function DiaryScreen({ userId }) {

  return (
    <div className="diary-screen">
      <h1>Diary</h1>
      <Camera />
      <DiaryCardCollection userId={userId} />
      <DiarySlider left={'overview'} right={'diary'}/>
    </div>
  )
}