export default function CreatePost(props) {
    return <div className="create-post">
        <div className="create-post-body">
            <h2>Create post</h2>

            <form className="create-post-form">
                <textarea name="text" cols="30" rows="10"></textarea>
                <button type="submit">Create</button>
                <button onClick={props.onCancel}>Cancel</button>
            </form>
        </div>
    </div>
}