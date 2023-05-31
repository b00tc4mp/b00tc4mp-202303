import { useState, useEffect } from 'react'
import EditePost from './EditPost'
import DeletePost from './DeletePost'
import Block from './Block'
import retrievePosts from '../logic/retrievePosts'
import toggleFavPost from '../logic/toggleFavPost'
import Post from '../logic/types/Post'

export default function Posts({ lastUpdate }: { lastUpdate: number | null }): JSX.Element {
  const [viewUpdatePassword, setViewUpdatePassword] = useState(false)

  /* Lanza los posts */
  let _posts: Array<Post> = [];

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
  const [viewRemovePost, setViewRemovePost] = useState(false)

  function handleRemovePostButton(postId: string) {
    setViewRemovePost(true)

    sessionStorage.postId = postId
  }
  function hideRemovePostButton() {
    setViewRemovePost(false)

    const posts = retrievePosts(sessionStorage.userId)
    setPosts(posts)
  }

  /* Bloquear usuario */
  const [viewBlockPost, setViewBlockPost] = useState(false)

  function handleUserBlock(userPost: string | undefined) {
    setViewBlockPost(true)

    sessionStorage.userPost = userPost
  }

  function hideUserBlock() {
    setViewBlockPost(false)

    const posts = retrievePosts(sessionStorage.userId)
    setPosts(posts)
  }

  /* Editar post */
  const [viewEditPost, setViewEditPost] = useState(false)

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
  const postOfUser = (postId: string | undefined) => postId === sessionStorage.userId

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

  /* Pinta el dom */
  return <ul className="ul-post">
    {posts.map(post => <li className="post">
      <p className="post-name"> {post.user?.name}</p>
      <p className="post-name"> {post.text}</p>
      <time className="post-name"> {post.date.toLocaleString()}</time>
      <div>
        {postOfUser(post.user?.id) && <button onClick={() => handleEditPostButton(post.id, post.text)} className="button">Edit</button>}
        {postOfUser(post.user?.id) && <button onClick={() => handleRemovePostButton(post.id)} className="button">Remove</button>}
        <button onClick={() => handleToggleFavPost(post.id)} className="button">{post.fav ? '⭐' : '☆'}</button>
        {!postOfUser(post.user?.id) && <button onClick={() => handleUserBlock(post.user?.id)} className='button'>Bloquear</button>}
      </div>
    </li>)}

    {viewEditPost && <EditePost onBackEditPost={hideEditPostButton} />}
    {viewRemovePost && <DeletePost onBackRemovePost={hideRemovePostButton} />}
    {viewBlockPost && <Block onBackBlockPost={hideUserBlock} />}

  </ul>
}