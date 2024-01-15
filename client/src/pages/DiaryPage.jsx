import DiaryScreen from '../components/DiaryScreen/DiaryScreen';
import '../App.css';

export default function DiaryPage ({ userId }) {
  return (
    <div className="diary-page">
      <DiaryScreen userId={userId} />
    </div>
  )
}