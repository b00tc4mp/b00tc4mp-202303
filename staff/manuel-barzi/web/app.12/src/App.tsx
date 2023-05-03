import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  const [view, setView] = useState('login')

  function handleAuthenticated() {
    setView('home')
  }

  return <>
    {view === 'login' && <Login onAuthenticated={handleAuthenticated} />}

    {view === 'home' && <Home />}
  </>
}

export default App
