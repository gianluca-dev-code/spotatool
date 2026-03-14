import React, { createContext, useContext, useState, useEffect } from 'react'

const ToolsContext = createContext()

export const ToolsProvider = ({ children }) => {
  const [tools, setTools] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // TODO: Fetch from Firestore when ready
    // For now, tools will be empty until we add Firestore integration
    setLoading(false)
  }, [])

  return (
    <ToolsContext.Provider value={{ tools, loading, error }}>
      {children}
    </ToolsContext.Provider>
  )
}

export const useTools = () => {
  const context = useContext(ToolsContext)
  if (!context) {
    throw new Error('useTools must be used within ToolsProvider')
  }
  return context
}