import { useMemo, useState } from 'react'
import Button from './Button'
import { classNames } from '../lib/utils'

export default function AvailabilityCalendar({ onBook }: { onBook: (slot: string) => void }) {
  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState<number | null>(today.getDate())

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()

  // Random availability demo
  const availableDays = useMemo(() => {
    const set = new Set<number>()
    for (let i = 0; i < 10; i++) {
      set.add(Math.floor(Math.random() * daysInMonth) + 1)
    }
    return set
  }, [month, year, daysInMonth])

  const slots = ['10:00 AM', '3:00 PM', '7:00 PM']

  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1)
  }
  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1)
  }

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-sea-900">Availability</h3>
        <div className="flex gap-2">
          <button className="pill" onClick={prevMonth}>Prev</button>
          <button className="pill" onClick={nextMonth}>Next</button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-7 text-center text-xs text-gray-500">
        {['SU','MO','TU','WE','TH','FR','SA'].map(d => <div key={d} className="py-1">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1 text-sm">
        {Array.from({ length: firstDay }).map((_,i) => <div key={'e'+i}></div>)}
        {Array.from({ length: daysInMonth }).map((_,i) => {
          const d = i + 1
          const available = availableDays.has(d)
          const isSelected = selectedDate === d
          return (
            <button
              key={d}
              onClick={() => setSelectedDate(d)}
              className={classNames(
                'aspect-square rounded-lg border text-sm',
                available ? 'border-sea-300 text-sea-900' : 'border-gray-200 text-gray-400',
                isSelected ? 'bg-sea-700 text-white border-sea-700' : 'bg-white'
              )}
            >
              {d}
            </button>
          )
        })}
      </div>
      <div className="mt-4">
        <p className="text-xs text-gray-600">Today, {today.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {slots.map(s => (
            <button key={s} onClick={() => onBook(s)} className="pill">{s}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
