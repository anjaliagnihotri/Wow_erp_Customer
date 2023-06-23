import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const userlogin = async () => {
    const { email, password } = user;
    if (email && password) {
      try {
        const res = await axios.post('http://localhost:8009/customerlogIn', user);
        console.log(res, 'login response');
        console.log(res.data.result.token);
        localStorage.setItem('user', res.data.result.token);
        localStorage.setItem('user-data', res.data.result.userValid._id);
        let auth = localStorage.getItem('user');
        if (auth) {
          navigate('/dashb');
          console.log('Test...');
        }
      } catch (err) {
        console.log(err);
        alert(err.response.data.message);
      }
    } else {
      alert('Invalid input');
    }
  };

  return (
    <>
      <div id='logflex'>
        <div className='login'>
          <h2>Login</h2>
          <input type='text' name='email' value={user.email} onChange={handleChange} placeholder='Enter your Email' />
          <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Enter your Password' />
          <div className='button' onClick={() => userlogin()}>
            Login
          </div>
          <div>or</div>
          <div className='button' onClick={() => navigate('/register')}>
            Register
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
