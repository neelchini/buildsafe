import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import App from './App'
import Home from './pages/Home'
import MentorProfile from './pages/MentorProfile'
import Therapists from './pages/Therapists'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/mentors/:id', element: <MentorProfile /> },
      { path: '/therapists', element: <Therapists /> },
    ],
  },
])

// 👇 Mount React to the DOM (this part was missing)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
