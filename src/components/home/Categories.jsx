import { useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../../data/tools'
import { CategoryPill } from '../ui/Cards'

export default function Categories() {
  const navigate = useNavigate()

  return (
    <section className="relative z-5 py-12 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-gray-100 mb-8 text-center">
          Explore by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORIES.map(category => (
            <CategoryPill
              key={category.id}
              category={category}
              isActive={false}
              onClick={() => navigate(`/explore?category=${category.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}