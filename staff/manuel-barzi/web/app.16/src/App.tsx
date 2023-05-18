import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Alert from './components/Alert'
import { Context } from './Context'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

function App() {
  const [feedback, setFeedback] = useState()
  const navigate = useNavigate()

  function handleAuthenticated() {
    navigate('/')
  }

  function handleAcceptFeedback() {
    setFeedback()
  }

  function handleToggleTheme() {
    document.querySelector(':root')!.classList.toggle('dark')
  }

  return <Context.Provider value={{ alert: setFeedback, toggleTheme: handleToggleTheme }}>
    <Routes>
      <Route path="/login" element={sessionStorage.userId ? <Navigate to="/" /> : <Login onAuthenticated={handleAuthenticated} />} />
      <Route path="/" element={sessionStorage.userId ? <Home /> : <Navigate to="/login" />} />
    </Routes>

    {feedback && <Alert message={feedback} onAccept={handleAcceptFeedback} />}
  </Context.Provider>
}

export default App
