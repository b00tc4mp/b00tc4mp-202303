import { User } from "../../data";
import { users } from "../../data";

export default function findUserByEmail(email: String): User | null {
    for (var i = 0; i < users.length; i++) {
        let user = users[i];

        if (user.email === email) {
            return user;

        }
    }
    return null;
}