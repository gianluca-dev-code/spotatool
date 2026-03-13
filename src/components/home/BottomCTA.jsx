import { Link } from 'react-router-dom'

export default function BottomCTA() {
  return (
    <section className="relative z-5 py-20 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-100 mb-6">
          Ready to find the perfect AI tool?
        </h2>
        <p className="text-lg text-slate-500 mb-10">
          Join thousands of creators, developers, and businesses discovering the best AI tools for their workflow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/explore"
            className="px-8 py-4 bg-gradient-to-r from-brand to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-brand/30 transition-all hover:-translate-y-1"
          >
            Explore Tools Now
          </Link>
          <button className="px-8 py-4 bg-dark-900 border border-brand/20 text-gray-100 font-semibold rounded-lg hover:border-brand/50 transition-all">
            Learn More
          </button>
        </div>

        <p className="text-sm text-slate-600 mt-8">
          🚀 New tools added daily | 📊 Community reviews | ⭐ Verified ratings
        </p>
      </div>
    </section>
  )
}