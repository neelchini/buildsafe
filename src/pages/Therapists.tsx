import FilterSidebar, { Filters } from '../components/FilterSidebar'
import TherapistCard from '../components/TherapistCard'
import { therapists } from '../data'
import { useState } from 'react'

export default function Therapists() {
  const [filters, setFilters] = useState<Filters>({ specialties: [], language: [], maxPrice: 1000 })

  const list = therapists.filter(t => {
    const specOk = filters.specialties.length === 0 || filters.specialties.some(s => t.specialties.includes(s))
    const langOk = filters.language.length === 0 || filters.language.includes(t.language)
    const priceOk = t.price <= filters.maxPrice
    return specOk && langOk && priceOk
  })

  return (
    <div className="space-y-6">
      {/* Hero */}
      <section className="card overflow-hidden">
        <div className="bg-gradient-to-r from-sea-700 to-sea-600 px-6 py-10 text-white">
          <h1 className="text-2xl font-semibold">Find Professional Psychological Support</h1>
          <p className="mt-1 text-sm opacity-90">Confidential. Verified.</p>
          <div className="mt-4 flex gap-3">
            <button className="btn bg-white text-sea-800 hover:bg-sea-50">Find a Professional</button>
            <button className="btn bg-sea-900 text-white hover:bg-sea-950">Emergency Help</button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]">
        <FilterSidebar onChange={setFilters} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {list.map(t => <TherapistCard key={t.id} therapist={t} />)}
        </div>
      </section>
    </div>
  )
}
