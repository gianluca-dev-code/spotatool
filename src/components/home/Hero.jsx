import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../../data/tools'

export default function Hero() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery)}`)
    } else {
      navigate('/explore')
    }
  }

  return (
    <section className="relative z-5 text-center px-6 md:px-12 pt-20 md:pt-28 pb-16 max-w-[860px] mx-auto">

      {/* Live badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/[0.06] border border-brand/[0.15] mb-8">
        <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(99,102,241,0.6)] animate-breathe" />
        <span className="text-[12.5px] font-medium text-brand-lighter font-mono tracking-wide">
          2,847 AI tools tracked in real-time
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-black tracking-[-3.5px] leading-[1.06] mb-7">
        <span className="text-gray-100">AI is a </span>
        <span className="text-gradient-brand">mess.</span>
        <br />
        <span className="text-gray-100">We put it </span>
        <span className="text-gradient-brand">in order.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base md:text-lg text-slate-400 max-w-[480px] mx-auto mb-10 leading-relaxed">
        Find, compare and choose the right AI tool for anything.
        Reviewed, explained, no bullshit.
      </p>

      {/* Search bar */}
      <div className="glow-search flex items-center gap-3.5 bg-dark-900/85 border-[1.5px] border-brand/20 rounded-[14px] p-1.5 pl-5 max-w-[620px] mx-auto backdrop-blur-2xl mb-6">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 opacity-35">
          <circle cx="7.5" cy="7.5" r="5.5" stroke="#94a3b8" strokeWidth="1.5"/>
          <path d="M12 12L16 16" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleSearch()}
          placeholder="What do you want to do? E.g: remove background, create music..."
          className="flex-1 bg-transparent border-none outline-none text-gray-100 text-[14.5px] placeholder:text-slate-600"
        />
        <button
          onClick={handleSearch}
          className="relative overflow-hidden px-5 py-2.5 rounded-[10px] bg-gradient-to-r from-brand to-violet-600 text-white text-[13.5px] font-semibold whitespace-nowrap hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/30 transition-all"
        >
          Find Tool
        </button>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap justify-center gap-2 max-w-[620px] mx-auto">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => navigate(`/explore?category=${cat.id}`)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.2)',
              color: '#a78bfa'
            }}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

    </section>
  )
}