import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MentorSection from './Pages/MentorSection/MentorSection';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Layout from './Layout';
import ExploreColleges from './Pages/ExploreColleges/ExploreColleges';
import Authentication from './Pages/Authentication/Authentication';
import Profile from './components/Profile/Profile';
import Error from './Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement:<Error/>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/auth',
        element: <Authentication />,
      },
      {
        path: '/explorecolleges', 
        element: <ExploreColleges />,
      }, 
      {
        path:"/profile/:mentorId", 
        element:<Profile/>
      },
      {
        path: '/findmentor',  
        element: <MentorSection />,
      },
      {
        path: '/about',  
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
