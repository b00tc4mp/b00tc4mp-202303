import { UserData } from "../../data"

export default class User {
    user: UserData

    constructor(user: UserData) {
        this.user = user
    }

    get id() { return this.user.id }
    get name() { return this.user.name }
    get email() { return this.user.email }
    get blocks() { return this.user.blocks }
}