import { useState, useEffect } from 'react'

export default function Stats() {
  const [toolsCount, setToolsCount] = useState(0)
  const [categoriesCount, setCategoriesCount] = useState(0)
  const [usersCount, setUsersCount] = useState(0)

  useEffect(() => {
    const animateCounter = (setter, target, duration = 2000) => {
      let current = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(current))
        }
      }, 16)
    }

    animateCounter(setToolsCount, 2847)
    animateCounter(setCategoriesCount, 156)
    animateCounter(setUsersCount, 500)
  }, [])

  return (
    <section className="relative z-5 py-16 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-brand to-violet-600 bg-clip-text mb-2">
              {toolsCount.toLocaleString()}+
            </div>
            <p className="text-slate-500 text-sm md:text-base">AI Tools</p>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text mb-2">
              {categoriesCount}
            </div>
            <p className="text-slate-500 text-sm md:text-base">Categories</p>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-pink-400 to-rose-600 bg-clip-text mb-2">
              {usersCount.toLocaleString()}K+
            </div>
            <p className="text-slate-500 text-sm md:text-base">Community</p>
          </div>
        </div>
      </div>
    </section>
  )
}