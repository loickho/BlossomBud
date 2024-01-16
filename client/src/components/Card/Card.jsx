import './Card.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../../ApiService';

export default function Card ({ id, pictures, userId, waterIn }) {
  const [badge, setBadge] = useState(waterIn);

  // updates the badge every day and sends the updated number to the database
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBadge((prevDays) => {
        const updatedBadge = Math.max(0, prevDays - 1);
        console.log(updatedBadge)
        apiService.updateWaterIn(userId, id, updatedBadge)
          .catch((error) => console.error('Error:', error));

        return updatedBadge;
      });
    }, 86400000);

    return () => clearInterval(intervalId);
  }, [userId, id]);

  return (
    <div className='card'>
      <Link to={`/myplant/${id}`}>
        <img className='card-img' src={pictures[0]} alt={`Plant ${id}`}/>
      </Link>
      {<div className="badge">{badge}</div>}
    </div>
  )
}