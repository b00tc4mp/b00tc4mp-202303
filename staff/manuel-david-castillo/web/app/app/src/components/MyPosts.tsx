import { useState } from "react";
import Post from "../logic/types/Post";
import EditePost from "./EditPost";
import DeletePost from "./DeletePost";
import Block from "./Block";
import retrieveMyPosts from "../logic/retrieveMyPosts";
import toggleFavPost from "../logic/toggleFavPost";

function MyPosts() {
  /* Lanza mis posts */
  let _myPosts: Post[] = [];

  try {
    _myPosts = retrieveMyPosts(sessionStorage.userId)

  } catch (error: any) {
    alert(error.message)
  }

  const [myPosts, setMyPosts] = useState(_myPosts)

  /* Comprueba si el post es del usuario */
  const postOfUser = (postId: string | undefined) => postId === sessionStorage.userId

  /* Para editar los posts */
  const [viewEditPost, setViewEditPost] = useState(false)

  function handleEditPostButton(postId: string, postText: string) {
    setViewEditPost(true)

    sessionStorage.postId = postId
    sessionStorage.postText = postText
  }

  function hideEditPostButton() {
    setViewEditPost(false)
    setMyPosts(myPosts)
  }

  /* Para eliminar los posts */
  const [viewRemovePost, setViewRemovePost] = useState(false)

  function handleRemovePostButton(postId: string) {
    setViewRemovePost(true)

    sessionStorage.postId = postId
  }

  function hideRemovePostButton() {
    setViewRemovePost(false)
    setMyPosts(myPosts)
  }

  /* Bloquear usuario */
  const [viewBlockPost, setViewBlockPost] = useState(false)

  function handleUserBlock(userPost: string | undefined) {
    setViewBlockPost(true)

    sessionStorage.userPost = userPost
  }

  function hideUserBlock() {
    setViewBlockPost(false)

    const posts = retrieveMyPosts(sessionStorage.userId)
    setMyPosts(posts)
  }

  /* Para el poner y quitar fav */
  function handleToggleFavPost(postId: string) {
    try {
      toggleFavPost(sessionStorage.userId, postId)

      const favPosts = retrieveMyPosts(sessionStorage.userId)

      setMyPosts(favPosts)
    } catch (error: any) {
      alert(error.message)
    }
  }

  console.log('pinta myposts')

  /* Pinta el dom */
  return <ul className="ul-post">
    {_myPosts.map(post => <li className="post">
      <p className="post-name">{post.user?.name}</p>
      <p className="post-name">{post.text}</p>
      <time className="post-name">{post.date.toLocaleString()}</time>
      <div>
        {postOfUser(post.user?.id) && <button onClick={() => handleEditPostButton(post.id, post.text)} className="button">Edit</button>}
        {postOfUser(post.user?.id) && <button onClick={() => handleRemovePostButton(post.id)} className="button">Remove</button>}
        <button onClick={() => handleToggleFavPost(post.id)} className="button">{post.fav ? '⭐' : '☆'}</button>
      </div>
    </li>)}

    {viewEditPost && <EditePost onBackEditPost={hideEditPostButton} />}
    {viewRemovePost && <DeletePost onBackRemovePost={hideRemovePostButton} />}
    {viewBlockPost && <Block onBackBlockPost={hideUserBlock} />}

  </ul>
}

export default MyPosts;