import { Link } from 'react-router-dom'

export default function BottomCTA() {
  return (
    <section className="relative z-5 py-16 px-6 md:px-12">
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-gray-100 mb-4">
          Ready to find the perfect AI tool?
        </h2>
        <p className="text-base text-slate-500 mb-8 leading-relaxed">
          Join thousands of creators, developers, and businesses discovering the best AI tools for their workflow.
        </p>
        <Link
          to="/explore"
          className="inline-block px-10 py-4 bg-gradient-to-r from-brand to-violet-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand/30 transition-all hover:-translate-y-1"
        >
          Explore Tools Now
        </Link>
        <p className="text-xs text-slate-600 mt-6">
          🚀 New tools added daily &nbsp;|&nbsp; 📊 Community reviews &nbsp;|&nbsp; ⭐ Verified ratings
        </p>
      </div>
    </section>
  )
}