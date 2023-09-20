import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import Home from '@/views/Home';
import Error from '@/views/ErrorPage';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
      errorElement: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
