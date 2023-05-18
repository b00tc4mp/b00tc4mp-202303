export type UserData = {
    id: string,
    name: string,
    email: string,
    password: string,
    favs: Array<string> //[string]
}

export type PostData = {
    id: string,
    user: string,
    text: string,
    date: Date
}

export const users: Array<UserData> = []
export const posts: Array<PostData> = []

const user: UserData = {
    id: 'user-1',
    name: 'Pepito Grillo',
    email: 'pepito@grillo.com',
    password: '123123123',
    favs: []
}

users.push(user)

const post: PostData = {
    id: 'post-1',
    user: 'user-1',
    text: 'Hola, Pepito!',
    date: new Date()
}

posts.push(post)

const user2: UserData = {
    id: 'user-2',
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '123123123',
    favs: []
}

users.push(user2)

const post2: PostData = {
    id: 'post-2',
    user: 'user-2',
    text: 'Hola, Peter!',
    date: new Date()
}

posts.push(post2)

const user3: UserData = {
    id: 'user-3',
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '123123123',
    favs: []
}

users.push(user3)

const post3: PostData = {
    id: 'post-3',
    user: 'user-3',
    text: 'Hola, Wendy!',
    date: new Date()
}

posts.push(post3)