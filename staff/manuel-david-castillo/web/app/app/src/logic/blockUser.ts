import findUserById from "./helpers/findUserById";
import { UserData } from "../data";

export default function addUserToBlocked(userId: string, userBlock: string | undefined) {
    let user: UserData | null = findUserById(userId);
    if (!user) throw new Error('user not found');

    const users: Array<UserData> = JSON.parse(localStorage.users)

    const indexUser = users.findIndex((u: UserData) => u.id === user!.id);

    if (typeof userBlock === undefined) throw new Error('user id is undefined')

    if (!('blocks' in user)) {
        user.blocks = []
    }

    if (user.blocks.includes(userBlock!)) throw new Error('user already blocked');

    user.blocks.push(userBlock!)

    users[indexUser] = user

    localStorage.users = JSON.stringify(users)
}