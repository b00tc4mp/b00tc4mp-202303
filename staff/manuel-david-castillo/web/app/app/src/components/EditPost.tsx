export default function EditePost(props) {
    return <div className="create-post">
        <div className="new-post">
            <textarea className="textarea" name="text" id="" cols="30" rows="10"></textarea>
            <p>Do you want edit this post?</p>
            <div>
                <button className="button">Yes</button>
                <button onClick={props.onBackEditPost} className="button">No</button>
            </div>
        </div>
    </div>
}