import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Get the current URL path (everything after "/")
    const path = window.location.pathname === '/' ? '' : window.location.pathname;

    // Fetch from backend based on the URL path
    fetch(`http://localhost:5000${path}`)
      .then(response => response.text())
      .then(data => setMessage(data))  // Set the fetched data as the message
      .catch(error => setMessage('Error fetching data'));  // Handle errors
  }, []);  // Empty array ensures this runs only once, when the component mounts

  return (
    <div className="App">
      <h1>{message}</h1>  {/* Display the fetched message */}
    </div>
  );
}

export default App;

