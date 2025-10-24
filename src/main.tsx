// BEFORE:
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// AFTER:
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
      { path: '/therapists', element: <Therapists /> }
    ]
  }
])

export default function Root() {
  return <RouterProvider router={router} />
}
