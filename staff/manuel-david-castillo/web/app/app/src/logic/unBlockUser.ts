import findPostById from "./helpers/findPostById";
import { UserData } from "../data";
import findUserById from "./helpers/findUserById";

export default function removeUserFromBlocks(userId: string, userBlock: string | undefined) {
    let user: UserData | null = findUserById(userId);
    if (!user) throw new Error('user not found');

    const users: Array<UserData> = JSON.parse(localStorage.users)

    const indexUser = users.findIndex((u: UserData) => u.id === user!.id);

    if (typeof userBlock === undefined) throw new Error('user id is undefined')

    if (!('blocks' in user)) {
        user.blocks = []
    }

    const postIndex = user.blocks.findIndex(_userBlock => userBlock === _userBlock)

    user.blocks.splice(postIndex, 1)

    users[indexUser] = user

    localStorage.users = JSON.stringify(users)
}