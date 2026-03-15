import { useState, useRef } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { TOOLS } from '../data/tools'
import Navbar from '../components/layout/Navbar'
import BackgroundEffects from '../components/home/BackgroundEffects'

const PROS_TAGS = ['⚡ Super fast', '🎯 On-brand', '🔥 Great templates', '📈 SEO ready', '🌍 Multi-lang', '🤝 Team collab', '💡 Very creative', '🚀 Scalable']
const CONS_TAGS = ['💸 Too pricey', '🤖 Feels robotic', '📶 Needs editing', '🔒 No free tier', '🐢 Slow sometimes', '😵 Overwhelming']

function ReviewWidget({ tool }) {
  const [sliderVal, setSliderVal] = useState(0)
  const [activeTags, setActiveTags] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const trackRef = useRef(null)
  const dragging = useRef(false)
  const MAX_TAGS = 3

  const getColor = (v) => {
    const stops = [
      { r: 99,  g: 102, b: 241 },
      { r: 139, g: 92,  b: 246 },
      { r: 167, g: 52,  b: 235 },
      { r: 192, g: 38,  b: 211 },
    ]
    const idx = (v / 100) * (stops.length - 1)
    const lo = Math.floor(idx)
    const hi = Math.min(lo + 1, stops.length - 1)
    const t = idx - lo
    const r = Math.round(stops[lo].r + (stops[hi].r - stops[lo].r) * t)
    const g = Math.round(stops[lo].g + (stops[hi].g - stops[lo].g) * t)
    const b = Math.round(stops[lo].b + (stops[hi].b - stops[lo].b) * t)
    return { r, g, b, css: `rgb(${r},${g},${b})` }
  }

  const getVal = (e) => {
    const rect = trackRef.current.getBoundingClientRect()
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left
    return Math.min(Math.max((x / rect.width) * 100, 0), 100)
  }

  const handleTrackDown = (e) => { dragging.current = true; setSliderVal(getVal(e)) }
  const handleMove = (e) => { if (dragging.current) setSliderVal(getVal(e)) }
  const handleUp = () => { dragging.current = false }

  const toggleTag = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(t => t !== tag))
    } else if (activeTags.length < MAX_TAGS) {
      setActiveTags([...activeTags, tag])
    }
  }

  const c = getColor(sliderVal)

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-gray-100 font-bold text-lg mb-2">Review submitted!</p>
        <p className="text-slate-500 text-sm">Thanks for helping the community.</p>
      </div>
    )
  }

  return (
    <div
      className="rounded-2xl p-6 border transition-all duration-500"
      style={{
        background: '#0f1425',
        borderColor: `rgba(${c.r},${c.g},${c.b},0.25)`,
        boxShadow: sliderVal > 0 ? `0 0 ${20 + sliderVal/3}px rgba(${c.r},${c.g},${c.b},0.15)` : 'none'
      }}
      onMouseMove={handleMove}
      onMouseUp={handleUp}
      onTouchMove={handleMove}
      onTouchEnd={handleUp}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="relative">
          <div
            className="absolute pointer-events-none transition-all duration-500"
            style={{
              inset: '-12px',
              borderRadius: '50%',
              opacity: sliderVal > 0 ? 0.9 : 0,
              background: `radial-gradient(circle, rgba(${c.r},${c.g},${c.b},0.7) 0%, rgba(${c.r},${c.g},${c.b},0.2) 50%, transparent 75%)`,
              boxShadow: `0 0 ${30 + sliderVal/2}px rgba(${c.r},${c.g},${c.b},0.6)`,
            }}
          />
          <div
            className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
          >
            {tool.logo}
          </div>
        </div>
        <div>
          <div className="text-white font-bold text-lg">{tool.name}</div>
          <div className="text-slate-500 text-xs font-mono tracking-widest uppercase mt-0.5">// leave your review</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-3">
          <span className="text-xs font-bold font-mono tracking-widest transition-all duration-300"
            style={{ color: sliderVal < 50 ? c.css : '#2d3748', opacity: sliderVal < 50 ? 1 : 0.3 }}>
            ◈ WEAK
          </span>
          <span className="text-xs font-bold font-mono tracking-widest transition-all duration-300"
            style={{ color: sliderVal >= 50 ? c.css : '#2d3748', opacity: sliderVal >= 50 ? 1 : 0.3 }}>
            ◈ GOD
          </span>
        </div>
        <div
          ref={trackRef}
          className="relative w-full h-2 rounded-full cursor-pointer"
          style={{ background: 'rgba(255,255,255,0.05)' }}
          onMouseDown={handleTrackDown}
          onTouchStart={handleTrackDown}
        >
          <div className="h-full rounded-full transition-all duration-100"
            style={{ width: `${sliderVal}%`, background: `linear-gradient(to right, #6366f1, ${c.css})` }}
          />
          <div className="absolute top-1/2 w-5 h-5 rounded-full border-2 transition-all duration-300 cursor-grab"
            style={{
              left: `${sliderVal}%`,
              transform: 'translate(-50%, -50%)',
              background: c.css,
              borderColor: '#0f1425',
              boxShadow: `0 0 14px rgba(${c.r},${c.g},${c.b},0.8)`
            }}
          />
        </div>
      </div>

      <div className="mb-2">
        <div className="text-[10px] text-white/25 tracking-widest uppercase mb-3">// pros & cons</div>
        <div className="text-[10px] font-mono mb-3" style={{ color: 'rgba(255,255,255,0.2)' }}>
          max 3 tag — <span style={{ color: '#8b5cf6', fontWeight: 700 }}>{activeTags.length}</span>/3
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {PROS_TAGS.map(tag => (
            <button key={tag} onClick={() => toggleTag(tag)}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold font-mono border transition-all"
              style={activeTags.includes(tag) ? {
                borderColor: 'rgba(139,92,246,0.7)', color: '#fff',
                background: 'rgba(139,92,246,0.15)', boxShadow: '0 0 12px rgba(139,92,246,0.3)'
              } : {
                borderColor: 'rgba(255,255,255,0.08)',
                color: activeTags.length >= MAX_TAGS && !activeTags.includes(tag) ? '#2d3748' : '#64748b',
                background: 'rgba(255,255,255,0.03)',
                cursor: activeTags.length >= MAX_TAGS && !activeTags.includes(tag) ? 'not-allowed' : 'pointer'
              }}>
              {tag}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {CONS_TAGS.map(tag => (
            <button key={tag} onClick={() => toggleTag(tag)}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold font-mono border transition-all"
              style={activeTags.includes(tag) ? {
                borderColor: 'rgba(99,102,241,0.7)', color: '#fff',
                background: 'rgba(99,102,241,0.12)', boxShadow: '0 0 12px rgba(99,102,241,0.25)'
              } : {
                borderColor: 'rgba(255,255,255,0.08)',
                color: activeTags.length >= MAX_TAGS && !activeTags.includes(tag) ? '#2d3748' : '#64748b',
                background: 'rgba(255,255,255,0.03)',
                cursor: activeTags.length >= MAX_TAGS && !activeTags.includes(tag) ? 'not-allowed' : 'pointer'
              }}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => sliderVal > 0 && setSubmitted(true)}
        className="mt-6 w-full py-3 rounded-xl text-white text-xs font-bold font-mono tracking-widest transition-all"
        style={{
          background: sliderVal > 0
            ? `linear-gradient(to right, rgba(${c.r},${c.g},${c.b},0.4), rgba(${c.r},${c.g},${c.b},0.2))`
            : 'rgba(255,255,255,0.05)',
          opacity: sliderVal > 0 ? 1 : 0.5,
          cursor: sliderVal > 0 ? 'pointer' : 'not-allowed'
        }}
      >
        SUBMIT REVIEW →
      </button>
    </div>
  )
}

export default function ToolDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const tool = TOOLS.find(t => t.slug === slug)

  if (!tool) return <Navigate to="/explore" />

  const pricingLabel = {
    free: 'Free',
    freemium: 'Freemium',
    subscription: 'Subscription',
    pay_per_use: 'Pay per use'
  }[tool.pricing.model] || tool.pricing.model

  const communityTags = [
    { text: '⚡ Super fast', pct: 78, hot: true },
    { text: '🎯 On-brand', pct: 65, hot: true },
    { text: '💸 Too pricey', pct: 54, hot: false },
    { text: '🔥 Great templates', pct: 49, hot: true },
    { text: '🤖 Feels robotic', pct: 38, hot: false },
  ]

  return (
    <div className="min-h-screen bg-dark-950 text-gray-200 relative overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />

      <div className="relative z-5 max-w-[1100px] mx-auto px-6 pt-16 pb-20">

        <button onClick={() => navigate('/explore')}
          className="flex items-center gap-2 text-slate-500 hover:text-gray-300 transition-colors mb-10 text-sm font-mono">
          ← back to explore
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-8">

            <div className="flex items-start gap-5">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
                style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
                {tool.logo}
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h1 className="text-3xl font-black text-white">{tool.name}</h1>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold font-mono"
                    style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#a78bfa' }}>
                    {tool.category}
                  </span>
                  {tool.trend > 40 && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold font-mono"
                      style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: '#c4b5fd' }}>
                      ↑ trending
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-base leading-relaxed">{tool.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Score', value: tool.score },
                { label: 'Reviews', value: tool.total_reviews.toLocaleString() },
                { label: 'Users', value: tool.users },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl p-4 text-center"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(99,102,241,0.1)' }}>
                  <div className="text-2xl font-black text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(to right, #6366f1, #8b5cf6)' }}>
                    {value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-mono tracking-widest uppercase">{label}</div>
                </div>
              ))}
            </div>

            <div>
              <div className="text-[10px] text-white/25 tracking-widest uppercase font-mono mb-4">// features</div>
              <div className="flex flex-wrap gap-2">
                {tool.features.map(f => (
                  <span key={f} className="px-3 py-1.5 rounded-full text-xs font-mono"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] text-white/25 tracking-widest uppercase font-mono mb-4">// community top tags</div>
              <div className="flex flex-wrap gap-2">
                {communityTags.map(ct => (
                  <span key={ct.text} className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold border"
                    style={{
                      borderColor: ct.hot ? 'rgba(139,92,246,0.4)' : 'rgba(99,102,241,0.3)',
                      color: ct.hot ? 'rgba(167,139,250,0.9)' : 'rgba(129,140,248,0.7)',
                      background: ct.hot ? 'rgba(139,92,246,0.08)' : 'rgba(99,102,241,0.06)'
                    }}>
                    {ct.text} <span className="opacity-50">{ct.pct}%</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(99,102,241,0.15)' }}>
              <div className="text-[10px] text-white/25 tracking-widest uppercase font-mono mb-4">// pricing</div>
              <div className="flex items-baseline gap-2 mb-1">
                {tool.pricing.free_tier && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(99,102,241,0.1)', color: '#a78bfa', border: '1px solid rgba(99,102,241,0.2)' }}>
                    free tier
                  </span>
                )}
                <span className="text-slate-400 text-sm font-mono">{pricingLabel}</span>
              </div>
              {tool.pricing.starting_price > 0 && (
                <div className="text-white font-black text-2xl mt-2">
                  ${tool.pricing.starting_price}
                  <span className="text-slate-500 text-sm font-normal">/mo</span>
                </div>
              )}
              <a
                href={tool.affiliate_url || tool.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-3 rounded-xl text-white text-sm font-bold text-center block transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
                  boxShadow: '0 0 20px rgba(99,102,241,0.2)'
                }}
              >
                Visit {tool.name} →
              </a>
            </div>

            <ReviewWidget tool={tool} />
          </div>
        </div>
      </div>
    </div>
  )
}