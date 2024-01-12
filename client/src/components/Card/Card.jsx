import './Card.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card () {
  const [badge, setBadge] = useState(true);

  return (
    <div className='card'>
      <Link to='/myplant/:id'>
        <img className='card-img' src="https://www.mein-schoener-garten.de/sites/default/files/styles/inline_scaled_l_16_9/public/korbmarante-aufmacher-696763350-istock.jpg?h=bfa41935&itok=2dTflD7-" />
      </Link>
      {badge && <div className="badge">3</div>}
    </div>
  )
}