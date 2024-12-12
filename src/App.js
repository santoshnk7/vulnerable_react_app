import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import XssComplex from './pages/Xss';
import XssAllExamples from './pages/XssAll';
import PrototypePollution from './pages/ProtoPollution';
import OpenRedirect from './pages/OpenRedirect';
import Login from './pages/Login';
import Profile from './pages/Profile';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/xss" element={<XssComplex />} />
          <Route path="/xssall" element={<XssAllExamples />} />
          <Route path="/protopol" element={<PrototypePollution />} />
          <Route path="/redirect" element={<OpenRedirect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
