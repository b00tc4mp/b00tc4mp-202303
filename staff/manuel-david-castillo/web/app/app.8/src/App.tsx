import { useState } from 'react'
import './App.css' 

/* Se crea una función que devuelve todo lo que se ve en pantalla */
function App() { 

  const [viewLogIn, setViewLogIn] = useState('page')
  const createAccountClick = () => {
    setViewLogIn('off')
    setViewCreateAccount('page')
  }

  const [viewCreateAccount, setViewCreateAccount] = useState('off')
  const goToLogInClick = () => {
    setViewLogIn('page')
    setViewCreateAccount('off')
  }

  return (
    <div><div className={viewLogIn}>
      <h1>Log-in</h1>
      <form className="form">
        <input className="input" type="email" name="email" placeholder="email" />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="password"
        />

        <button className="button">login</button>
        
      </form>
      <a onClick={createAccountClick} href="#">Create account</a>

    </div>
    <div className= {viewCreateAccount}>
      <h1>Register</h1>

      <form className="form">
        <input className="input" type="name" name="name" placeholder="name" />
        <input className="input" type="email" name="email" placeholder="email" />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="password"
        />

        <button className="button">register</button>
      </form>

      <a onClick={goToLogInClick} href="#">Go to log-in</a>
    </div>
</div>
    
    
  )
}

export default App

