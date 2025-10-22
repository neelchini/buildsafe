import { useParams } from 'react-router-dom'
import { mentors } from '../data'
import Avatar from '../components/Avatar'
import RatingStars from '../components/RatingStars'
import Badge from '../components/Badge'
import { currencyBDT } from '../lib/utils'
import AvailabilityCalendar from '../components/AvailabilityCalendar'
import ReviewCard from '../components/ReviewCard'
import Button from '../components/Button'
import { useState } from 'react'
import BookingDialog from '../components/BookingDialog'

export default function MentorProfile() {
  const { id } = useParams()
  const mentor = mentors.find(m => m.id === id) ?? mentors[0]
  const [open, setOpen] = useState(false)
  const [slot, setSlot] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="card p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto]">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-sea-100">
              <img src={mentor.avatar} alt={mentor.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-semibold text-sea-900">{mentor.name}</h1>
              <p className="text-sm text-gray-700">{mentor.subject}, {mentor.university}</p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <RatingStars value={mentor.rating} />
                {mentor.verified && <Badge>Verified Mentor</Badge>}
              </div>
            </div>
            <div className="hidden text-right md:block">
              <div className="text-lg font-semibold text-sea-900">{currencyBDT(mentor.price)}</div>
              <div className="text-xs text-gray-600">per session</div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="card p-4 md:col-span-1">
          <h3 className="text-sm font-semibold text-sea-900">About Me</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-800">{mentor.about}</p>
          <div className="mt-4 flex gap-2">
            <Button variant="secondary">Know more</Button>
            <Button variant="primary">Message</Button>
          </div>
        </div>

        <div className="md:col-span-1">
          <AvailabilityCalendar onBook={(s) => { setSlot(s); setOpen(true) }} />
        </div>

        <div className="card p-4 md:col-span-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-sea-900">Student Reviews ({mentor.reviews})</h3>
            <button className="pill">Read All</button>
          </div>
          <div className="mt-3 grid gap-3">
            <ReviewCard name="Aisha H." rating={5} text="Md. Karim helped me understand difficult concepts." />
            <ReviewCard name="Rajesh M." rating={5} text="My physics score improved significantly after just two sessions." />
          </div>
        </div>
      </section>

      <BookingDialog open={open} onClose={() => setOpen(false)} slot={slot} />
    </div>
  )
}
