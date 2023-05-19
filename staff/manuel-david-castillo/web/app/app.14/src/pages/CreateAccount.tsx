import { useContext } from "react";
import registerUser from "../logic/registerUser";
import Context from "./Context";
import { Link, useNavigate } from 'react-router-dom'

export default function CreateAccount(props: any) {
  const { alert } = useContext(Context)
  const navigate = useNavigate()
  function createAccount(event: any) {
    event.preventDefault();

    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    try {
      registerUser(name, email, password)

      navigate('/login')
    } catch (error: any) {
      alert(error.message)
    }
  }

  return <div className="page">
    <h1>Register</h1>

    <form onSubmit={createAccount} className="form">
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
    <Link to='/login' >Go to log-in</Link>
  </div>
}
