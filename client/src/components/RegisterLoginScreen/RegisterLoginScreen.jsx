import './RegisterLoginScreen.css'
import Register from '../Register/Register';
import Login from '../Login/Login';

// eslint-disable-next-line react/prop-types
export default function RegisterLoginScreen ({isAuthenticated, setIsAuthenticated}) {
  return (
    <div className="register-login-screen">
      <Register isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
      <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
    </div>
  )
}