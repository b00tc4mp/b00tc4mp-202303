import { PostData } from "../../data";
import { posts } from "../../data";

export default function findPostById(postId: String): PostData | null {
    for (var i = 0; i < posts.length; i++) {
        let post = posts[i];

        if (post.id === postId) {
            return post;
        }
    }

    return null
}