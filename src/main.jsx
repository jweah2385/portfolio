
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, BrowserRouter } from 'react-router-dom';
import dotenv from 'dotenv'; // Import dotenv at the beginning

import App from './App.jsx';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
);
