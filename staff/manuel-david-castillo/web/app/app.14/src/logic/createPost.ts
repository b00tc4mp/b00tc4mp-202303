import { posts, PostData } from "../data";

export default function createPost(userId: string, text: string) {
    if (typeof text !== "string") throw new Error("userId is not a string");
    if (!text) throw new Error("empty text")

    let id: string;

    const lastPost = posts[posts.length - 1];

    if (lastPost) {
        const count = parseInt(lastPost.id.slice(5))

        id = "post-" + String(count + 1)
    } else {
        id = "post-1"
    }

    const post: PostData = {
        id: id,
        user: userId,
        text: text,
        date: new Date()
    }

    posts.push(post)
}