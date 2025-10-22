import { useEffect } from 'react'
import Button from './Button'

export default function BookingDialog({ open, onClose, slot }:
  { open: boolean; onClose: () => void; slot: string | null }) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/40 p-4">
      <div className="mx-auto mt-20 max-w-md rounded-xl bg-white p-5 shadow-xl">
        <h3 className="text-lg font-semibold text-sea-900">Confirm Booking</h3>
        <p className="mt-1 text-sm text-gray-700">Selected time: <strong>{slot}</strong></p>
        <div className="mt-4">
          <label className="text-sm font-medium">Payment Method</label>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {['bKash', 'Nagad', 'Card'].map(m => (
              <button key={m} className="pill">{m}</button>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button onClick={() => { alert('Session booked! (demo)'); onClose(); }}>Book Session</Button>
        </div>
      </div>
    </div>
  )
}
