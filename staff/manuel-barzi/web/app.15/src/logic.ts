import { users, posts, User, Post } from './data'

export function authenticateUser(email: string, password: string): string {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!email) throw new Error('email is empty')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (!password) throw new Error('password is empty')

    const foundUser: User | null = findUserByEmail(email)

    if (!foundUser)
        throw new Error('user not found')

    if (foundUser.password !== password) {
        throw new Error('wrong password')
    }

    return foundUser.id
}

export function registerUser(name: string, email: string, password: string) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (!name) throw new Error('name is empty')
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!email) throw new Error('email is empty')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (!password) throw new Error('password is empty')

    const foundUser: User | null = findUserByEmail(email)

    if (foundUser)
        throw new Error('user already exists')

    let id: string

    const lastUser = users[users.length - 1]

    if (lastUser) {
        const count = parseInt(lastUser.id.slice(5))

        id = `user-${count + 1}`
    } else id = 'user-1'

    const user: User = {
        id,
        name,
        email,
        password
    }

    users.push(user)
}

export function updateUserPassword(id: string, password: string, newPassword: string, newPasswordConfirm: string) {
    if (typeof id !== 'string') throw new Error('id is not a string')
    if (!id) throw new Error('id is empty')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (!password) throw new Error('password is empty')
    if (typeof newPassword !== 'string') throw new Error('newPassword is not a string')
    if (!newPassword) throw new Error('newPassword is empty')
    if (typeof newPasswordConfirm !== 'string') throw new Error('newPasswordConfirm is not a string')
    if (!newPasswordConfirm) throw new Error('newPasswordConfirm is empty')

    const foundUser: User | null = findUserById(id)

    if (!foundUser)
        throw new Error('user not found')

    if (foundUser.password !== password)
        throw new Error('wrong password')

    if (newPassword !== newPasswordConfirm)
        throw new Error('password mismatch')

    foundUser.password = newPassword
}

export function createPost(userId: string, text: string) {
    let id: string

    const lastPost = posts[posts.length - 1]

    if (lastPost) {
        const count = parseInt(lastPost.id.slice(5))

        id = `post-${count + 1}`
    } else id = 'post-1'

    const post: Post = {
        id,
        user: userId,
        text,
        date: new Date()
    }

    posts.push(post)
}

export function retrievePosts() {
    return posts
}

// helpers

function findUserByEmail(email: string): User | null {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email)
            return user
    }

    return null
}

function findUserById(id: string): User | null {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.id === id)
            return user
    }

    return null
}