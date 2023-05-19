import NewPost from "../components/NewPost"
import UpdatePassword from "../components/Profile"
import LogOut from "../components/LogOut"
import FavPosts from "../components/FavPosts"
import Posts from '../components/Posts'
import { useState } from "react"
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();

  /* Ver y ocultar Logout*/
  const [viewLogout, setViewLogout] = useState(false)

  function handleLogout() {
    setViewLogout(true)
  }

  function hideBackLogin() {
    setViewLogout(false)
  }

  /* Ver y ocultar la pestaña nuevo post */
  const [newPostVisible, setNewPostVisible] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<number | null>(null)

  function handleShowNewPost() {
    setNewPostVisible(true)
  }

  function handleHideNewPost() {
    setNewPostVisible(false)

    navigate('/') /* Esto no funciona */
  }

  function handlePostCreated() {
    setLastUpdate(Date.now())
    handleHideNewPost()
  }

  /* Bloque la pantalla */
  document.body.style.overflow = (viewLogout || newPostVisible) ? 'hidden' : 'auto'

  /* Pinta el dom */
  return <div className="home page">
    <header className="home-header">
      <h1 className="home-title"><Link to="/">Home</Link></h1>
      <nav>
        <Link to="/fav-posts" className="nav-profile nav-link">Favorite Posts</Link>
      </nav>
      <nav>
        <Link to="/profile" className="nav-profile nav-link">Profile</Link>
      </nav>
      <nav>
        <button className="nav-profile nav-link" onClick={handleLogout}>Logout</button>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<Posts lastUpdate={lastUpdate} />} />
      <Route path="/fav-posts" element={<FavPosts />} />
      <Route path="/profile" element={<UpdatePassword />} />
    </Routes>

    {viewLogout && <LogOut onBackHome={hideBackLogin} />}
    {newPostVisible && <NewPost onBackNewPost={handleHideNewPost} onPostCreated={handlePostCreated} />}

    <footer className="home-footer">
      <button onClick={handleShowNewPost} className="create-post-button" >New post!!</button>
    </footer>
  </div>
}

export default HomePage