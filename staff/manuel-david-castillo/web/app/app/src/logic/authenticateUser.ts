import { User } from "../data";
import findUserByEmail from "./helpers/findByUserEmail";

export default function authenticateUser(email: string, password: string): string {
    if (typeof email !== "string") throw new Error("email is not a string");
    if (!email) throw new Error("email is empty");
    if (typeof password !== "string") throw new Error("password is not string");
    if (!password) throw new Error("password is empty");

    const foundUser: User | null = findUserByEmail(email);

    if (!foundUser) {
        throw new Error("user not found");
    }

    if (foundUser.password !== password) {
        throw new Error("wrong password");
    }

    return foundUser.id;
}