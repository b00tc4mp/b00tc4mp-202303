import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Alert from './components/Alert'
import { Context } from './Context'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
  const [feedback, setFeedback] = useState()
  const location = useLocation()
  const [routeUpdated, setRouteUpdated] = useState<null | number>(null)

  useEffect(() => setRouteUpdated(Date.now()), [location])

  const handleAcceptFeedback = () => setFeedback()

  const handleToggleTheme = () => document.querySelector(':root')!.classList.toggle('dark')

  console.log('App -> render')

  return <Context.Provider value={{ alert: setFeedback, toggleTheme: handleToggleTheme }}>
    <Routes>
      <Route path="/login" element={sessionStorage.userId ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={sessionStorage.userId ? <Navigate to="/" /> : <Register />} />
      <Route path="/" element={sessionStorage.userId ? <Home /> : <Navigate to="/login" />} />
    </Routes>

    {feedback && <Alert message={feedback} onAccept={handleAcceptFeedback} />}
  </Context.Provider>
}

export default App
