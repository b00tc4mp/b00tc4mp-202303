export default function DeletePost(props) {
    return <div className="create-post">
        <div className="new-post">
            <p>Are you sure?</p>
            <div>
                <button className="button">Yes</button>
                <button onClick={props.onBackRemovePost} className="button">No</button>
            </div>
        </div>
    </div>
}