import React, { useState } from 'react';
import Config from '../config';

function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    // Using hardcoded data from config.js
    if (
      username === Config.USERNAME &&
      password === Config.PASSWORD
    ) {
      alert('Login Successful!');
      localStorage.setItem('authToken', Config.JWT_SECRET); // Storing JWT insecurely
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
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Auth;
