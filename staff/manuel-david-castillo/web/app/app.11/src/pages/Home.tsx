import NewPost from "../components/NewPost"
import UpdatePassword from "../components/UpdatePassword"
import LogOut from "../components/BackLogin"
import EditePost from "../components/EditPost"
import DeletePost from "../components/DeletePost"
import { useState } from "react"
import { posts } from "../data"


function HomePage (props: any) {

  const [viewUpdatePassword, setViewUpdatePassword] = useState(false) 

  function handleUpdatePasswordClick() {
    setViewUpdatePassword(true)
  }

  function hideUpdatePasswordClick() {
    setViewUpdatePassword(false)
  }

  const [viewBackLogin, setViewBackLogin] = useState(false)

  function handleBackLogin() {
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
     viewUpdatePassword || viewBackLogin) ? 'hidden' : 'auto'

  return <div className="home page">
    <header className="home-header">
      <h1 className="home-title">Hola home!!</h1>

      <nav>
        <a onClick={handleUpdatePasswordClick} href="#" className="nav-profile nav-link">Update Password</a>
      </nav>
      <nav>
        <a onClick={() => handleBackLogin()} href="#" className="nav-profile nav-link">Back Log-in</a>
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

    {viewUpdatePassword && <UpdatePassword onBack = {hideUpdatePasswordClick}/>}
    {viewBackLogin && <LogOut onBackHome = {hideBackLogin}/>}
    {viewNewPost && <NewPost onBackNewPost = {hideNewPostButton}/> }
    {viewEditPost && <EditePost onBackEditPost = {hideEditPostButton}/>}
    {viewRemovePost && <DeletePost onBackRemovePost = {hideRemovePostButton}/>}

    <footer className="home-footer">
            <button onClick={handleNewPostButton} className="create-post-button" >New post!!</button>
        </footer>
    
  </div>


    

}

export default HomePage