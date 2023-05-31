import { authenticateUser, registerUser, updateUserPassword, retrievePosts, createPost } from "./logic";
import { findUserById } from "./data";

let id: string;

const loginPage: HTMLDivElement = document.querySelector(".login")!;
const loginForm: HTMLFormElement = loginPage.querySelector("form")!;
const registerPage: HTMLDivElement = document.querySelector(".register")!;
const registerForm: HTMLFormElement = registerPage.querySelector("form")!;
const homePage: HTMLDivElement = document.querySelector(".home")!;
const homeForm: HTMLFormElement = homePage.querySelector("form")!;
export const homePosts: HTMLDivElement = homePage.querySelector(".home-posts")!;
export const containerPost: HTMLDivElement = homePosts.querySelector(".posts")!;
const containerNewPost: HTMLDivElement = homePage.querySelector(".new-post")!;
const postForm: HTMLFormElement = homePage.querySelector(".form-post")!;

loginPage.querySelector("a")!.onclick = function (event) {
  event.preventDefault();

  loginPage.classList.add("off");
  registerPage.classList.remove("off");
};

registerPage.querySelector("a")!.onclick = function (event) {
  event.preventDefault();

  registerPage.classList.add("off");
  loginPage.classList.remove("off");
};

loginForm.onsubmit = function (event) {
  event.preventDefault();

  const email: string = loginForm.querySelector<HTMLInputElement>("input[name=email]")!.value;
  const password: string = loginForm.querySelector<HTMLInputElement>("input[name=password]")!.value;

  try {
    id = authenticateUser(email, password);

    loginForm.reset();

    loginPage.classList.add("off");
    homePage.classList.remove("off");
    retrievePosts();

    containerNewPost.querySelector<HTMLInputElement>(".input-user")!.value = findUserById(id)!.name
  } catch (error: any) {
    alert(error.message);
  }
};

registerForm.onsubmit = function (event) {
  event.preventDefault();

  var name: string = registerForm.querySelector<HTMLInputElement>("input[name=name]")!.value;
  var email: string = registerForm.querySelector<HTMLInputElement>("input[name=email]")!.value;
  var password: string = registerForm.querySelector<HTMLInputElement>("input[name=password]")!.value;

  try {
    registerUser(name, email, password);
    alert("user successfully registered");
    registerForm.reset();

    registerPage.classList.add("off");
    loginPage.classList.remove("off");
  } catch (error: any) {
    alert(error.message);
  }
};

homeForm.onsubmit = function (event) {
  event.preventDefault();

  let password: string = homeForm.querySelector<HTMLFormElement>("input[name=password]")!.value;
  let newPassword: string = homeForm.querySelector<HTMLFormElement>("input[name=new-password]")!.value;
  let newPasswordConfirmation: string = homeForm.querySelector<HTMLFormElement>(
    "input[name=new-password-confirmation]"
  )!.value;

  try {
    updateUserPassword(id, password, newPassword, newPasswordConfirmation);
    alert("password successfully changed");
    homeForm.reset();

    homePage.classList.add("off");
    loginPage.classList.remove("off");
  } catch (error: any) {
    alert(error.message);
  }
};

homePage.querySelector<HTMLAnchorElement>(".a-profile")!.onclick = function (event) {
  event.preventDefault();

  homeForm.classList.remove("off");
  homePosts.classList.add("off");
}

homePosts.querySelector<HTMLButtonElement>(".new-post-buttom")!.onclick = function (event) {
  event.preventDefault();

  containerNewPost.classList.remove("off");
}

containerNewPost.querySelector<HTMLButtonElement>(".buttom-post")!.onclick = function (event) {
  event.preventDefault();

  let userId = id;
  let text = containerNewPost.querySelector<HTMLInputElement>(".input-text")!.value

  try {
    createPost(userId, text);
    postForm.reset()

    alert("new post!")
    containerNewPost.classList.add("off")

    retrievePosts()
  } catch (error: any) {
    alert(error.message)
  }
} 