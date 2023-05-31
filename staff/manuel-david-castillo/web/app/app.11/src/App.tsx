import './App.css' 
import { useState } from 'react'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'
import Context from './pages/Context'
import Alert from './components/Alert'

function App() { 
  const [view, setView] = useState('login')

  function handleCreateAccount() {
    setView('createAccount')
  }

  function handleLogIn() {
    setView('login')
  }

  function handleAuthenticated() {
    setView('home')
  }

  function registerUser() {
    setView('login')
  }

  const [feedback, setFeedback] = useState()

  function handleAcceptFeedback() {
    setFeedback(undefined)
  }

  return <Context.Provider value = {{alert: setFeedback, logOut: handleLogIn}}>
  {view === 'login' && <Login 
    onAuthenticated={handleAuthenticated} 
    onChangeCreatteAccount = {handleCreateAccount} />}
  {view === 'createAccount' && <CreateAccount 
    onChangeLogin = {handleLogIn} 
    onRegisterUser = {registerUser}/>}
  {view === 'home' && <Home sendOnBackLogin = {handleLogIn}/>}
  {feedback && <Alert message = {feedback} onAccept = {handleAcceptFeedback}/>}
</Context.Provider> 
}

export default App

