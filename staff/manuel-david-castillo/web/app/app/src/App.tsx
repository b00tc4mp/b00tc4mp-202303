import './App.css'
import { useState } from 'react'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'
import Context from './pages/Context'
import Alert from './components/Alert'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const [feedback, setFeedback] = useState()

  function handleAcceptFeedback() {
    setFeedback(undefined)
  }

  return <Context.Provider value={{ alert: setFeedback }}>
    <Routes>
      <Route key={'login'} path='/login' element={sessionStorage.userId ? <Navigate to='/' /> : <Login />} />
      <Route key={'create-account'} path='/create-account' element={<CreateAccount />} />
      <Route key={'home'} path='/*' element={sessionStorage.userId ? <Home /> : <Navigate to='login' />} />
    </Routes>

    {feedback && <Alert message={feedback} onAccept={handleAcceptFeedback} />}
  </Context.Provider>
}

export default App

