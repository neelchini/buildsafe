import RatingStars from './RatingStars'
import Avatar from './Avatar'
import { currencyBDT } from '../lib/utils'

export default function TherapistCard({ therapist }: { therapist: any }) {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-3">
        <Avatar src={therapist.avatar} alt={therapist.name} />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-sea-900">{therapist.name}</h3>
          <p className="text-xs text-gray-600">{therapist.degree}</p>
          <div className="mt-1"><RatingStars value={therapist.rating} /></div>
          <div className="mt-1 flex flex-wrap gap-1 text-xs text-gray-700">
            {therapist.specialties.map((s:string) => <span key={s} className="pill">{s}</span>)}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-sea-900">{currencyBDT(therapist.price)}/session</div>
          <button className="mt-2 inline-flex rounded-lg bg-sea-700 px-3 py-2 text-xs font-medium text-white hover:bg-sea-800">View Profile</button>
        </div>
      </div>
    </div>
  )
}
