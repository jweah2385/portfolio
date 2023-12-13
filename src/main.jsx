
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import {
//   BrowserRouter,
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';
// import Error from './pages/Error/Error';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
// import Projects from './pages/Projects/Projects';

// import './index.css';
// import Skills from './pages/Skills/Skills.jsx';
// import React from 'react';

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

// dotenv.config();


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
);
