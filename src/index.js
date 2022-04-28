import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
// import ('./index.css');
import ('./App.css');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

