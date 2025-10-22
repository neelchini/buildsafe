export default function Avatar({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="relative h-16 w-16 overflow-hidden rounded-full bg-sea-100">
      {src ? <img src={src} alt={alt} className="h-full w-full object-cover" /> : null}
    </div>
  );
}
