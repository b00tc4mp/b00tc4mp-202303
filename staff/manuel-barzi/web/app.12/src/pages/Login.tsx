import { authenticateUser } from '../logic'

export default function Login(props) {
    function handleSubmit(event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            const userId = authenticateUser(email, password)

            sessionStorage.userId = userId

            props.onAuthenticated()
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="login page">
        <h1>login</h1>

        <form className="form" onSubmit={handleSubmit}>
            <input className="input" type="email" name="email" placeholder="email"></input>
            <input className="input" type="password" name="password" placeholder="password"></input>

            <button className="button">login</button>
        </form>

        <p>Go to <a href="">register</a></p>
    </div>
}