import { useContext } from "react";
import Context from "../pages/Context";
import addUserToBlocked from "../logic/blockUser";

export default function Block(props: any) {
    const { alert } = useContext(Context)

    function blockUserButton(event: any) {
        event.preventDefault();

        try {
            addUserToBlocked(sessionStorage.userId, sessionStorage.userPost)

        } catch (error: any) {
            alert(error.message)
        }
    }

    return <div className="create-post">
        <form onSubmit={blockUserButton} className="new-post">
            <p>Are you sure?</p>
            <div>
                <button className="button">Yes</button>
                <a href="#" onClick={props.onBackBlockPost} className="anchor">No</a>
            </div>
        </form>
    </div>
}