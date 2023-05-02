import { editPost } from "../logic"

export default function EditePost(props) {
    function editPostButton (event) {
        event.preventDefault();

        const postId = sessionStorage.postId;
        const text = event.target.elements.text.value

        try {
            editPost(text, postId)

            props.onBackEditPost()
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="create-post">
        <form onSubmit={editPostButton} className="new-post">
            <textarea defaultValue={sessionStorage.postText} className="textarea" name="text" id="" cols="30" rows="10"></textarea>
            <p>Do you want edit this post?</p>
            <div>
                <button className="button">Yes</button>
                <a href="#" onClick={props.onBackEditPost} className="anchor">No</a>
            </div>
        </form>
    </div>
}