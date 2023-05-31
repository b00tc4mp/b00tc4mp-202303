import { UserData } from "../../data";

export default function findUserByEmail(email: String): UserData | null {
    const users = localStorage.users ? JSON.parse(localStorage.users) : []

    for (var i = 0; i < users.length; i++) {
        let user = users[i];

        if (user.email === email) {
            return user;

        }
    }
    return null;
}