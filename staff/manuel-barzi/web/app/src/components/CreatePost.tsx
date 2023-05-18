import createPost from '../logic/createPost'

export default function CreatePost(props) {
    const handleCreatePost = event => {
        event.preventDefault()

        const text = event.target.text.value

        try {
            createPost(sessionStorage.userId, text)

            props.onPostCreated()
        } catch(error) {

        }
    }

    return <div className="create-post">
        <div className="create-post-body">
            <h2>Create post</h2>

            <form className="create-post-form" onSubmit={handleCreatePost}>
                <textarea name="text" cols="30" rows="10"></textarea>
                <button type="submit">Create</button>
                <button onClick={props.onCancel}>Cancel</button>
            </form>
        </div>
    </div>
}