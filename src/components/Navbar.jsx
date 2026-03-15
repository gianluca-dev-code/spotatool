import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { LogoFull } from '../ui/Logo'
import { LogOut, User } from 'lucide-react'

export default function Navbar() {
  const navigate = useNavigate()
  const { user, logout, loading } = useAuth()
  const [showDropdown, setShowDropdown] = useState(false)

  const handleLogout = async () => {
    await logout()
    setShowDropdown(false)
    navigate('/')
  }

  return (
    <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-5 max-w-[1200px] mx-auto">
      <Link to="/">
        <LogoFull size={32} />
      </Link>

      <div className="flex gap-8 items-center">
        {loading ? (
          <div className="w-10 h-10 bg-dark-900 rounded-full animate-pulse" />
        ) : user ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-dark-900/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand to-violet-600 flex items-center justify-center text-white text-xs font-bold">
                {user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || 'U'}
              </div>
              <span className="text-sm font-medium text-gray-100 hidden sm:block">
                {user.displayName || user.email?.split('@')[0]}
              </span>
            </button>

            {showDropdown && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-dark-900 border border-brand/20 rounded-lg shadow-lg overflow-hidden">
                <Link
                  to="/profile"
                  className="flex items-center gap-3 px-4 py-3 text-gray-100 hover:bg-dark-800 transition-colors border-b border-brand/10"
                  onClick={() => setShowDropdown(false)}
                >
                  <User size={16} />
                  <span className="text-sm">Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-dark-800 transition-colors text-left"
                >
                  <LogOut size={16} />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/auth"
            className="relative overflow-hidden px-5 py-2 rounded-lg bg-gradient-to-r from-brand to-violet-600 text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/30 transition-all"
          >
            Sign Up Free
          </Link>
        )}
      </div>
    </nav>
  )
}