import { authenticateUser, registerUser, updateUserPassword, createPost, giveMeThePosts, removePost } from "./logic";
import { findUserById } from "./data";

let id: string;

const loginPage: HTMLDivElement = document.querySelector(".login")!;
const loginForm: HTMLFormElement = loginPage.querySelector("form")!;
const registerPage: HTMLDivElement = document.querySelector(".register")!;
const registerForm: HTMLFormElement = registerPage.querySelector("form")!;
const homePage: HTMLDivElement = document.querySelector(".home")!;
const homeForm: HTMLFormElement = homePage.querySelector("form")!;
const homePosts: HTMLDivElement = homePage.querySelector(".home-posts")!;
const containerPosts: HTMLDivElement = homePosts.querySelector(".posts")!;
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

function retrievePosts() {
  try {
    const posts = giveMeThePosts();

    containerPosts.innerHTML = "";

    const ul: HTMLUListElement = document.createElement("ul")

    posts.forEach(post => {
      const li: HTMLLIElement = document.createElement("li");
      li.classList.add("post")

      const divPostId: HTMLDivElement = document.createElement("div")
      li.appendChild(divPostId);
      divPostId.classList.add("post-name");
      const postId: HTMLParagraphElement = document.createElement("p");
      divPostId.appendChild(postId);
      postId.innerText = post.id;

      const divUserId: HTMLDivElement = document.createElement("div")
      li.appendChild(divUserId);
      divUserId.classList.add("post-name");
      const userId: HTMLParagraphElement = document.createElement("p");
      divUserId.appendChild(userId);
      userId.innerText = post.user;

      const divText: HTMLDivElement = document.createElement("div")
      li.appendChild(divText);
      divText.classList.add("post-name");
      const text: HTMLParagraphElement = document.createElement("p");
      divText.appendChild(text);
      text.innerText = post.text;

      const divDate: HTMLDivElement = document.createElement("div")
      li.appendChild(divDate);
      divDate.classList.add("post-name");
      const date: HTMLParagraphElement = document.createElement("p");
      divDate.appendChild(date);
      date.innerText = String(post.date).slice(0, 24)

      if (id === post.user) {
        const editAndRemove = document.createElement("div");
        li.appendChild(editAndRemove);
        editAndRemove.classList.add("post-name")
        console.log("funciono");


        const buttonRemove: HTMLElement = document.createElement("button");
        editAndRemove.appendChild(buttonRemove)
        buttonRemove.innerText = "Remove"
        buttonRemove.classList.add("button-remove")
        buttonRemove.classList.add(String(post.id))
        buttonRemove.onclick = function () {
          removePost(post.id)

          retrievePosts()
        }


        const buttonEdit: HTMLElement = document.createElement("button");
        editAndRemove.appendChild(buttonEdit)
        buttonEdit.innerText = "Edit"
        buttonEdit.classList.add("button-edit")
        buttonEdit.classList.add(String(post.id))
      }
      ul.appendChild(li);
    })

    containerPosts.appendChild(ul);
  } catch (error: any) {
    alert(error.message)
  }
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