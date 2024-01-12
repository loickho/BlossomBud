/* eslint-disable react/prop-types */
// import { useState } from "react";
// export default function Login () {

//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div>
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// }



import { useState } from 'react';
import auth from '../utils/auth';
import apiService from '../../ApiService';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const Login = ({ setIsAuthenticated }) => {
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
  };

  const validateForm = () => {
    return !state.email || !state.password;
  };

  return (
    <section>
      <h2>Login</h2>
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
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Login&nbsp;
        </button>
      </form>
    </section>
  );
};

export default Login;
