export default function(props: any) {
    return <div className="create-post">
                <div className="new-post">
                    <h2>Alert</h2>
                    <p>{props.message}</p>
                <button onClick={props.onAccept} className="button">Accept</button>
                </div>
            </div>
    }