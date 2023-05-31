import { useContext } from "react";
import { updateUserPassword } from "../logic";
import Context from "../pages/Context";
import { Link } from "react-router-dom";

export default function UpdatePassword (props: any) {
  const { alert } = useContext(Context)

    function updateUserPasswordForm(event: any) {
        event.preventDefault();
  
        const id = sessionStorage.userId
        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordConfirmation = event.target.newPasswordConfirmation.value 
  
        try {
          updateUserPassword(id, password, newPassword, newPasswordConfirmation)
  
          alert('password correctly update')
          props.onBack()
        } catch (error: any) {
          alert(error.message)
        }
      }

    return <div className="create-post">
        <form onSubmit={updateUserPasswordForm} className="form change-password" action="">
          <h3>Change Password</h3>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="password"
        />
        <input
          className="input"
          type="password"
          name="newPassword"
          placeholder="new password"
        />
        <input
          className="input"
          type="password"
          name="newPasswordConfirmation"
          placeholder="new password confirmation"
        />
        <button className="button">Update password</button>
        <Link to={'/*'} className="anchor" >Back</Link>
      </form>
    </div>
}