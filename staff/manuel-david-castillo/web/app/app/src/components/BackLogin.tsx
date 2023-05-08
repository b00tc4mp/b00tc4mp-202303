import { useContext } from "react"
import Context from "../pages/Context"

export default function LogOut(props: any) {
    const {logOut} = useContext(Context)
    function handleLogOut() {
        delete sessionStorage.userId
        logOut()
    }

    return <div className="create-post">
        <div  className="new-post">
            <p>Do you want to return to login?</p>
            <div>
                <button onClick={handleLogOut} className="button">Yes</button>
                <a onClick={props.onBackHome} href="#" className="anchor">No</a>
            </div>
        </div>
    </div>
}