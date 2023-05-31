import { UserData } from "../../data";

export default function findUserById(id: String | null): UserData | null {
    const users = JSON.parse(localStorage.users)

    for (var i = 0; i < users.length; i++) {
        const user = users[i];

        if (user.id === id) {
            return user;

        }
    }

    return null;
}