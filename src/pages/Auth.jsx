import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Navbar from '../components/layout/Navbar'
import BackgroundEffects from '../components/home/BackgroundEffects'
import { LogoFull } from '../components/ui/Logo'

export default function Auth() {
  const navigate = useNavigate()
  const { login, register, loginWithGoogle, error, loading } = useAuth()
  
  const [mode, setMode] = useState('login') // 'login' or 'register'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [localError, setLocalError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLocalError('')
    setIsLoading(true)

    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setLocalError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setLocalError('')
    setIsLoading(true)

    if (!displayName.trim()) {
      setLocalError('Please enter your name')
      setIsLoading(false)
      return
    }

    try {
      await register(email, password, displayName)
      navigate('/')
    } catch (err) {
      setLocalError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setLocalError('')
    setIsLoading(true)

    try {
      await loginWithGoogle()
      navigate('/')
    } catch (err) {
      setLocalError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-950 text-gray-200 relative overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />

      <div className="relative z-5 flex items-center justify-center px-6 pt-20 pb-20 min-h-[calc(100vh-100px)]">
        <div className="w-full max-w-[420px]">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <LogoFull size={40} />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-black text-gray-100 text-center mb-2">
            {mode === 'login' ? 'Welcome back' : 'Join SpotATool'}
          </h1>
          <p className="text-slate-500 text-center mb-8">
            {mode === 'login'
              ? 'Sign in to your account to continue'
              : 'Create an account to start reviewing AI tools'}
          </p>

          {/* Error message */}
          {(localError || error) && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-sm text-red-400">
                {localError || error}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={mode === 'login' ? handleLogin : handleRegister} className="space-y-4 mb-6">
            {/* Display Name (Register only) */}
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Marco Rossi"
                  className="w-full px-4 py-3 bg-dark-900 border border-brand/20 rounded-lg text-gray-100 placeholder:text-slate-600 focus:outline-none focus:border-brand/50 transition-colors"
                  disabled={isLoading}
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-100 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-dark-900 border border-brand/20 rounded-lg text-gray-100 placeholder:text-slate-600 focus:outline-none focus:border-brand/50 transition-colors"
                disabled={isLoading}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-100 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-dark-900 border border-brand/20 rounded-lg text-gray-100 placeholder:text-slate-600 focus:outline-none focus:border-brand/50 transition-colors"
                disabled={isLoading}
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-brand to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-brand/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? 'Loading...' : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/[0.08]" />
            <span className="text-sm text-slate-500">or</span>
            <div className="flex-1 h-px bg-white/[0.08]" />
          </div>

          {/* Google button */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full py-3 bg-dark-900 border border-brand/20 text-gray-100 font-semibold rounded-lg hover:border-brand/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="currentColor"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="currentColor"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="currentColor"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="currentColor"
              />
            </svg>
            Sign in with Google
          </button>

          {/* Toggle mode */}
          <p className="text-center text-slate-500 text-sm mt-8">
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => {
                setMode(mode === 'login' ? 'register' : 'login')
                setLocalError('')
              }}
              className="text-brand hover:text-brand-light transition-colors font-semibold"
            >
              {mode === 'login' ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}