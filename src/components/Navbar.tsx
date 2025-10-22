import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-sea-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-sea-700 text-white grid place-items-center font-bold">S</div>
          <span className="text-lg font-semibold text-sea-900">SAHARA</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-sea-900 font-medium' : 'text-gray-600 hover:text-sea-800'}>Find a Mentor</NavLink>
          <NavLink to="/therapists" className={({isActive}) => isActive ? 'text-sea-900 font-medium' : 'text-gray-600 hover:text-sea-800'}>Talk to a Therapist</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <button className="btn-secondary">Log in</button>
          <button className="btn-primary">Sign up</button>
        </div>
      </div>
    </header>
  )
}
