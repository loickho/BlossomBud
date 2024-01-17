
import { useState } from 'react';
import auth from '../../utils/auth';
import apiService from '../../ApiService';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const initialState = {
  email: '',
  password: '',
};

const Login = ({ getUserId, setIsAuthenticated }) => {
  let navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    const user = { email, password };
    const res = await apiService.login(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      setIsAuthenticated(true);
      auth.login(() => navigate('/'));
    }
    getUserId();
  };

  const validateForm = () => {
    return !state.email || !state.password;
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          name="email"
          autoComplete="on"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          autoComplete="on"
          value={state.password}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
