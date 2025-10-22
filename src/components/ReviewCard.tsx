import Avatar from './Avatar'
import RatingStars from './RatingStars'
export default function ReviewCard({ name, text, rating }:
  { name: string; text: string; rating: number }) {
  return (
    <div className="rounded-xl border border-sea-100 bg-white p-3 shadow-soft">
      <div className="flex items-center gap-2">
        <Avatar alt={name} src={`https://i.pravatar.cc/100?u=${encodeURIComponent(name)}`} />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <RatingStars value={rating} />
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-700">{text}</p>
    </div>
  );
}
