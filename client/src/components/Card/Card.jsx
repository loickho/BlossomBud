import './Card.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card ({ id, pictures }) {
  const [badge, setBadge] = useState(true);

  return (
    <div className='card'>
      <Link to={`/myplant/${id}`}>
        <img className='card-img' src={pictures[0]} alt={`Plant ${id}`}/>
      </Link>
      {badge && <div className="badge">3</div>}
    </div>
  )
}