import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Component/Root/Root.jsx';
import Home from './Component/Root/Home/Home.jsx';
import AppliedJobs from './Component/Root/AppliedJobs/AppliedJobs.jsx';
import ErorPage from './Component/Root/ErorPage/ErorPage.jsx';
import JobDetails from './Component/JobDetails/JobDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErorPage></ErorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ()=>fetch('../jobs.json')
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
