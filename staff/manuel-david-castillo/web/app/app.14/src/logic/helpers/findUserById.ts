import { User } from "../../data";
import { users } from "../../data";

export default function findUserById(id: String | null): User | null {
    for (var i = 0; i < users.length; i++) {
        let user = users[i];

        if (user.id === id) {
            return user;

        }
    }
    return null;
}