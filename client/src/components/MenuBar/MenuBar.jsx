import './MenuBar.css';
import { Link } from 'react-router-dom';
import { PiPottedPlantDuotone } from "react-icons/pi";
import { FaUser, FaCamera } from "react-icons/fa";

export default function MenuBar () {
  return (
    <div className="menu-bar">
      <button>
        <Link className='nav-item' to='/profile'><FaUser /></Link>
      </button>
      <button>
        <Link className='nav-item' to='/' id='home-button'><PiPottedPlantDuotone /></Link>
      </button>
      <button>
        <Link className='nav-item' to='/addPlant'><FaCamera /></Link>
      </button>
    </div>
  )
}