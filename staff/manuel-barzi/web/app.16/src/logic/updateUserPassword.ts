import { UserData, users } from '../data'
import findUserById from './helpers/findUserById'

export default function updateUserPassword(userId: string, password: string, newPassword: string, newPasswordConfirm: string) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (!userId) throw new Error('userId is empty')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (!password) throw new Error('password is empty')
    if (typeof newPassword !== 'string') throw new Error('newPassword is not a string')
    if (!newPassword) throw new Error('newPassword is empty')
    if (typeof newPasswordConfirm !== 'string') throw new Error('newPasswordConfirm is not a string')
    if (!newPasswordConfirm) throw new Error('newPasswordConfirm is empty')

    const foundUser: UserData | null = findUserById(userId)

    if (!foundUser)
        throw new Error('user not found')

    if (foundUser.password !== password)
        throw new Error('wrong password')

    if (newPassword !== newPasswordConfirm)
        throw new Error('password mismatch')

    foundUser.password = newPassword
}