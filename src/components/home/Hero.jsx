import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    <section className="relative z-5 text-center px-6 md:px-12 pt-14 md:pt-18 pb-6 max-w-[860px] mx-auto">
      {/* Live badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/[0.06] border border-brand/[0.15] mb-7">
        <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(99,102,241,0.6)] animate-breathe" />
        <span className="text-[12.5px] font-medium text-brand-lighter font-mono tracking-wide">
          2,847 AI tools tracked in real-time
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-black tracking-[-3.5px] leading-[1.06] mb-6">
        <span className="text-gray-100">AI is a </span>
        <span className="text-gradient-brand">mess.</span>
        <br />
        <span className="text-gray-100">We put it </span>
        <span className="text-gradient-brand">in order.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base md:text-lg text-slate-400 max-w-[480px] mx-auto mb-9 leading-relaxed">
        Find, compare and choose the right AI tool for anything.
        Reviewed, explained, no bullshit.
      </p>

      {/* Search bar */}
      <div className="glow-search flex items-center gap-3.5 bg-dark-900/85 border-[1.5px] border-brand/20 rounded-[14px] p-1.5 pl-5 max-w-[620px] mx-auto backdrop-blur-2xl">
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

      {/* Word cloud — posizioni ricalcolate, no sovrapposizioni */}
      <div className="relative mt-5 h-[68px] max-w-[600px] mx-auto select-none pointer-events-none overflow-hidden">
        {[
          { text: 'music',             color: '#6366f1', size: '14px', top: '2px',  left: '2%'  },
          { text: 'remove background', color: '#94a3b8', size: '10px', top: '6px',  left: '22%' },
          { text: 'video',             color: '#a78bfa', size: '17px', top: '0px',  left: '62%' },
          { text: 'captions',          color: '#64748b', size: '10px', top: '4px',  left: '80%' },
          { text: 'copywriting',       color: '#64748b', size: '10px', top: '34px', left: '2%'  },
          { text: 'AI images',         color: '#818cf8', size: '13px', top: '30px', left: '26%' },
          { text: 'coding',            color: '#c4b5fd', size: '12px', top: '28px', left: '55%' },
          { text: 'voiceover',         color: '#94a3b8', size: '11px', top: '28px', left: '76%' },
          { text: 'avatar',            color: '#6366f1', size: '12px', top: '52px', left: '18%' },
          { text: 'logo',              color: '#a78bfa', size: '11px', top: '50px', left: '48%' },
        ].map(({ text, color, size, top, left }) => (
          <span
            key={text}
            style={{ color, fontSize: size, top, left, position: 'absolute', fontFamily: 'monospace', letterSpacing: '0.05em', opacity: 0.75 }}
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}