import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Alert from './components/Alert'
import Context from './Context'

function App() {
  const [view, setView] = useState('login')
  const [feedback, setFeedback] = useState()

  function handleAuthenticated() {
    setView('home')
  }

  function handleAcceptFeedback() {
    setFeedback()
  }

  return <Context.Provider value={{ alert: setFeedback }}>
    {view === 'login' && <Login onAuthenticated={handleAuthenticated} />}

    {view === 'home' && <Home />}

    {feedback && <Alert message={feedback} onAccept={handleAcceptFeedback} />}
  </Context.Provider>
}

export default App
