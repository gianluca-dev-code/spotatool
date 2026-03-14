import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SEARCH_SUGGESTIONS } from '../../data/tools'

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
    <section className="relative z-5 text-center px-6 md:px-12 pt-16 md:pt-20 pb-8 max-w-[860px] mx-auto">
      {/* Live badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/[0.06] border border-brand/[0.15] mb-8">
        <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(99,102,241,0.6)] animate-breathe" />
        <span className="text-[12.5px] font-medium text-brand-lighter font-mono tracking-wide">
          2,847 AI tools tracked in real-time
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-black tracking-[-3.5px] leading-[1.06] mb-7">
        <span className="text-gray-100">L'AI è un </span>
        <span className="text-gradient-brand">casino.</span>
        <br />
        <span className="text-gray-100">Noi la mettiamo </span>
        <span className="text-gradient-green">in ordine.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-slate-500 max-w-[500px] mx-auto mb-11 leading-relaxed">
        Trova, confronta e scegli il tool AI giusto per qualsiasi cosa.
        <br />
        Recensito, spiegato, senza bullshit.
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
          placeholder="Cosa vuoi fare? Es: togliere sfondo, creare musica..."
          className="flex-1 bg-transparent border-none outline-none text-gray-100 text-[14.5px] placeholder:text-slate-600"
        />
        <button 
          onClick={handleSearch}
          className="relative overflow-hidden px-5 py-2.5 rounded-[10px] bg-gradient-to-r from-brand to-violet-600 text-white text-[13.5px] font-semibold whitespace-nowrap hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/30 transition-all"
        >
          Trova Tool
        </button>
      </div>

      {/* Suggestion tags — solo decorativi */}
      <div className="flex justify-center gap-1.5 mt-3.5 flex-wrap">
        {SEARCH_SUGGESTIONS.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 rounded-md bg-white/[0.02] border border-white/[0.05] text-[11.5px] text-slate-500 font-mono tracking-wide cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}