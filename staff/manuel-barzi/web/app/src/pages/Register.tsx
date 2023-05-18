import registerUser from '../logic/registerUser'
import { useContext } from 'react'
import { Context, TContext } from '../Context'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
    const { alert } = useContext<TContext>(Context)
    const navigate = useNavigate()

    function handleSubmit(event: Event & { target: { name: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement } }) {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            const userId = registerUser(name, email, password)

            sessionStorage.userId = userId

            navigate('/login')
        } catch (error: any) {
            alert(error.message)
        }
    }

    return <div className="login page">
        <h1>Register</h1>

        <form className="form" onSubmit={handleSubmit}>
            <input className="input" type="name" name="name" placeholder="name"></input>
            <input className="input" type="email" name="email" placeholder="email"></input>
            <input className="input" type="password" name="password" placeholder="password"></input>

            <button className="button">Register</button>
        </form>

        <p>Go to <Link to="/login">Login</Link></p>
    </div>
}