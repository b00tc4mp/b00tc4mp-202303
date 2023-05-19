import { posts } from "../data";

export default function editPost(postUser: string, postId: string, newText: string) {
    if (typeof newText !== "string") throw new Error("newText is not a string");
    if (!newText) throw new Error("empty new text")
    if (typeof postId !== "string") throw new Error("postId is not a string");
    if (!postId) throw new Error("empty postId")

    if (postUser !== sessionStorage.userId) throw new Error('Incorrect user')

    const postIndex = posts.findIndex(post => post.id === postId)
    if (postIndex < 0) throw new Error(`post with id ${postId} not found`)

    posts[postIndex].text = newText
    posts[postIndex].date = new Date()
}