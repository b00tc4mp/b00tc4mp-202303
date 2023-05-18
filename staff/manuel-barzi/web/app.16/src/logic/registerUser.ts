import { UserData, users } from '../data'
import findUserByEmail from './helpers/findByUserEmail'

export default function registerUser(name: string, email: string, password: string) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (!name) throw new Error('name is empty')
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!email) throw new Error('email is empty')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (!password) throw new Error('password is empty')

    const foundUser: UserData | null = findUserByEmail(email)

    if (foundUser)
        throw new Error('user already exists')

    let id: string

    const lastUser = users[users.length - 1]

    if (lastUser) {
        const count = parseInt(lastUser.id.slice(5))

        id = `user-${count + 1}`
    } else id = 'user-1'

    const user: UserData = {
        id,
        name,
        email,
        password,
        favs: []
    }

    users.push(user)
}