import findUserById from "./helpers/findUserById";
import { PostData, UserData } from "../data";
import Post from "./types/Post";

export default function retrieveMyPosts(userId: string) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (!userId) throw new Error('userId is empty')

    const user: UserData | null = findUserById(userId);
    if (!user) throw new Error('user not found')

    const posts: Array<PostData> = JSON.parse(localStorage.posts)

    let recoveredPosts = posts.map(post => new Post(post, user!.favs.includes(post.id), findUserById(post.user)));
    let myPosts: Array<Post> = [];

    recoveredPosts.forEach((element) => {
        if (element.user?.id === userId) {
            myPosts.push(element)
        }
    }
    )

    return myPosts
}