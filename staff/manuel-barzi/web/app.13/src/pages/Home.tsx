import { retrievePosts } from '../logic.js'
import CreatePost from '../components/CreatePost.js'
import { useState } from 'react'

export default function Home() {
    const [createPostVisible, setCreatePostVisible] = useState(false)

    const posts = retrievePosts()

    function handleCreatePostShow() {
        setCreatePostVisible(true)
    }

    function handleCreatePostHide() {
        setCreatePostVisible(false)
    }

    return <div className="home page">
        <header className="home-header">
            <h1 className="home-title">hola home!</h1>

            <nav>
                <a href="" className="nav-profile nav-link">Profile</a>
            </nav>
        </header>

        <div className="post-list">
            <ul>
                {posts.map(post => <li>
                    <p>{post.user}</p>
                    <p>{post.text}</p>
                    <time>{post.date.toLocaleString()}</time>
                    <button>update</button>
                </li>)}
            </ul>
        </div>

        {createPostVisible && <CreatePost onCancel={handleCreatePostHide} />}

        <footer className="home-footer">
            <button className="create-post-button" onClick={handleCreatePostShow}>+</button>
        </footer>
    </div>
}