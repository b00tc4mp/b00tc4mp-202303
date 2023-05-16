import NewPost from "../components/NewPost"
import UpdatePassword from "../components/Profile"
import LogOut from "../components/LogOut"
import { useState } from "react"
import {Routes, Route, Link} from 'react-router-dom'
import FavPosts from "../components/FavPosts"
import Posts from '../components/Posts'


function HomePage (props: any) {
  const [viewLogout, setViewBackLogin] = useState(false)

  function handleLogout() {
    setViewBackLogin(true)
  }

  function hideBackLogin() {
    setViewBackLogin(false)
  }

  const [viewNewPost, setViewNewPost] = useState(false)

  function handleNewPostButton() {
    setViewNewPost(true)
  }

  function hideNewPostButton() {
    setViewNewPost(false)
  }

  document.body.style.overflow = (viewLogout || viewNewPost) ? 'hidden' : 'auto'

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
    <Route path="/" element={<Posts/>}/>
    <Route path="/fav-posts" element={<FavPosts/>}/>
    <Route path="/profile" element={<UpdatePassword/>}/>
  </Routes>
    
    {viewLogout && <LogOut onBackHome = {hideBackLogin}/>}
    {viewNewPost && <NewPost onBackNewPost = {hideNewPostButton}/> }
    
    <footer className="home-footer">
            <button onClick={handleNewPostButton} className="create-post-button" >New post!!</button>
        </footer>
  </div>


    

}

export default HomePage