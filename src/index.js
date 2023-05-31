import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { API_KEY } from './services/Movies.API';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App API_KEY={API_KEY} />
  </React.StrictMode>
);
