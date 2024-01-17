import DiaryCard from "../DiaryCard/DiaryCard";

export default function DiaryCardCollection ({ plantData }) {
  // TODO: CSS
  const diaryArray = plantData.diary;
  return (
    <div className="diary-card-collection">
      {diaryArray.map(image => {
        return <DiaryCard image={image} />
      })}
    </div>
  )
}