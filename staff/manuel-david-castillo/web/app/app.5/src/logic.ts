import { findUserByEmail, users, User, findUserById } from "./data";

export function authenticateUser(email: string, password: string): string {
  if (typeof email !== "string") throw new Error("email is not a string");
  if (!email) throw new Error("email is empty");
  if (typeof password !== "string") throw new Error("password is not string");
  if (!password) throw new Error("password is empty");

  const foundUser: User | null = findUserByEmail(email);

  if (!foundUser) {
    throw new Error("user not found");
  }

  if (foundUser.password !== password) {
    throw new Error("wrong password");
  }

  return foundUser.id;
}

export function registerUser(name: string, email: string, password: string) {
  if (typeof name !== "string") throw new Error("name is not a string");
  if (!name) throw new Error("name is empty");
  if (typeof email !== "string") throw new Error("email is not a string");
  if (!email) throw new Error("email is empty");
  if (typeof password !== "string") throw new Error("password is not a string");
  if (!password) throw new Error("password is empty");

  const foundUser: User | null = findUserByEmail(email);

  if (foundUser) throw new Error("users already exists");

  let id: string;

  const lastUser = users[users.length - 1];

  if (lastUser) {
    const count = parseInt(lastUser.id.slice(5))

    id = "user-" + String(count + 1)
  } else {
    id = "user-1"
  }

  const user: User = {
    id: id,
    name: name,
    email: email,
    password: password,
  };

  users.push(user);
}

export function updateUserPassword(
  id: string,
  password: string,
  newPassword: string,
  newPasswordConfirmation: string
) {
  if (typeof id !== "string") throw new Error("id is not a string");
  if (!id) throw new Error("id is empty");
  if (typeof password !== "string") throw new Error("password is not a string");
  if (!password) throw new Error("password is empty");
  if (typeof newPassword !== "string")
    throw new Error("new password is not a string");
  if (!newPassword) throw new Error("new password is empty");
  if (typeof newPasswordConfirmation !== "string")
    throw new Error("new password confirmation is not a string");
  if (!newPasswordConfirmation)
    throw new Error("new password confirmation is empty");

  var foundUser: User | null = findUserById(id);

  if (password !== foundUser!.password) throw new Error("wrong password");
  if (newPassword !== newPasswordConfirmation)
    throw new Error("different password");

  foundUser!.password = newPassword;
}
