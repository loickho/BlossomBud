import { useState } from 'react';
import auth from '../../utils/auth';
import apiService from '../../ApiService';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
  username: '',
};

const Register = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
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
    const { email, password, username } = state;
    const user = { email, password, username };
    const res = await apiService.register(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      setIsAuthenticated(true);
      auth.login(() => navigate('/'));
    }
  };

  const validateForm = () => {
    return (
      !state.email || !state.password || !state.username
    );
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="username"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Register&nbsp;
        </button>
      </form>
    </section>
  );
};

export default Register;
