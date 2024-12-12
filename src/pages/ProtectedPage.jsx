// src/components/ProtectedPage.js

import React from 'react';
import Config from '../config';

function ProtectedPage() {
  return (
    <div>
      <h2>Protected Page (No Session Control)</h2>
      <p>
        This page should be protected, but there's **no session control** in
        place. Anyone can access this page by navigating to
        <code> /dashboard/protected </code> directly.
      </p>

      <h3>Sensitive Data</h3>
      <ul>
        <li>API Key: {Config.API_KEY}</li>
        <li>Database Username: {Config.USERNAME}</li>
        <li>Database Password: {Config.PASSWORD}</li>
        <li>JWT Secret: {Config.JWT_SECRET}</li>
        <li>Support Email: {Config.SUPPORT_EMAIL}</li>
      </ul>
    </div>
  );
}

export default ProtectedPage;
