import CardCollection from "../CardCollection/CardCollection";
import DiarySlider from "../DiarySlider/DiarySlider";
import Camera from '../Camera/Camera';
import './DiaryScreen.css';

export default function DiaryScreen() {
  return (
    <div className="diary-screen">
      <h1>Diary</h1>
      <Camera />
      <CardCollection />
      <DiarySlider />
    </div>
  )
}