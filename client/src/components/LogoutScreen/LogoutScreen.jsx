import { useNavigate } from 'react-router-dom';
import auth from '../../utils/auth';
import apiService from '../../ApiService';
import './LogoutScreen.css'

export default function LogoutScreen ({ setIsAuthenticated }) {

  let navigate = useNavigate();

  const handleClick = () => {
    console.log('clicked')
    apiService.logout();
    handleAuth();
  };

  const handleAuth = () => {
    setIsAuthenticated(false);
    auth.logout(() => navigate('/login'));
  };

  return (
    <button className='logout-button' onClick={handleClick}>
      Log out
    </button>
  )
}