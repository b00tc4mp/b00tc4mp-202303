import { PostData, UserData } from "../../data"
import User from "./User"

export default class Post {
    post: PostData
    fav: boolean = false
    user: User | null = null

    constructor(post: PostData, fav: boolean, user: UserData | null) {
        this.post = post
        this.fav = fav
        this.user = user ? new User(user) : null
    }

    get id() { return this.post.id }
    get text() { return this.post.text }
    get date() { return this.post.date }
}