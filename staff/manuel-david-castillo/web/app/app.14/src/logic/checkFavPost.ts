import { User } from "../data";
import findUserById from "./helpers/findUserById";

export default function checkFavPost(userId: string, postId: string) {
    let user: User | null = findUserById(userId);

    if (user) {
        for (let i = 0; i < user.favs.length; i++) {
            if (user.favs[i] === postId) {
                return true
            }
        }
    }
    return false
}