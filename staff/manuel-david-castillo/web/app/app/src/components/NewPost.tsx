import { createPost } from "../logic";

export default function NewPost(props) {
    function createPostButton(event) {
        event.preventDefault();

        const userId = sessionStorage.userId;
        const text = event.target.elements.text.value;

        
        try{
            createPost(userId, text)

            props.onBackNewPost()
        }
        catch(error) {
            alert(error.message)
        }
    }

    return <div className="create-post">
        <form onSubmit={createPostButton} className="new-post">
            <h2>New post</h2>
            <textarea name="text" cols="30" rows="10"></textarea>
            <button  className="button" type="submit">Create</button>
            <a onClick={props.onBackNewPost} className="anchor" href="#">Back</a>
        </form>
</div>
}