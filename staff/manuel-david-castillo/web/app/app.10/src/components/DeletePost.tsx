import { removePost } from "../logic"

export default function DeletePost(props: any) {
    function deletePostButton(event: any) {
        event.preventDefault(); 

        try {
            removePost(sessionStorage.postId)

            props.onBackRemovePost()
        } catch (error: any) {
            alert(error.message)
        }
    }

    return <div className="create-post">
        <form onSubmit={deletePostButton} className="new-post">
            <p>Are you sure?</p>
            <div>
                <button className="button">Yes</button>
                <a href="#" onClick={props.onBackRemovePost} className="anchor">No</a>
            </div>
        </form>
    </div>
}