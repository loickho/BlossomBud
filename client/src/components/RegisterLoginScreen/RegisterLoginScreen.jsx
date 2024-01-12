import './RegisterLoginScreen.css'
import Register from '../Register/Register';
import Login from '../Login/Login';

export default function RegisterLoginScreen () {
  return (
    <div className="register-login-screen">
      <Register />
      <Login />
    </div>
  )
}