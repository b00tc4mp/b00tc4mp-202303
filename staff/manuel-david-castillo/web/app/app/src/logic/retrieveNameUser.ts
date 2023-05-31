import findUserById from "./helpers/findUserById"

export default function retrieveNameUser(userId: string) {
    return findUserById(userId)?.name
}