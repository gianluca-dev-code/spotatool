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

  const stats = [
    { value: `${toolsCount.toLocaleString()}+`, label: 'AI Tools' },
    { value: `${categoriesCount}`,              label: 'Categories' },
    { value: `${usersCount.toLocaleString()}K+`,label: 'Community' },
  ]

  return (
    <section className="relative z-5 py-10 px-6 md:px-12">
      <div className="max-w-[700px] mx-auto">
        <div className="grid grid-cols-3 gap-6 md:gap-12">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-brand to-violet-500 bg-clip-text mb-1.5">
                {value}
              </div>
              <p className="text-slate-500 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}