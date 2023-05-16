import { editPost } from "../logic"

export default function EditePost(props: any) {
    function handleEditPost (event: any) {
        event.preventDefault();

        const postId = sessionStorage.postId;
        const text = event.target.elements.text.value

        try {
            editPost(text, postId)

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