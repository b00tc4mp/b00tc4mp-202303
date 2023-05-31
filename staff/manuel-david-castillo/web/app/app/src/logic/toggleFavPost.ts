import { UserData } from "../data";
import findUserById from "./helpers/findUserById";

export default function toggleFavPost(userId: string, postId: string) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (!userId) throw new Error('userId is empty')

    const user: UserData | null = findUserById(userId);
    if (!user) throw new Error('user not found')

    const users = JSON.parse(localStorage.users)

    const indexUser = users.findIndex((u: UserData) => u.id === user.id);

    const indexPostId = user.favs.indexOf(postId)

    if (indexPostId !== -1) {
        user.favs.splice(indexPostId, 1)
    } else {
        user.favs.push(postId)
    }

    users[indexUser] = user

    localStorage.users = JSON.stringify(users)
}