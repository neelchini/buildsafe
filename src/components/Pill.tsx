import { ReactNode } from 'react'
export default function Pill({ children, active=false, onClick }:
  { children: ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button onClick={onClick} className={`pill ${active ? 'bg-sea-700 text-white border-sea-700' : ''}`}>
      {children}
    </button>
  )
}
