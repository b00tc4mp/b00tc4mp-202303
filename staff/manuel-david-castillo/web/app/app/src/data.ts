/* Arrays de datos */
export type UserData = {
  id: string;
  name: string;
  email: string;
  password: string;
  favs: Array<string>;
  blocks: Array<string>
}

export type PostData = {
  id: string,
  user: string,
  text: string,
  date: Date,
  fav: boolean
}