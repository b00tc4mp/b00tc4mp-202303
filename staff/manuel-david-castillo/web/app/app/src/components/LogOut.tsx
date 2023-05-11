import { useContext } from "react"
import Context from "../pages/Context"
import {useNavigate, Link} from 'react-router-dom'

export default function LogOut(props: any) {
    const navigate = useNavigate()
    function handleLogOut() {
        delete sessionStorage.userId
        
        navigate('login')
    }

    return <div className="create-post">
        <div  className="new-post">
            <p>Do you want to return to login?</p>
            <div>
                <button onClick={handleLogOut} className="button">Yes</button>
                <Link to='/'>No</Link>
            </div>
        </div>
    </div>
}