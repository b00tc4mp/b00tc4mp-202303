import { PostData } from '../data'

export default function createPost(userId: string, text: string) {
    let id: string

    const posts = JSON.parse(localStorage.posts)

    const lastPost = posts[posts.length - 1]

    if (lastPost) {
        const count = parseInt(lastPost.id.slice(5))

        id = `post-${count + 1}`
    } else id = 'post-1'

    const post: PostData = {
        id,
        user: userId,
        text,
        date: new Date()
    }

    posts.push(post)

    localStorage.posts = JSON.stringify(posts)
}
