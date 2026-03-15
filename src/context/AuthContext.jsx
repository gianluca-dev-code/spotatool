import { createContext, useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  fetchSignInMethodsForEmail
} from 'firebase/auth'
import { auth } from '../config/firebase'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const register = async (email, password, displayName) => {
    try {
      setError(null)
      // Controlla se esiste già un account con questa email
      const methods = await fetchSignInMethodsForEmail(auth, email)
      if (methods.length > 0) {
        const err = new Error(
          methods.includes('google.com')
            ? 'This email is already linked to a Google account. Please sign in with Google.'
            : 'An account with this email already exists. Please sign in.'
        )
        setError(err.message)
        throw err
      }
      const result = await createUserWithEmailAndPassword(auth, email, password)
      if (displayName) {
        await updateProfile(result.user, { displayName })
        setUser({ ...result.user, displayName })
      }
      return result.user
    } catch (err) {
      if (!error) setError(err.message)
      throw err
    }
  }

  const login = async (email, password) => {
    try {
      setError(null)
      const result = await signInWithEmailAndPassword(auth, email, password)
      return result.user
    } catch (err) {
      const msg =
        err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password'
          ? 'Invalid email or password.'
          : err.code === 'auth/too-many-requests'
          ? 'Too many attempts. Please try again later.'
          : err.message
      setError(msg)
      throw new Error(msg)
    }
  }

  const logout = async () => {
    try {
      setError(null)
      await signOut(auth)
      setUser(null)
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const loginWithGoogle = async () => {
    try {
      setError(null)
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      return result.user
    } catch (err) {
      // Ignora silenziosamente se l'utente chiude il popup
      if (
        err.code === 'auth/popup-closed-by-user' ||
        err.code === 'auth/cancelled-popup-request'
      ) {
        return null
      }
      const msg =
        err.code === 'auth/account-exists-with-different-credential'
          ? 'An account already exists with this email. Please sign in with email and password.'
          : err.message
      setError(msg)
      throw new Error(msg)
    }
  }

  const value = {
    user, loading, error,
    register, login, logout, loginWithGoogle,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}