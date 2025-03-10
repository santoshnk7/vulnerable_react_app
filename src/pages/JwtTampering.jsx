import React, { useState } from 'react';

function JwtTampering() {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwtToken') || '');

  const handleLogin = () => {
    const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiYWRtaW4iOnRydWV9';
    localStorage.setItem('jwtToken', fakeToken);
    setJwtToken(fakeToken);
    alert('JWT Token Stored!');
    console.log('Token: ', fakeToken)
  };

  const validateToken = () => {
    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken === jwtToken) {
      alert('Token is Valid!');
      console.log('Token: ', storedToken)
    } else {
      alert('Token is Invalid!');
    }
  };

  return (
    <div>
      <h1>JWT Token Tampering</h1>
      <button onClick={handleLogin}>Store Fake JWT Token</button>
      <button onClick={validateToken}>Validate JWT Token</button>
      <p>Stored Token: {jwtToken}</p>
    </div>
  );
}

export default JwtTampering;
