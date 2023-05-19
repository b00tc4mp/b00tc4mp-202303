/* Arrays de datos */
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  favs: Array<string>;
}

export type PostData = {
  id: string,
  user: string,
  text: string,
  date: Date,
  fav: boolean
}

export let users: Array<User> = [];
export let posts: Array<PostData> = [];

const user: User = {
  id: "user-1",
  name: "Pepito Grillo",
  email: "pepito@grillo.com",
  password: "123123123",
  favs: [],
};

users.push(user);

const post: PostData = {
  id: "post-1",
  user: "user-1",
  text: "Hola, soy Pepito",
  date: new Date(),
  fav: false
}

posts.push(post);

const user2: User = {
  id: "user-2",
  name: "Peter Pan",
  email: "peter@pan.com",
  password: "123123123",
  favs: ['post-1', 'post-2'],
};

users.push(user2);

const post2: PostData = {
  id: "post-2",
  user: "user-2",
  text: "Hola, soy Peter",
  date: new Date(),
  fav: false
}

posts.push(post2);

const user3: User = {
  id: "user-3",
  name: "Wendy Darling",
  email: "wendy@darling.com",
  password: "123123123",
  favs: [],
};

users.push(user3);

const post3: PostData = {
  id: "post-3",
  user: "user-3",
  text: "Hola, soy Wendy",
  date: new Date(),
  fav: false
}

posts.push(post3);

const post4: PostData = {
  id: "post-4",
  user: "user-3",
  text: "hey que pasa fieras, aquí estamos de fiesta reloca uuuuuh",
  date: new Date(),
  fav: false
}

posts.push(post4);