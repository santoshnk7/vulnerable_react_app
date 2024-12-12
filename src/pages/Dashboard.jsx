import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Auth from '../components/Auth';
import Profile from '../components/Profile';
import Search from '../components/Search';
import Sensitive from '../components/Sensitive';
import XssTest from '../components/XssTest';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="auth">Authentication</Link></li>
          <li><Link to="profile">Protected Profile</Link></li>
          <li><Link to="search">User Search</Link></li>
          <li><Link to="sensitive">Sensitive Data</Link></li>
          <li><Link to="xss-test">XSS Test</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="auth" element={<Auth />} />
        <Route path="profile" element={<Profile />} />
        <Route path="search" element={<Search />} />
        <Route path="sensitive" element={<Sensitive />} />
        <Route path="xss-test" element={<XssTest />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
