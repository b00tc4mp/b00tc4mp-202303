import {useNavigate} from 'react-router-dom'

export default function LogOut(props: any) {
    const navigate = useNavigate()
    function handleLogOut() {
        delete sessionStorage.userId
        
        navigate('/login')
    }

    return <div className="create-post">
        <div  className="new-post">
            <p>Do you want to return to login?</p>
            <div>
                <button onClick={handleLogOut} className="button">Yes</button>
                <button onClick={props.onBackHome} className='button'>No</button>
            </div>
        </div>
    </div>
}