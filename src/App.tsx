import { Outlet, Link } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-6">
        <Outlet />
      </main>
      <footer className="mt-20 border-t border-sea-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Sahara</p>
          <nav className="flex gap-6">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
