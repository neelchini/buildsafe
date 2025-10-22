export default function RatingStars({ value, className = '' }: { value: number; className?: string }) {
  const rounded = Math.round(value);
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`Rating ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i < rounded ? 'fill-amber-400' : 'fill-gray-200'}`}>
          <path d="M10 15.27l5.18 3.05-1.64-5.81L18 8.24l-6-.22L10 2.5 8 8.02l-6 .22 4.46 4.27L4.82 18.3 10 15.27z" />
        </svg>
      ))}
      <span className="ml-1 text-xs text-gray-600">{value.toFixed(1)}</span>
    </div>
  );
}
