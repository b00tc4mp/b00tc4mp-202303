import { findUserByEmail, users, User, findUserById, posts, Post } from "./data";
import { containerPost } from "./main"

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

export function retrievePosts() {
  let post: HTMLDivElement;

  containerPost.innerHTML = ''

  for (var i = 0; i < posts.length; i++) {
    post = document.createElement("div");
    let postName = document.createElement("div");
    let postText = document.createElement("div");
    let postDate = document.createElement("div");
    let pName = document.createElement("p");
    let pText = document.createElement("p");
    let pDate = document.createElement("p");

    pName.textContent = posts[i].user
    pText.textContent = posts[i].text;
    pDate.textContent = String(posts[0].date).slice(0, 24)

    containerPost.appendChild(post);
    post.appendChild(postName);
    post.appendChild(postText);
    post.appendChild(postDate);
    postName.appendChild(pName);
    postText.appendChild(pText);
    postDate.appendChild(pDate);

    post.classList.add("post")
    postName.classList.add("post-name")
    postText.classList.add("post-name")
    postDate.classList.add("post-name")
    pName.classList.add("p-post")
    pText.classList.add("p-post")
    pDate.classList.add("p-post")
  }
}


export function createPost(userId: string, text: string) {
  if (typeof text !== "string") throw new Error("userId is not a string");
  if (!text) throw new Error("empty text")

  let id: string;

  const lastPost = posts[posts.length - 1];

  if (lastPost) {
    const count = parseInt(lastPost.id.slice(5))

    id = "post-" + String(count + 1)
  } else {
    id = "post-1"
  }

  const post: Post = {
    id: id,
    user: userId,
    text: text,
    date: new Date()
  }

  posts.push(post)
}