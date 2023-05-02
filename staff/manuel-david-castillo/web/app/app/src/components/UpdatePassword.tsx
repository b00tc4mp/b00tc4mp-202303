import { updateUserPassword } from "../logic";

export default function UpdatePassword (props) {
    function updateUserPasswordForm(event) {
        event.preventDefault();
  
        const id = sessionStorage.userId
        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordConfirmation = event.target.newPasswordConfirmation.value 
  
        try {
          updateUserPassword(id, password, newPassword, newPasswordConfirmation)
  
          alert('password correctly update')
          props.onBack()
        } catch (error) {
          alert(error.message)
        }
      }

    return <>
    <h3>Change Password</h3>
        <form onSubmit={updateUserPasswordForm} className="form change-password" action="">
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
        <a onClick={props.onBack} className="anchor" href="#">Back</a>
      </form>
      
    </>
}