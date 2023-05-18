export type UserData = {
    id: string,
    name: string,
    email: string,
    password: string,
    favs: Array<string> //[string]
}

export type PostData = {
    id: string,
    user: string,
    text: string,
    date: Date
}