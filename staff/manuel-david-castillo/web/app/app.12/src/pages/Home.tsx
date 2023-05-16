import NewPost from "../components/NewPost"
import UpdatePassword from "../components/UpdatePassword"
import LogOut from "../components/LogOut"
import EditePost from "../components/EditPost"
import DeletePost from "../components/DeletePost"
import { useState } from "react"
import { posts } from "../data"
import {Routes, Route, Navigate, useNavigate, Link} from 'react-router-dom'


function HomePage (props: any) {
  const navigate = useNavigate()
  const [viewUpdatePassword, setViewUpdatePassword] = useState(false) 

  function handleUpdatePasswordClick() {
    setViewUpdatePassword(true)
  }

  function hideUpdatePasswordClick() {
    setViewUpdatePassword(false)
  }

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

  const [viewRemovePost, setViewRemovePost] = useState(false)

  function handleRemovePostButton(postId: string) {
    setViewRemovePost(true)

    sessionStorage.postId = postId
  }

  function hideRemovePostButton() {
    setViewRemovePost(false)
  }

  const [viewEditPost, setViewEditPost] = useState(false)

  function handleEditPostButton(postId: string, postText: string) {
    setViewEditPost(true)

    sessionStorage.postId = postId
    sessionStorage.postText = postText
  }

  function hideEditPostButton() {
    setViewEditPost(false)
  }

  function postOfUser(postId: string) {
    if (postId === sessionStorage.userId) {
      return true
    } else {
      return false
    }
  }
  
  document.body.style.overflow = (viewEditPost || viewNewPost || viewRemovePost ||
     viewUpdatePassword || viewLogout) ? 'hidden' : 'auto'

  return <div className="home page">
    <header className="home-header">
      <h1 className="home-title">Hola home!!</h1>

      <nav>
        
        <Link to={'/profile'} className="nav-profile nav-link">Profile</Link>
      </nav>
      <nav>
        <button className="nav-profile nav-link" onClick={handleLogout}>Logout</button>
      </nav>
    </header>

    <div>
      <ul className="ul-post">
        {posts.map(post => <li className="post">
          <p className="post-name">{post.user}</p>
          <p className="post-name">{post.text}</p>
          <time className="post-name">{post.date.toLocaleString()}</time>
          <div> 
            {postOfUser(post.user) && <button onClick={() => handleEditPostButton(post.id, post.text)} className="button">Edit</button>}
            <button onClick={() => handleRemovePostButton(post.id)} className="button">Remove</button>
          </div> 
          
        </li>)}
      </ul>
    </div> 

    {/* <Routes>
      
      <Route key={'logout'} path="/logout" element={<LogOut/>}/>
      <Route key={'new-post'} path="/new-post" element={<NewPost/>}/>
      <Route key={'edite-post'} path="/edite-post" element={<EditePost/>}/>
      <Route key={'delete-post'} path="/delete-post" element={<DeletePost/>}/>
    </Routes> */}
    
  <Routes>
    <Route key={'profile'} path="/profile" element={<UpdatePassword/>}/>
  </Routes>
    

    {viewUpdatePassword && <UpdatePassword onBack = {hideUpdatePasswordClick}/>}
    {viewLogout && <LogOut onBackHome = {hideBackLogin}/>}
    {viewNewPost && <NewPost onBackNewPost = {hideNewPostButton}/> }
    {viewEditPost && <EditePost onBackEditPost = {hideEditPostButton}/>}
    {viewRemovePost && <DeletePost onBackRemovePost = {hideRemovePostButton}/>}

    <footer className="home-footer">
            <button onClick={handleNewPostButton} className="create-post-button" >New post!!</button>
        </footer>
    
  </div>


    

}

export default HomePage