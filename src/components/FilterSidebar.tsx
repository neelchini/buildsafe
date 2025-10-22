import { useState } from 'react'
export type Filters = {
  specialties: string[];
  language: string[];
  maxPrice: number;
}

export default function FilterSidebar({ onChange }: { onChange: (f: Filters) => void }) {
  const [spec, setSpec] = useState<string[]>([])
  const [lang, setLang] = useState<string[]>([])
  const [price, setPrice] = useState(1000)

  function toggle(list: string[], setList: (v: string[]) => void, item: string) {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item])
  }
  function emit() {
    onChange({ specialties: spec, language: lang, maxPrice: price })
  }

  return (
    <aside className="card p-4 sticky top-20 h-fit">
      <h3 className="text-sm font-semibold text-sea-900">Filter by</h3>
      <div className="mt-3">
        <p className="text-xs font-medium text-gray-700">Speciality</p>
        {['Anxiety & Stress','Depression','Academic Pressure','Exam Anxiety','Motivation'].map(s => (
          <label key={s} className="mt-2 flex items-center gap-2 text-sm">
            <input type="checkbox" checked={spec.includes(s)} onChange={() => { toggle(spec, setSpec, s); emit() }} />
            {s}
          </label>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-xs font-medium text-gray-700">Language</p>
        {['Bangla','English','Both'].map(l => (
          <label key={l} className="mt-2 flex items-center gap-2 text-sm">
            <input type="checkbox" checked={lang.includes(l)} onChange={() => { toggle(lang, setLang, l); emit() }} />
            {l}
          </label>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-xs font-medium text-gray-700">Price Range (৳)</p>
        <input type="range" min={200} max={1500} value={price} onChange={(e) => { setPrice(parseInt(e.target.value)); emit() }} className="w-full" />
        <div className="text-xs text-gray-600">Up to {price}</div>
      </div>
    </aside>
  )
}
