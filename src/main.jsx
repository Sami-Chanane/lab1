import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

//this comment was added in dev-1 to test the "push on main.jsx in dev-1" event

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
