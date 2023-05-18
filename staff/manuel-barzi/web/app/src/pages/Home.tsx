import retrievePosts from '../logic/retrievePosts'
import CreatePost from '../components/CreatePost'
import { useState, useContext } from 'react'
import { Context, TContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import toggleFavPost from '../logic/toggleFavPost'

export default function Home() {
    const [createPostVisible, setCreatePostVisible] = useState(false)

    let _posts

    try {
        _posts = retrievePosts(sessionStorage.userId)
    } catch (error) {
        alert(error.message)
    }

    const [posts, setPosts] = useState(_posts)

    const navigate = useNavigate()

    const { toggleTheme } = useContext<TContext>(Context)

    function handleCreatePostShow() {
        setCreatePostVisible(true)
    }

    function handleCreatePostHide() {
        setCreatePostVisible(false)
    }

    function handleLogout() {
        delete sessionStorage.userId

        navigate('/login')
    }

    const handleToggleFavPost = postId => {
        try {
            toggleFavPost(sessionStorage.userId, postId)

            const posts = retrievePosts(sessionStorage.userId)

            setPosts(posts)
        } catch (error) {
            alert(error.message)
        }
    }
    
    const handlePostCreated = () => {
        try {
            const posts = retrievePosts(sessionStorage.userId)
            
            setPosts(posts)
            setCreatePostVisible(false)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="home page">
        <header className="home-header">
            <h1 className="home-title">hola home!</h1>

            <nav>
                <a href="" className="nav-profile nav-link">Profile</a>
            </nav>

            <button onClick={toggleTheme}>switch theme</button>
            <button onClick={handleLogout}>logout</button>
        </header>

        <div className="post-list">
            <ul>
                {posts.map(post => <li key={post.id} className="post">
                    <p>{post.user}</p>
                    <p>{post.text}</p>
                    <time>{post.date.toLocaleString()}</time>
                    <button>update</button>
                    <button onClick={() => handleToggleFavPost(post.id)}>{post.fav ? '⭐️' : '✩'}</button>
                </li>)}
            </ul>
        </div>

        {createPostVisible && <CreatePost onCancel={handleCreatePostHide} onPostCreated={handlePostCreated} />}

        <footer className="home-footer">
            <button className="create-post-button" onClick={handleCreatePostShow}>+</button>
        </footer>
    </div>
}