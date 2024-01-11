import './MenuBar.css';
import { Link } from 'react-router-dom';

export default function MenuBar () {
  return (
    <div className="menu-bar">
      <button>
        <Link to='/account'>Account</Link>
      </button>
      <button>
        <Link to='/'>Home</Link>
      </button>
      <button>
        <Link to='/addPlant'>Add</Link>
      </button>
    </div>
  )
}