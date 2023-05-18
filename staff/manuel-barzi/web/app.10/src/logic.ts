import { users, findUserByEmail, User } from './data.js'

export function authenticateUser(email: string, password: string) {
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

    const user: User = {
        name: name,
        email: email,
        password: password
    }

    users.push(user)
}

export function updateUserPassword(email: string, password: string, newPassword: string, newPasswordConfirm: string) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!email) throw new Error('email is empty')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (!password) throw new Error('password is empty')
    if (typeof newPassword !== 'string') throw new Error('newPassword is not a string')
    if (!newPassword) throw new Error('newPassword is empty')
    if (typeof newPasswordConfirm !== 'string') throw new Error('newPasswordConfirm is not a string')
    if (!newPasswordConfirm) throw new Error('newPasswordConfirm is empty')

    const foundUser: User | null  = findUserByEmail(email)

    if (!foundUser)
        throw new Error('user not found')

    if (foundUser.password !== password)
        throw new Error('wrong password')

    if (newPassword !== newPasswordConfirm)
        throw new Error('password mismatch')

    foundUser.password = newPassword
}