import findUserById from './helpers/findUserById'
import Post from './types/Post'

export default function retrievePosts(userId: string): Array<Post> {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (!userId) throw new Error('userId is empty')

    const user = findUserById(userId)

    if (!user) throw new Error(`user with id ${userId} does not exist`)

    const posts = JSON.parse(localStorage.posts)

    return posts.map(post => new Post(post, user.favs.includes(post.id)))
}