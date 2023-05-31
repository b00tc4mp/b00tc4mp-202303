import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../pages/Context";
import updateUserPassword from "../logic/updateUserPassword";
import retrieveUser from "../logic/retrieveUser";
import retrieveNameUser from "../logic/retrieveNameUser";
import removeUserFromBlocks from "../logic/unBlockUser";

export default function UpdatePassword(props: any) {
  const navigate = useNavigate();
  const { alert } = useContext(Context)

  /* Actualizar contraseña */
  function updateUserPasswordForm(event: any) {
    event.preventDefault();

    const id = sessionStorage.userId
    const password = event.target.password.value
    const newPassword = event.target.newPassword.value
    const newPasswordConfirmation = event.target.newPasswordConfirmation.value

    try {
      updateUserPassword(id, password, newPassword, newPasswordConfirmation)

      alert('password correctly update')
      navigate('/')
    } catch (error: any) {
      alert(error.message)
    }
  }

  /* Recupera el usuario */
  const user = retrieveUser(sessionStorage.userId)

  /*  Recuperar el nombre de usuario */
  function handleNameRetrieval(userId: string) {
    try {
      return retrieveNameUser(userId)

    } catch (error: any) {
      alert(error.message)
    }
  }

  /* Desbloquear usuario */
  function handleUserUnBlock(bloquedUser: string) {
    try {
      removeUserFromBlocks(sessionStorage.userId, bloquedUser)

      console.log('removeUserFromBlocks')
    }
    catch (error: any) {
      alert(error.message)
    }
  }

  /* Pinta el dom */
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
    </form>
    <ul className="ul-post">
      {user.blocks.map(block => <li className="post">
        <p className="post-name"> {handleNameRetrieval(block)} </p>
        {<button onClick={() => handleUserUnBlock(block)} className='button'>Unblock</button>}
      </li>)

      }
    </ul>
    <Link to="/" className="anchor" >Back</Link>
  </div>
}