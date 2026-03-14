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

      {/* Word cloud decorativo */}
      <div className="relative mt-6 h-[72px] max-w-[600px] mx-auto select-none pointer-events-none">
        {[
          { text: 'musica',         color: 'text-brand/40',        size: 'text-[15px]', top: '0px',   left: '10%'  },
          { text: 'rimuovi sfondo', color: 'text-slate-500/40',    size: 'text-[11px]', top: '8px',   left: '30%'  },
          { text: 'video',          color: 'text-violet-400/40',   size: 'text-[18px]', top: '2px',   left: '54%'  },
          { text: 'copywriting',    color: 'text-slate-500/30',    size: 'text-[10px]', top: '36px',  left: '5%'   },
          { text: 'immagini AI',    color: 'text-brand/50',        size: 'text-[13px]', top: '32px',  left: '28%'  },
          { text: 'codice',         color: 'text-violet-300/35',   size: 'text-[12px]', top: '30px',  left: '60%'  },
          { text: 'voiceover',      color: 'text-slate-400/30',    size: 'text-[11px]', top: '56px',  left: '15%'  },
          { text: 'avatar',         color: 'text-brand/30',        size: 'text-[13px]', top: '52px',  left: '42%'  },
          { text: 'logo',           color: 'text-violet-400/35',   size: 'text-[11px]', top: '54px',  left: '72%'  },
          { text: 'sottotitoli',    color: 'text-slate-500/25',    size: 'text-[10px]', top: '14px',  left: '76%'  },
        ].map(({ text, color, size, top, left }) => (
          <span
            key={text}
            className={`absolute font-mono tracking-wide ${size} ${color}`}
            style={{ top, left }}
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}