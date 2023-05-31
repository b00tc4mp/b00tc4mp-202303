import findUserById from "./helpers/findUserById";
import { PostData, UserData } from "../data";
import Post from "./types/Post";

export default function retrieveFavPosts(userId: string) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (!userId) throw new Error('userId is empty')

    const user: UserData | null = findUserById(userId);
    if (!user) throw new Error('user not found')

    const posts: Array<PostData> = JSON.parse(localStorage.posts)

    let recoveredPosts = posts.map(post => new Post(post, user!.favs.includes(post.id), findUserById(post.user)));
    let favPosts: Array<Post> = [];

    recoveredPosts.forEach((element) => {
        if (element.fav) {
            favPosts.push(element)
        }
    }
    )

    return favPosts
}