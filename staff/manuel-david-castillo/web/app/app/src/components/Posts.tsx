import { useState, useEffect } from 'react'
import EditePost from './EditPost'
import DeletePost from './DeletePost'
import retrievePosts from '../logic/retrievePosts'
import toggleFavPost from '../logic/toggleFavPost'

export default function Posts({ lastUpdate }: { lastUpdate: number | null }): JSX.Element {
  const [viewUpdatePassword, setViewUpdatePassword] = useState(false)
  const [viewRemovePost, setViewRemovePost] = useState(false)
  const [viewEditPost, setViewEditPost] = useState(false)

  let _posts

  try {
    _posts = retrievePosts(sessionStorage.userId)
  } catch (error: any) {
    alert(error.message)
  }

  const [posts, setPosts] = useState(_posts)

  useEffect(() => {
    try {
      const posts = retrievePosts(sessionStorage.userId)
      setPosts(posts)
    } catch (error: any) {
      alert(error.message)
    }
  }, [lastUpdate])

  /* Eliminar post */
  function handleRemovePostButton(postId: string) {
    setViewRemovePost(true)

    sessionStorage.postId = postId
  }
  function hideRemovePostButton() {
    setViewRemovePost(false)

    const posts = retrievePosts(sessionStorage.userId)
    setPosts(posts)
  }

  /* Editar post */
  function handleEditPostButton(postId: string, postText: string) {
    setViewEditPost(true)

    sessionStorage.postId = postId
    sessionStorage.postText = postText
  }
  function hideEditPostButton() {
    setViewEditPost(false)

    const posts = retrievePosts(sessionStorage.userId)
    setPosts(posts)
  }

  /* Comprobar si el post es del usuario */
  function postOfUser(postId: string) {
    if (postId === sessionStorage.userId) {
      return true
    } else {
      return false
    }
  }

  /* Pone y quita los fav */
  function handleToggleFavPost(postId: string) {
    try {
      toggleFavPost(sessionStorage.userId, postId)

      const posts = retrievePosts(sessionStorage.userId)

      setPosts(posts)
    } catch (error: any) {
      alert(error.message)
    }
  }

  /* Hacer que se bloque la pantalla */
  document.body.style.overflow = (viewEditPost || viewRemovePost ||
    viewUpdatePassword) ? 'hidden' : 'auto'

  console.log('Posts -> render')

  /* Pinta el dom */
  return <ul className="ul-post">
    {posts!.map(post => <li className="post">
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