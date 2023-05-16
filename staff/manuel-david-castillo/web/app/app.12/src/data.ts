/* Arrays de datos */
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  favs: Array<string>;
}

export type Post = {
  id: string,
  user: string,
  text: string,
  date: Date,
}

export let users: Array<User> = [];
export let posts: Array<Post> = [];

const user: User = {
  id: "user-1",
  name: "Pepito Grillo",
  email: "pepito@grillo.com",
  password: "123123123",
  favs: [],
};

users.push(user);

const post: Post = {
  id: "post-1",
  user: "user-1",
  text: "Hola, soy Pepito",
  date: new Date()
}

posts.push(post);

const user2: User = {
  id: "user-2",
  name: "Peter Pan",
  email: "peter@pan.com",
  password: "123123123",
};

users.push(user2);

const post2: Post = {
  id: "post-2",
  user: "user-2",
  text: "Hola, soy Peter",
  date: new Date()
}

posts.push(post2);

const user3: User = {
  id: "user-3",
  name: "Wendy Darling",
  email: "wendy@darling.com",
  password: "123123123",
};

users.push(user3);

const post3: Post = {
  id: "post-3",
  user: "user-3",
  text: "Hola, soy Wendy",
  date: new Date()
}

posts.push(post3);

const post4: Post = {
  id: "post-4",
  user: "user-3",
  text: "hey que pasa fieras, aquí estamos de fiesta reloca uuuuuh",
  date: new Date()
}

posts.push(post4);

/* Funciones */
export function findUserByEmail(email: String): User | null {
  for (var i = 0; i < users.length; i++) {
    let user = users[i];

    if (user.email === email) {
      return user;

    }
  }
  return null;
}

export function findUserById(id: String | null): User | null {
  for (var i = 0; i < users.length; i++) {
    let user = users[i];

    if (user.id === id) {
      return user;

    }
  }
  return null;
}

export function findPostById(postId: String): Post | null {
  for (var i = 0; i < users.length; i++) {
    let post = posts[i];

    if (post.id === postId) {
      return post;
    }
  }

  return null
}