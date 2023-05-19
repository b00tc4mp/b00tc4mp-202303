import { User } from "../data";
import findUserById from "./helpers/findUserById";

export default function addFavoritePost(userId: string, postId: string) {
    let user: User | null = findUserById(userId);
    if (!user) throw new Error('user not found');
    if (user) {
        user.favs.push(postId)
    }

}