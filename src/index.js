// Import the necessary React and ReactDOM/client libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the App component from the './App' file
import App from './App';

// Create a root node for the component hierarchy
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root node, using the Strict mode of React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
