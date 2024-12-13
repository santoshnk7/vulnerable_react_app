import React, { useState } from 'react';
import Config from '../config';
import { useNavigate } from 'react-router-dom';

function LoginSession() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    if (username === Config.USERNAME && password === Config.PASSWORD) {
      alert('Login Successful!');
      localStorage.setItem('authToken', Config.JWT_SECRET); // Insecure storage
      navigate('/profile');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default LoginSession;
