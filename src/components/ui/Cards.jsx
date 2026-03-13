export function ScoreBadge({ score }) {
  const getColor = (score) => {
    if (score >= 9) return 'text-emerald-400'
    if (score >= 8) return 'text-blue-400'
    if (score >= 7) return 'text-yellow-400'
    return 'text-orange-400'
  }

  return (
    <div className={`text-2xl font-black ${getColor(score)}`}>
      {score.toFixed(1)}
    </div>
  )
}

export function TrendBadge({ trend }) {
  const isPositive = trend >= 0
  return (
    <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${
      isPositive 
        ? 'bg-emerald-500/10 text-emerald-400' 
        : 'bg-red-500/10 text-red-400'
    }`}>
      <span>{isPositive ? '↑' : '↓'}</span>
      <span>{Math.abs(trend)}%</span>
    </div>
  )
}

export function ToolCard({ tool }) {
  return (
    <div className="group bg-dark-900 border border-brand/10 rounded-lg p-6 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10 transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl">{tool.logo}</div>
        <TrendBadge trend={tool.trend} />
      </div>

      <h3 className="text-lg font-bold text-gray-100 mb-2">{tool.name}</h3>
      <p className="text-sm text-slate-500 mb-4 line-clamp-2">{tool.description}</p>

      <div className="flex items-center justify-between">
        <ScoreBadge score={tool.score} />
        <div className="text-xs text-slate-500">
          <div>{tool.users} users</div>
          <div>{tool.pricing.free_tier ? 'Free' : `$${tool.pricing.starting_price}`}</div>
        </div>
      </div>
    </div>
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