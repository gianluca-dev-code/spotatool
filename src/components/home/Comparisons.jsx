import { COMPARISONS, TRENDING_TOOLS } from '../../data/tools'
import { ScoreBadge, ComparisonRow } from '../ui/Cards'

export default function Comparisons() {
  const getToolData = (name) => {
    return TRENDING_TOOLS.find(t => t.name === name)
  }

  return (
    <section className="relative z-5 py-16 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-gray-100 mb-12">
          Popular Comparisons
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPARISONS.slice(0, 4).map(comp => {
            const toolA = getToolData(comp.tool_a)
            const toolB = getToolData(comp.tool_b)

            return (
              <div key={comp.id} className="bg-dark-900 border border-brand/10 rounded-lg p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-2xl mb-2">{toolA?.logo}</div>
                    <h3 className="text-lg font-bold text-gray-100">{comp.tool_a}</h3>
                    <ScoreBadge score={toolA?.score || 0} />
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-slate-500">VS</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl mb-2">{toolB?.logo}</div>
                    <h3 className="text-lg font-bold text-gray-100">{comp.tool_b}</h3>
                    <ScoreBadge score={toolB?.score || 0} />
                  </div>
                </div>

                <div className="border-t border-brand/10 pt-4 mb-4">
                  <ComparisonRow name="Ease of Use" scoreA={toolA?.scores.ease_of_use || 0} scoreB={toolB?.scores.ease_of_use || 0} />
                  <ComparisonRow name="Output Quality" scoreA={toolA?.scores.output_quality || 0} scoreB={toolB?.scores.output_quality || 0} />
                  <ComparisonRow name="Value for Money" scoreA={toolA?.scores.value_for_money || 0} scoreB={toolB?.scores.value_for_money || 0} />
                </div>

                <p className="text-sm text-slate-400 italic">{comp.verdict}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}