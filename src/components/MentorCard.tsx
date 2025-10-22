import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import RatingStars from './RatingStars'
import Badge from './Badge'
import { currencyBDT } from '../lib/utils'

export default function MentorCard({ mentor }: { mentor: any }) {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-3">
        <Avatar src={mentor.avatar} alt={mentor.name} />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-sea-900">{mentor.name}</h3>
          <p className="text-xs text-gray-600">{mentor.university} • {mentor.subject}</p>
          <div className="mt-1 flex items-center gap-2">
            <RatingStars value={mentor.rating} />
            {mentor.verified && <Badge>Verified Mentor</Badge>}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-sea-900">{currencyBDT(mentor.price)}/session</div>
          <Link to={`/mentors/${mentor.id}`} className="mt-2 inline-flex rounded-lg bg-sea-700 px-3 py-2 text-xs font-medium text-white hover:bg-sea-800">View Profile</Link>
        </div>
      </div>
    </div>
  )
}
