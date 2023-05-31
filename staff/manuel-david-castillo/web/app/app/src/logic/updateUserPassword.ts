import { UserData } from "../data";
import findUserById from "./helpers/findUserById";

export default function updateUserPassword(
    id: string,
    password: string,
    newPassword: string,
    newPasswordConfirmation: string
) {
    if (typeof id !== "string") throw new Error("id is not a string");
    if (!id) throw new Error("id is empty");
    if (typeof password !== "string") throw new Error("password is not a string");
    if (!password) throw new Error("password is empty");
    if (typeof newPassword !== "string")
        throw new Error("new password is not a string");
    if (!newPassword) throw new Error("new password is empty");
    if (typeof newPasswordConfirmation !== "string")
        throw new Error("new password confirmation is not a string");
    if (!newPasswordConfirmation)
        throw new Error("new password confirmation is empty");

    const user: UserData | null = findUserById(id);
    if (!user) throw new Error('user not found')

    const users = JSON.parse(localStorage.users)

    const indexUser = users.findIndex((u: UserData) => u.id === user.id);

    if (password !== user!.password) throw new Error("wrong password");
    if (newPassword !== newPasswordConfirmation)
        throw new Error("different password");

    user!.password = newPassword;

    users[indexUser] = user

    localStorage.users = JSON.stringify(users)
}