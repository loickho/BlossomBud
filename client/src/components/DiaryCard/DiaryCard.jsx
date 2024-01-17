export default function DiaryCard ({ image }) {
  return (
    <div className="card">
      <img className='card-img' src={image} alt='image of plant' />
    </div>
  )
}