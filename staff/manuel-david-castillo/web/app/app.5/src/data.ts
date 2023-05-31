export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export var users: Array<User> = [];

const user: User = {
  id: "user-1",
  name: "Pepito Grillo",
  email: "pepito@grillo.com",
  password: "123123123",
};

users.push(user);

const user2: User = {
  id: "user-2",
  name: "Peter Pan",
  email: "peter@pan.com",
  password: "123123123",
};

users.push(user2);

const user3: User = {
  id: "user-3",
  name: "Wendy Darling",
  email: "wendy@darling.com",
  password: "123123123",
};

users.push(user3);

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
