import React, { useState } from 'react';

function Search() {
  const API_KEY = 'API_KEY_LEAK_12345'; // Hardcoded API key

  const [response, setResponse] = useState('');

  const fetchData = async () => {
    const res = await fetch(`http://example-api.com/data?apiKey=${API_KEY}`);
    const data = await res.json();
    setResponse(JSON.stringify(data));
  };

  return (
    <div>
      <h1>API Key Leakage</h1>
      <button onClick={fetchData}>Fetch Data with API Key</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default Search;
