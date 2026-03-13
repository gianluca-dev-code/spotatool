import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import BackgroundEffects from '../components/home/BackgroundEffects'
import { ToolCard } from '../components/ui/Cards'
import { TRENDING_TOOLS, CATEGORIES } from '../data/tools'

export default function Explore() {
  const [searchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category') || null
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl)
  const [sortBy, setSortBy] = useState('score')
  const [currentPage, setCurrentPage] = useState(1)

  const searchQuery = searchParams.get('search') || ''

  // Filter tools
  const filteredTools = useMemo(() => {
    let tools = TRENDING_TOOLS

    // Search filter
    if (searchQuery) {
      tools = tools.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory) {
      tools = tools.filter(tool => tool.category === selectedCategory)
    }

    // Sort
    if (sortBy === 'score') tools.sort((a, b) => b.score - a.score)
    if (sortBy === 'trending') tools.sort((a, b) => b.trend - a.trend)
    if (sortBy === 'newest') tools.reverse()

    return tools
  }, [searchQuery, selectedCategory, sortBy])

  // Pagination
  const itemsPerPage = 12
  const totalPages = Math.ceil(filteredTools.length / itemsPerPage)
  const paginatedTools = filteredTools.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="min-h-screen bg-dark-950 text-gray-200 relative overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />

      <div className="relative z-5 px-6 md:px-12 pt-16 max-w-[1200px] mx-auto">
        <h1 className="text-5xl font-black text-gray-100 mb-12">
          Esplora {filteredTools.length} tool AI
        </h1>

        {/* Category filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-4 flex-wrap">
          <button
            onClick={() => {
              setSelectedCategory(null)
              setCurrentPage(1)
            }}
            className={`px-4 py-2 rounded-lg whitespace-nowrap font-semibold transition-all ${
              selectedCategory === null
                ? 'bg-brand text-white'
                : 'bg-dark-900 text-slate-400 hover:text-gray-100'
            }`}
          >
            Tutti
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id)
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand text-white'
                  : 'bg-dark-900 text-slate-400 hover:text-gray-100'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Sort dropdown */}
        <div className="flex gap-4 mb-12 items-center flex-wrap">
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-4 py-2 bg-dark-900 border border-brand/20 rounded-lg text-gray-100 focus:outline-none focus:border-brand/50"
          >
            <option value="score">Top Score</option>
            <option value="trending">Trending</option>
            <option value="newest">Newest</option>
          </select>
          <span className="text-slate-500">
            {filteredTools.length} tool {filteredTools.length === 1 ? 'trovato' : 'trovati'}
          </span>
        </div>

        {/* Tool grid */}
        {filteredTools.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {paginatedTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mb-16 flex-wrap">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-dark-900 border border-brand/20 hover:border-brand/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Indietro
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      currentPage === page
                        ? 'bg-brand text-white'
                        : 'bg-dark-900 text-slate-400 hover:text-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-dark-900 border border-brand/20 hover:border-brand/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Avanti
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500">
              Nessun tool trovato per "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  )
}