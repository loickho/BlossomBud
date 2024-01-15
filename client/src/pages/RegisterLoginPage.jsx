import '../App.css';
import RegisterLoginScreen from '../components/RegisterLoginScreen/RegisterLoginScreen';

// eslint-disable-next-line react/prop-types
export default function RegisterLoginPage ({ getUserId, isAuthenticated, setIsAuthenticated }) {
  return (
    <div className="register-login">
      <RegisterLoginScreen getUserId={getUserId} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
    </div>
  )
}