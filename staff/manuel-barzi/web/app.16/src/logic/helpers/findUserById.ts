import { UserData, users } from '../../data'

export default function findUserById(id: string): UserData | null {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.id === id)
            return user
    }

    return null
}