import { UserData } from "../data";
import findUserById from "./helpers/findUserById";

export default function addFavoritePost(userId: string, postId: string) {
    let user: UserData | null = findUserById(userId);
    if (!user) throw new Error('user not found');
    if (user) {
        user.favs.push(postId)
    }
}