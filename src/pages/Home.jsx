import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Vulnerable App</h1>
      <li><Link to="/dashboard">Go to Dashboard</Link></li>
      <li><Link to="/xss">Go to xss</Link></li>
      <li><Link to="/xssall">Go to xssall</Link></li>
      <li><Link to="/redirect">Go to openredirect</Link></li>
      <li><Link to="/protopol">Go to PrototypePollution</Link></li>
    </div>
  );
}

export default Home;
