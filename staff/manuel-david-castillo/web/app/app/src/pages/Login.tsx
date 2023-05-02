import { authenticateUser } from "../logic"

export default function Login(props) {
    function changeCreateAccount() {

        props.onChangeCreatteAccount()
    }

    function handleSubmit(event) {
        event.preventDefault();

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

    return <div className="page">
      <h1>Log-in</h1>
      <form onSubmit={handleSubmit} className="form">
        <input  className="input" type="email" name="email" placeholder="email" />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="password"
        />

        <button className="button">login</button>
        
      </form>
      <a onClick={changeCreateAccount} href="#">Create account</a>
    </div>
}