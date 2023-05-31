import { PostData } from "../../data";

export default function findPostById(postId: String): PostData | null {
    const posts: Array<PostData> = JSON.parse(localStorage.posts)

    for (var i = 0; i < posts.length; i++) {
        let post = posts[i];

        if (post.id === postId) {
            return post;
        }
    }

    return null
}