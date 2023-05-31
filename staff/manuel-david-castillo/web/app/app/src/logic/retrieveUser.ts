import findUserById from "./helpers/findUserById";
import User from "./types/User"

export default function retrieveUser(userId: string) {
    const user = findUserById(userId)

    if (!user) throw new Error(`user with id ${userId} not found`)

    return new User(user)
}