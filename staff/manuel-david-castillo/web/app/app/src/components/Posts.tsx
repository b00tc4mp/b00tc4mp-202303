import { checkFavPost, retrievePosts } from '../logic'
import { useState } from 'react'
import { addFavoritePost, deleteFavoritePost } from '../logic'
import { Post } from '../data'
import EditePost from './EditPost'
import DeletePost from './DeletePost'

export default function Posts() {
  const [viewUpdatePassword, setViewUpdatePassword] = useState(false) 
  const [viewRemovePost, setViewRemovePost] = useState(false)
  const [viewEditPost, setViewEditPost] = useState(false)
  const [favPost, setFavPost] = useState(false)

  /* Eliminar post */
  function handleRemovePostButton(postId: string) {
    setViewRemovePost(true)

    sessionStorage.postId = postId
  }
  function hideRemovePostButton() {
    setViewRemovePost(false)
  }

  /* Editar post */
  function handleEditPostButton(postId: string, postText: string) {
    setViewEditPost(true)

    sessionStorage.postId = postId
    sessionStorage.postText = postText
  }
  function hideEditPostButton() {
    setViewEditPost(false)
  }

  /* Comprobar si el post es del usuario */
  function postOfUser(postId: string) {
    if (postId === sessionStorage.userId) {
      return true
    } else {
      return false
    }
  }
  
  /* Añadir un post a favoritos */
  function addFavPost(postId: string) {
    const userId = sessionStorage.userId

    try {
      addFavoritePost(userId ,postId); 

    } catch (error: any) {
      alert(error.message)
    }
   }

   function deleteFavPost(postId: string) {
    const userId = sessionStorage.userId

    try {
      deleteFavoritePost(userId ,postId); 

    } catch (error: any) {
      alert(error.message)
    }
   }

  /* Hacer que se bloque la pantalla */
  document.body.style.overflow = (viewEditPost || viewRemovePost ||
     viewUpdatePassword) ? 'hidden' : 'auto'


    let posts: Array<Post>

    try {
      posts = retrievePosts(sessionStorage.userId)
    } catch(error: any) {
      alert(error.message)
    }

  function handleFavPost(postId: string) {
    try {
      return checkFavPost(sessionStorage.userId, postId);
    } catch(error: any) {
      alert(error.message)
    }
  }

    return <ul className="ul-post">
        {posts!.map(post => <li className="post">
          <p className="post-name">{post.user}</p>
          <p className="post-name">{post.text}</p>
          <time className="post-name">{post.date.toLocaleString()}</time>
          <div> 
            {postOfUser(post.user) && <button onClick={() => handleEditPostButton(post.id, post.text)} className="button">Edit</button>}
            {postOfUser(post.user) && <button onClick={() => handleRemovePostButton(post.id)} className="button">Remove</button>}
            {handleFavPost(post.id) && <button onClick={() => deleteFavPost(post.id)} className="button">Quite fav</button>}
            {!handleFavPost(post.id) && <button onClick={() => addFavPost(post.id)} className="button">Add fav</button>}
          </div> 
          
        </li>)}

        {viewEditPost && <EditePost onBackEditPost = {hideEditPostButton}/>}
        {viewRemovePost && <DeletePost onBackRemovePost = {hideRemovePostButton}/>}
      </ul>


}