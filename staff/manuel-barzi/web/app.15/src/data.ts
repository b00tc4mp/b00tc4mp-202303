export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type Post = {
    id: string,
    user: string,
    text: string,
    date: Date
}

export const users: Array<User> = []
export const posts: Array<Post> = []

const user: User = {
    id: 'user-1',
    name: 'Pepito Grillo',
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)

const post: Post = {
    id: 'post-1',
    user: 'user-1',
    text: 'Hola, Pepito!',
    date: new Date()
}

posts.push(post)

const user2: User = {
    id: 'user-2',
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '123123123'
}

users.push(user2)

const post2: Post = {
    id: 'post-2',
    user: 'user-2',
    text: 'Hola, Peter!',
    date: new Date()
}

posts.push(post2)

const user3: User = {
    id: 'user-3',
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '123123123'
}

users.push(user3)

const post3: Post = {
    id: 'post-3',
    user: 'user-3',
    text: 'Hola, Wendy!',
    date: new Date()
}

posts.push(post3)