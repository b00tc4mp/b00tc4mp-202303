import { User } from "../data";
import findUserByEmail from "./helpers/findByUserEmail";
import { users } from "../data";

export default function registerUser(name: string, email: string, password: string) {
    if (typeof name !== "string") throw new Error("name is not a string");
    if (!name) throw new Error("name is empty");
    if (typeof email !== "string") throw new Error("email is not a string");
    if (!email) throw new Error("email is empty");
    if (typeof password !== "string") throw new Error("password is not a string");
    if (!password) throw new Error("password is empty");

    const foundUser: User | null = findUserByEmail(email);

    if (foundUser) throw new Error("users already exists");

    let id: string;

    const lastUser = users[users.length - 1];

    if (lastUser) {
        const count = parseInt(lastUser.id.slice(5))

        id = "user-" + String(count + 1)
    } else {
        id = "user-1"
    }

    const user: User = {
        id: id,
        name: name,
        email: email,
        password: password,
        favs: [],
    };

    users.push(user);
}