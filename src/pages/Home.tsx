import { Link } from 'react-router-dom'
import MentorCard from '../components/MentorCard'
import { mentors, articles, nextSession } from '../data'

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <section className="card overflow-hidden">
        <div className="bg-gradient-to-r from-sea-700 to-sea-600 px-6 py-10 text-white">
          <p className="text-sm opacity-90">Welcome, Nazz Hassan!</p>
          <h1 className="mt-1 text-2xl font-semibold">Your journey to success starts here.</h1>
          <p className="mt-1 text-sm opacity-90">How can we help today?</p>
          <div className="mt-4 flex gap-3">
            <Link to="/" className="btn bg-white text-sea-800 hover:bg-sea-50">Find a Peer Mentor</Link>
            <Link to="/therapists" className="btn-primary">Talk to a Therapist</Link>
          </div>
        </div>
      </section>

      {/* Cards row */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="card p-4">
          <p className="text-sm font-semibold text-sea-900">Your Next Session</p>
          <div className="mt-3 rounded-lg bg-sea-50 p-3 text-sm text-sea-900">
            <p>{nextSession.date} • {nextSession.time}</p>
            <p className="mt-1">with <strong>{nextSession.with}</strong></p>
          </div>
          <button className="mt-4 btn-secondary">Reschedule</button>
          <div className="mt-6">
            <p className="text-sm font-semibold text-sea-900">Quick Resources</p>
            <ul className="mt-2 list-disc pl-4 text-sm text-gray-700">
              <li>Study tips</li>
              <li>Mental health articles</li>
            </ul>
          </div>
        </div>

        <div className="card p-4 md:col-span-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-sea-900">Recommended Mentors</p>
            <Link to="/" className="text-sm text-sea-700 hover:underline">See all</Link>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {mentors.map(m => <MentorCard key={m.id} mentor={m} />)}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="card p-4 md:col-span-2">
          <p className="text-sm font-semibold text-sea-900">Community & Activity Feed</p>
          <div className="mt-3 grid gap-3">
            {articles.map(a => (
              <div key={a.id} className="rounded-lg border border-sea-100 bg-white p-3 text-sm hover:bg-sea-50">
                <p className="font-medium">{a.title}</p>
                <p className="text-xs text-gray-600">{new Date(a.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-4">
          <p className="text-sm font-semibold text-sea-900">Suggestions</p>
          <p className="mt-2 text-sm text-gray-700">See mentors with better time flexibility?</p>
          <Link to="/" className="mt-3 inline-flex rounded-lg bg-sea-700 px-3 py-2 text-xs font-medium text-white hover:bg-sea-800">View Profiles</Link>
        </div>
      </section>
    </div>
  )
}
