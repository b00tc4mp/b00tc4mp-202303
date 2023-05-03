export default function Alert(props) {
    return <div className="create-post">
        <div className="create-post-body">
            <h2>Alert</h2>

            <p>{props.message}</p>

            <button onClick={props.onAccept}>Accept</button>
        </div>
    </div>
}