import CardCollection from "../CardCollection/CardCollection";
import DiarySlider from "../DiarySlider/DiarySlider";
import './DiaryScreen.css';

export default function DiaryScreen() {
  return (
    <div className="diary-screen">
      <h1>Diary</h1>
      <CardCollection />
      <DiarySlider />
    </div>
  )
}