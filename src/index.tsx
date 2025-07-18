
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Contact from './pages/Contact';
import App from './App';
import Projects from './pages/Projects';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Projects />,
    // children: [
    //   // {
    //   //   index: true,
    //   //   element: <Home />,
    //   // },
    //   {
    //     // path: 'projects',
    //     index: true,
    //     element: <Projects />,
    //   },
    //   {
    //     path: 'contact',
    //     element: <Contact />,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
);

reportWebVitals();
