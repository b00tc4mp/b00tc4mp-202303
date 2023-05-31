import { authenticateUser, registerUser, updateUserPassword, createPost, giveMeThePosts, removePost, editPost } from "./logic";
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
        editAndRemove.classList.add("post-edit-remove")
        console.log("funciono");


        const buttonRemove: HTMLElement = document.createElement("button");
        editAndRemove.appendChild(buttonRemove)
        buttonRemove.innerText = "Remove"
        buttonRemove.onclick = function () {
          document.getElementsByTagName('body')[0].style.overflow = 'hidden'

          const containerRemove: HTMLDivElement = document.createElement("div")
          homePage.appendChild(containerRemove)
          containerRemove.classList.add("container-edit")

          const divRemove: HTMLDivElement = document.createElement("div")
          containerRemove.appendChild(divRemove)
          divRemove.classList.add("div-remove")
          divRemove.innerText = "Are you sure?"

          const divYesNo: HTMLDivElement = document.createElement("div")
          divRemove.appendChild(divYesNo)
          divYesNo.classList.add("div-yes-no")

          const yesButton: HTMLButtonElement = document.createElement("button")
          divYesNo.appendChild(yesButton)

          const noButton: HTMLButtonElement = document.createElement("button")
          divYesNo.appendChild(noButton)

          const anchorBackRemove: HTMLAnchorElement = document.createElement("a")
          divRemove.appendChild(anchorBackRemove)
          anchorBackRemove.classList.add("anchor-back")
          anchorBackRemove.innerText = "Back"
          anchorBackRemove.setAttribute("href", "")
          anchorBackRemove.onclick = function (event) {
            event.preventDefault()
            containerRemove.classList.add("off")

          }

          const buttonEdit: HTMLElement = document.createElement("button");
          editAndRemove.appendChild(buttonEdit)
          buttonEdit.innerText = "Edit"
          buttonEdit.onclick = function () {
            const containerEdit: HTMLDivElement = document.createElement("div")
            homePage.appendChild(containerEdit)
            containerEdit.classList.add("container-edit")

            const formEdit: HTMLFormElement = document.createElement("form")
            containerEdit.appendChild(formEdit)
            formEdit.classList.add("form-edit")
            formEdit.classList.add("form-post")

            const inputText: HTMLInputElement = document.createElement("input")
            formEdit.appendChild(inputText)
            inputText.classList.add("input-text-edit")
            inputText.value = post.text

            const buttonEditForm: HTMLButtonElement = document.createElement("button")
            formEdit.appendChild(buttonEditForm)
            buttonEditForm.classList.add("button-edit-form")
            buttonEditForm.innerText = "Save"

            formEdit.onsubmit = function (event) {
              event.preventDefault()
              editPost(inputText.value, post.id)

              containerEdit.classList.add("off")
              retrievePosts()
            }


            const anchorBack: HTMLAnchorElement = document.createElement("a")
            formEdit.appendChild(anchorBack)
            anchorBack.classList.add("anchor-back")
            anchorBack.innerText = "Back"
            anchorBack.setAttribute("href", "")
            anchorBack.onclick = function (event) {
              event.preventDefault()
              containerEdit.classList.add("off")
            }
          }
        }

      }
      ul.appendChild(li);
    })
    containerPosts.appendChild(ul);
  } catch (error: any) {
    alert(error.message)
  }
}



homePosts.querySelector<HTMLButtonElement>(".new-post-button")!.onclick = function (event) {
  event.preventDefault();

  containerNewPost.classList.remove("off");
}

containerNewPost.querySelector<HTMLButtonElement>(".button-post")!.onclick = function (event) {
  event.preventDefault();

  let userId = id;
  let text = containerNewPost.querySelector<HTMLInputElement>(".input-text")!.value

  try {
    createPost(userId, text);
    postForm.reset()

    alert("new post!")
    containerNewPost.classList.add("off")

    retrievePosts()
    containerNewPost.querySelector<HTMLInputElement>(".input-user")!.value = findUserById(id)!.name
  } catch (error: any) {
    alert(error.message)
  }
}

containerNewPost.querySelector<HTMLAnchorElement>(".back-new-post")!.onclick = function (event) {
  event.preventDefault();

  containerNewPost.classList.add("off")
}