import { User } from "../data";
import findUserById from "./helpers/findUserById";

export default function deleteFavoritePost(userId: string, postId: string) {
    let user: User | null = findUserById(userId);
    if (!user) throw new Error('user not found');

    const index = user.favs.indexOf(postId)
    user.favs.splice(index, 1)
}