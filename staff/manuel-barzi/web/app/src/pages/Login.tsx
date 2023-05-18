import authenticateUser from '../logic/authenticateUser'
import { useContext } from 'react'
import { Context, TContext } from '../Context'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
    const { alert } = useContext<TContext>(Context)
    const navigate = useNavigate()

    const handleSubmit = (event: Event & { target: { email: HTMLInputElement, password: HTMLInputElement } }) => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            const userId = authenticateUser(email, password)

            sessionStorage.userId = userId

            navigate('/')
        } catch (error: any) {
            alert(error.message)
        }
    }

    console.log('Login -> render')

    return <div className="login page">
        <h1>Login</h1>

        <form className="form" onSubmit={handleSubmit}>
            <input className="input" type="email" name="email" placeholder="email"></input>
            <input className="input" type="password" name="password" placeholder="password"></input>

            <button className="button">Login</button>
        </form>

        <p>Go to <Link to="/register">Register</Link></p>
    </div>
}