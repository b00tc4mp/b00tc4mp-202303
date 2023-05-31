import { retrieveFavPosts } from "../logic";
import { useState } from "react";
import EditePost from "./EditPost";
import DeletePost from "./DeletePost";
import { Post } from "../data";



function FavPosts() {
let favPosts: Array<Post> = [];

  try {
    favPosts = retrieveFavPosts(sessionStorage.userId);

  } catch (error: any) {
    alert(error.message)
  }
  

  function postOfUser(postId: string) {
    if (postId === sessionStorage.userId) {
      return true
    } else {
      return false
    }
  }

  const [viewEditPost, setViewEditPost] = useState(false)
  const [viewRemovePost, setViewRemovePost] = useState(false)

  function handleEditPostButton(postId: string, postText: string) {
    setViewEditPost(true)

    sessionStorage.postId = postId
    sessionStorage.postText = postText
  }

  function hideEditPostButton() {
    setViewEditPost(false)
  }

  function handleRemovePostButton(postId: string) {
    setViewRemovePost(true)

    sessionStorage.postId = postId
  }

  function hideRemovePostButton() {
    setViewRemovePost(false)
  }

    return <ul className="ul-post">
        {favPosts.map(post => <li className="post">
          <p className="post-name">{post.user}</p>
          <p className="post-name">{post.text}</p>
          <time className="post-name">{post.date.toLocaleString()}</time>
          {/* <div>
            {postOfUser(post.user) && <button onClick={() => handleEditPostButton(post.id, post.text)} className="button">Edit</button>}
            {postOfUser(post.user) && <button onClick={() => handleRemovePostButton(post.id)} className="button">Remove</button>}
          </div> */}
        </li>)}

        {/* {viewEditPost && <EditePost onBackEditPost = {hideEditPostButton}/>}
        {viewRemovePost && <DeletePost onBackRemovePost = {hideRemovePostButton}/>} */}
      </ul>
}

export default FavPosts;