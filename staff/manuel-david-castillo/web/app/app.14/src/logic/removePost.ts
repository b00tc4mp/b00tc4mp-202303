import { posts } from "../data";

export default function removePost(postId: string) {
    if (typeof postId !== "string") throw new Error("postId is not a string");
    if (!postId) throw new Error("empty postId")

    const postIndex = posts.findIndex(post => post.id === postId)

    if (postIndex < 0) throw new Error(`post with id ${postId} not found`)

    posts.splice(postIndex, 1)
}