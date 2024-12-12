import React, { useState } from 'react';

function RealPrototypePollution() {
  const [payload, setPayload] = useState('');
  const [result, setResult] = useState('');
  const [user, setUser] = useState({
    username: 'guest',
    isAdmin: false, // Default privilege
    features: { premiumAccess: false },
  });

  // Intentionally Vulnerable Merge Function (Fixed for Exploit)
  const mergeSettings = (target, source) => {
    for (const key in source) {
      target[key] = source[key]; // Removed "hasOwnProperty" check
    }
    return target;
  };

  // Exploit Execution Simulation
  const handleExploit = () => {
    try {
      const parsedPayload = JSON.parse(payload);

      // Simulate account settings update
      const updatedUser = mergeSettings(user, parsedPayload);
      setUser(updatedUser);

      // Check if the global prototype was polluted
      setResult(
        `User Object: ${JSON.stringify(updatedUser)}\n` +
        `Prototype Check (browser console):\n` +
        `console.log(({}).isAdmin): ${(Object.prototype).isAdmin}\n` +
        `console.log(({}).features?.premiumAccess): ${(Object.prototype.features?.premiumAccess)}`
      );
    } catch (err) {
      setResult(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <h1>Prototype Pollution Exploit - Corrected</h1>

      <h2>Submit a Malicious Payload</h2>
      <textarea
        rows="5"
        cols="60"
        placeholder='Enter JSON payload (e.g., {"__proto__": {"isAdmin": true}})'
        onChange={(e) => setPayload(e.target.value)}
      />
      <br />
      <button onClick={handleExploit}>Execute Exploit</button>

      <h2>Exploit Results</h2>
      <pre>{result}</pre>

      <h2>Current User State</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <hr />

      <h2>How to Exploit Prototype Pollution</h2>
      <p>
        <b>Payload Example:</b>
        <pre>

        </pre>
      </p>

      <h3>Check the Exploit in the Browser Console</h3>
      <ul>
        <li>1. Enter a payload like:</li>
        <code></code>

        <li>2. Click <b>Execute Exploit</b></li>

        <li>3. Open the browser console and run:</li>
        <code>console.log(({}).isAdmin);</code>
        <li>Expected Output: <code>true</code></li>
      </ul>
    </div>
  );
}

export default RealPrototypePollution;
