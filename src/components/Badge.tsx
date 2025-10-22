import { ReactNode } from 'react'
export default function Badge({ children, color = 'sea' }: { children: ReactNode; color?: 'sea' | 'gray' }) {
  const base = color === 'sea' ? 'bg-sea-100 text-sea-800' : 'bg-gray-100 text-gray-700';
  return <span className={`badge ${base}`}>{children}</span>;
}
