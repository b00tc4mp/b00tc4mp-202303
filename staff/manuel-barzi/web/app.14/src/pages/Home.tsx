import { retrievePosts } from '../logic'
import CreatePost from '../components/CreatePost'
import { useState, useContext } from 'react'
import Context from '../Context'

export default function Home() {
    const [createPostVisible, setCreatePostVisible] = useState(false)

    const { toggleTheme } = useContext(Context)

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

            <button onClick={toggleTheme}>switch theme</button>
        </header>

        <div className="post-list">
            <ul>
                {posts.map(post => <li className="post">
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