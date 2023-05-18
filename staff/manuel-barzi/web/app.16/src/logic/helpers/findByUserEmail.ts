import { users, UserData } from '../../data'

export default function findUserByEmail(email: string): UserData | null {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email)
            return user
    }

    return null
}