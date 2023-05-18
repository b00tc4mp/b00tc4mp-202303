import findUserById from "./helpers/findUserById";
import { User } from "../data";
import { posts } from "../data";
import Post from "./types/PostType";

export default function retrievePosts(userId: string) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (!userId) throw new Error('userId is empty')

    const user: User | null = findUserById(userId);
    if (!user) throw new Error('user not found')

    let recoveredPosts = posts.map(post => new Post(post, user!.favs.includes(post.id)));

    return recoveredPosts
}