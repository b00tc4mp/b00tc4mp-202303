import { UserData } from '../../data'

export default function findUserByEmail(email: string): UserData | null {
    const users = JSON.parse(localStorage.users)
    
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email)
            return user
    }

    return null
}