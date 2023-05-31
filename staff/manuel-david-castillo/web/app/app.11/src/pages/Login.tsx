import { authenticateUser } from "../logic"
import { useContext } from "react";
import Context from "./Context";

export default function Login(props: any) {
    const { alert } = useContext(Context)

    function changeCreateAccount() {

        props.onChangeCreatteAccount()
    }

    function handleSubmit(event: any) {
        event.preventDefault();

        const email = event.target.email.value
        const password = event.target.password.value 

        try {
            const userId = authenticateUser(email, password)

            sessionStorage.userId = userId

            props.onAuthenticated()
        } catch (error: any) {
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