import { useNavigate } from 'react-router-dom';
import auth from '../../utils/auth';
import apiService from '../../ApiService';
import './ProfileScreen.css'

export default function ProfileScreen ({ setIsAuthenticated }) {

  let navigate = useNavigate();

  const handleClick = () => {
    apiService.logout();
    handleAuth();
  };

  const handleAuth = () => {
    setIsAuthenticated(false);
    auth.logout(() => navigate('/login'));
  };

  return (
    <div className="profile-screen">
      <button className='logout-button button' onClick={handleClick}>
        Log out
      </button>
    </div>

  )
}