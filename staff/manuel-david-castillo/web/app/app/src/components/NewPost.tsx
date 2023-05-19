import { useContext } from "react";
import createPost from "../logic/createPost";
import Context from "../pages/Context";

export default function NewPost(props: any) {
    const { alert } = useContext(Context)

    function createPostButton(event: any) {
        event.preventDefault();

        const userId = sessionStorage.userId;
        const text = event.target.elements.text.value;

        try {
            createPost(userId, text)

            props.onPostCreated()
        }
        catch (error: any) {
            alert(error.message)
        }
    }

    return <div className="create-post">
        <form onSubmit={createPostButton} className="new-post">
            <h2>New post</h2>
            <textarea name="text" cols="30" rows="10"></textarea>
            <button className="button" type="submit">Create</button>
            <a onClick={props.onBackNewPost} className="anchor" href="#">Back</a>
        </form>
    </div>
}