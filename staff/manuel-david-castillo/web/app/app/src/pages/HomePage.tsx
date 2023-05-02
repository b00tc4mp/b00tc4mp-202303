import NewPost from "../components/NewPost"
import UpdatePassword from "../components/UpdatePassword"
import EditePost from "../components/EditPost"
import DeletePost from "../components/DeletePost"
import { useState } from "react"
import { posts } from "../data"

function HomePage (props) {
  const [viewUpdatePassword, setViewUpdatePassword] = useState(false) 

  function viewUpdatePasswordClick() {
    setViewUpdatePassword(true)
  }

  function hideUpdatePasswordClick() {
    setViewUpdatePassword(false)
  }

  const [viewNewPost, setViewNewPost] = useState(false)

  function viewNewPostButton() {
    setViewNewPost(true)
  }

  function hideNewPostButton() {
    setViewNewPost(false)
  }

  const [viewRemovePost, setViewRemovePost] = useState(false)

  function viewRemovePostButton() {
    setViewRemovePost(true)
  }

  function hideRemovePostButton() {
    setViewRemovePost(false)
  }

  const [viewEditPost, setViewEditPost] = useState(false)

  function viewEditPostButton() {
    setViewEditPost(true)
  }

  function hideEditPostButton() {
    setViewEditPost(false)
  }
  
  document.body.style.overflow = (viewEditPost || viewNewPost || viewRemovePost) ? 'hidden' : 'auto'

  return <div className="home page">
    <header className="home-header">
      <h1 className="home-title">Hola home!!</h1>

      <nav>
        <a onClick={viewUpdatePasswordClick} href="#" className="nav-profile nav-link">Update Password</a>
      </nav>
      <nav>
        <a onClick={props.onBackLogin} href="#" className="nav-profile nav-link">Back Log-in</a>
      </nav>
    </header>

    <div>
      <ul className="ul-post">
        {posts.map(post => <li className="post">
          <p className="post-name">{post.user}</p>
          <p className="post-name">{post.text}</p>
          <time className="post-name">{post.date.toLocaleString()}</time>
          <div> 
            <button onClick={viewEditPostButton} className="button">Edit</button>
            <button onClick={viewRemovePostButton} className="button">Remove</button>
          </div>
          
        </li>)}
      </ul>
    </div>

    {viewUpdatePassword && <UpdatePassword onBack = {hideUpdatePasswordClick}/>}
    {viewNewPost && <NewPost onBackNewPost = {hideNewPostButton}/> }
    {viewEditPost && <EditePost onBackEditPost = {hideEditPostButton}/>}
    {viewRemovePost && <DeletePost onBackRemovePost = {hideRemovePostButton}/>}

    <footer className="home-footer">
            <button onClick={viewNewPostButton} className="create-post-button" >New post!!</button>
        </footer>
    
  </div>


    

}

export default HomePage