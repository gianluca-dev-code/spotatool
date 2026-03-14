export function ScoreBadge({ score }) {
  let color = 'text-orange-500'
  if (score >= 9) color = 'text-emerald-400'
  else if (score >= 8) color = 'text-blue-400'
  else if (score >= 7) color = 'text-yellow-400'
  
  return (
    <div className={`text-sm font-bold ${color}`}>
      {score.toFixed(1)}/10
    </div>
  )
}

export function TrendBadge({ trend }) {
  const isPositive = trend >= 0
  return (
    <div className={`text-xs font-semibold ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
      {isPositive ? '↑' : '↓'} {Math.abs(trend)}%
    </div>
  )
}

export function ToolCard({ tool }) {
  return (
    <a href={tool.website_url} target="_blank" rel="noopener noreferrer" className="block group bg-dark-900 border border-brand/10 rounded-lg p-6 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10 transition-all cursor-pointer h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl">{tool.logo}</div>
        <TrendBadge trend={tool.trend} />
      </div>

      <h3 className="text-lg font-bold text-gray-100 mb-2">{tool.name}</h3>
      <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">{tool.description}</p>

      <div className="flex items-center justify-between mb-4">
        <ScoreBadge score={tool.score} />
        <div className="text-xs text-slate-500">
          <div>{tool.users} users</div>
          <div>{tool.pricing.free_tier ? 'Free' : `$${tool.pricing.starting_price}`}</div>
        </div>
      </div>

      <div className="w-full py-2 bg-gradient-to-r from-brand to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-brand/30 transition-all text-sm text-center">
        Visit website →
      </div>
    </a>
  )
}

export function CategoryPill({ category, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-semibold text-sm transition-all whitespace-nowrap ${
        isActive
          ? 'bg-brand text-white shadow-lg shadow-brand/30'
          : 'bg-dark-900 text-slate-400 border border-brand/10 hover:border-brand/30'
      }`}
    >
      <span className="mr-2">{category.icon}</span>
      {category.name}
    </button>
  )
}

export function ComparisonRow({ name, scoreA, scoreB }) {
  return (
    <div className="py-3 border-b border-brand/10 last:border-b-0">
      <div className="text-sm text-slate-500 mb-2">{name}</div>
      <div className="flex gap-4">
        <div className="flex-1 h-2 bg-dark-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand to-violet-600"
            style={{ width: `${(scoreA / 10) * 100}%` }}
          />
        </div>
        <div className="flex-1 h-2 bg-dark-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-green-600"
            style={{ width: `${(scoreB / 10) * 100}%` }}
          />
        </div>
      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-1">
        <span>{scoreA.toFixed(1)}</span>
        <span>{scoreB.toFixed(1)}</span>
      </div>
    </div>
  )
}