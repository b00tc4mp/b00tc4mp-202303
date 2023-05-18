import { PostData } from '../../data'

export default class Post {
    post: PostData
    fav: boolean = false

    constructor(post: PostData, fav: boolean = false) {
        this.post = post
        this.fav = fav
    }

    get id() { return this.post.id }
    get user() { return this.post.user }
    get text() { return this.post.text }
    get date() { return this.post.date }
}