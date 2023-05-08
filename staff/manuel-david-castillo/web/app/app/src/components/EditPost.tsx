import { useContext } from "react";
import { editPost } from "../logic"
import Context from "../pages/Context";

export default function EditePost(props: any) {
    const { alert } = useContext(Context)

    function handleEditPost (event: any) {
        event.preventDefault();

        const userId = sessionStorage.userId;
        const postId = sessionStorage.postId;
        const text = event.target.elements.text.value;

        try {
            editPost(userId, postId, text)

            props.onBackEditPost()
        } catch (error: any) {
            alert(error.message)
        }
    }

    return <div className="create-post">
        <form onSubmit={handleEditPost} className="new-post">
            <textarea defaultValue={sessionStorage.postText} className="textarea" name="text" id="" cols="30" rows="10"></textarea>
            <p>Do you want edit this post?</p>
            <div>
                <button className="button">Yes</button>
                <a href="#" onClick={props.onBackEditPost} className="anchor">No</a>
            </div>
        </form>
    </div> 
}