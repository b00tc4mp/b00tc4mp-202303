import { registerUser } from "../logic";

export default function CreateAccount(props) {
    function changeLogin() {

        props.onChangeLogin()
    }

    function createAccount(event) {
        event.preventDefault();

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value 
        
        try {
            registerUser(name, email, password)

            props.onRegisterUser()
        } catch (error) {
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

      <a onClick={changeLogin} href="#">Go to log-in</a>
    </div>
}
