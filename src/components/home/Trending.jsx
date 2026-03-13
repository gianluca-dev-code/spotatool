import { TRENDING_TOOLS } from '../../data/tools'
import { ToolCard } from '../ui/Cards'

export default function Trending() {
  return (
    <section className="relative z-5 py-16 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-gray-100 mb-12">
          Trending Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRENDING_TOOLS.slice(0, 6).map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  )
}