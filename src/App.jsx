import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ToolsProvider } from './context/ToolsContext'
import Landing from './pages/Landing'
import Explore from './pages/Explore'
import Auth from './pages/Auth'

export default function App() {
  return (
    <BrowserRouter>
      <ToolsProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthProvider>
      </ToolsProvider>
    </BrowserRouter>
  )
}