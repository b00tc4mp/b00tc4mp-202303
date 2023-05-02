import './App.css' 
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import HomePage from './pages/HomePage'
import { useState } from 'react'

function App() { 
  const [view, setView] = useState('login')

  function viewCreateAccount() {
    setView('createAccount')
  }

  function viewLogIn() {
    setView('login')
  }

  function handleAuthenticated() {
    setView('home')
  }

  function registerUser() {
    setView('login')
  }

  return <>
  {view === 'login' && <Login 
    onAuthenticated={handleAuthenticated} 
    onChangeCreatteAccount = {viewCreateAccount} />}
  {view === 'createAccount' && <CreateAccount 
    onChangeLogin = {viewLogIn} 
    onRegisterUser = {registerUser}/>}
  {view === 'home' && <HomePage onBackLogin = {viewLogIn}/>}
</>
}

export default App

