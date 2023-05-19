import { useState } from "react";
import EditePost from "./EditPost";
import DeletePost from "./DeletePost";
import { PostData } from "../data";
import retrieveFavPosts from "../logic/retrieveFavPosts";
import toggleFavPost from "../logic/toggleFavPost";



function FavPosts() {
  let _favPosts: Array<PostData> = [];

  try {
    _favPosts = retrieveFavPosts(sessionStorage.userId)

  } catch (error: any) {
    alert(error.message)
  }

  const [favPosts, setFavPosts] = useState(_favPosts)

  /* Verifica si el post es del usuario */
  function postOfUser(postId: string) {
    if (postId === sessionStorage.userId) {
      return true
    } else {
      return false
    }
  }

  /* Para editar los posts */
  const [viewEditPost, setViewEditPost] = useState(false)

  function handleEditPostButton(postId: string, postText: string) {
    setViewEditPost(true)

    sessionStorage.postId = postId
    sessionStorage.postText = postText
  }

  function hideEditPostButton() {
    setViewEditPost(false)
    setFavPosts(favPosts)
  }

  /* Para eliminar los posts */
  const [viewRemovePost, setViewRemovePost] = useState(false)

  function handleRemovePostButton(postId: string) {
    setViewRemovePost(true)

    sessionStorage.postId = postId
  }

  function hideRemovePostButton() {
    setViewRemovePost(false)
    setFavPosts(favPosts)
  }

  /* Para el poner y quitar fav */
  function handleToggleFavPost(postId: string) {
    try {
      toggleFavPost(sessionStorage.userId, postId)

      const favPosts = retrieveFavPosts(sessionStorage.userId)

      setFavPosts(favPosts)
    } catch (error: any) {
      alert(error.message)
    }
  }

  /* Pinta el dom */
  return <ul className="ul-post">
    {_favPosts.map(post => <li className="post">
      <p className="post-name">{post.user}</p>
      <p className="post-name">{post.text}</p>
      <time className="post-name">{post.date.toLocaleString()}</time>
      <div>
        {postOfUser(post.user) && <button onClick={() => handleEditPostButton(post.id, post.text)} className="button">Edit</button>}
        {postOfUser(post.user) && <button onClick={() => handleRemovePostButton(post.id)} className="button">Remove</button>}
        <button onClick={() => handleToggleFavPost(post.id)} className="button">{post.fav ? '⭐' : '☆'}</button>
      </div>
    </li>)}

    {viewEditPost && <EditePost onBackEditPost={hideEditPostButton} />}
    {viewRemovePost && <DeletePost onBackRemovePost={hideRemovePostButton} />}

  </ul>
}

export default FavPosts;