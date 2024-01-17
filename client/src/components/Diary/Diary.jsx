import Camera from '../Camera/Camera';
import './Diary.css';
import DiaryCardCollection from "../DiaryCardCollection/DiaryCardCollection";

export default function Diary({ userId }) {

  return (
    <div className="diary">
      <Camera />
      <DiaryCardCollection userId={userId} />
    </div>
  )
}