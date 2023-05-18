import './App.css' 
import { useState } from 'react'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'
import Context from './pages/Context'
import Alert from './components/Alert'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

function App() { 
  const [viewLogin, setViewLogin] = useState(true)
  const navigate = useNavigate()
  function handleCreateAccount() {
    setViewLogin(false)
    navigate('create-account')
  }

  function handleLogIn() {
    setViewLogin(true)
    navigate('login')
  }

  function handleAuthenticated() {
    navigate('/')
  }

  function registerUser() {
    setViewLogin(true)
    navigate('login')
  }

  const [feedback, setFeedback] = useState()

  function handleAcceptFeedback() {
    setFeedback(undefined)
  }

  return <Context.Provider value = {{alert: setFeedback, logOut: handleLogIn}}>
    <Routes>
        <Route key={'login'} path='/login' element={ sessionStorage.userId ? <Navigate to='/'/> : <Login onAuthenticated={handleAuthenticated}/>}/>
        <Route key={'create-account'} path='/create-account' element={<CreateAccount onRegisterUser = {registerUser}/>}/>
        <Route key={'home'} path='/*' element={sessionStorage ? <Home/> : <Navigate to='login'/>}/>
    </Routes>
  
  {feedback && <Alert message = {feedback} onAccept = {handleAcceptFeedback}/>}
</Context.Provider> 
}

export default App

