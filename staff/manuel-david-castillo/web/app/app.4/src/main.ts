import { authenticateUser, registerUser, updateUserPassword } from "./logic";

let authenticatedEmail: string | null;

const loginPage: Element = document.querySelector(".login")!;
const loginForm: HTMLFormElement = loginPage.querySelector("form")!;
const registerPage: Element = document.querySelector(".register")!;
const registerForm:HTMLFormElement = registerPage.querySelector("form")!;
const homePage: Element = document.querySelector(".home")!;
const homeForm: HTMLFormElement = homePage.querySelector("form")!;

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
    authenticateUser(email, password);

    authenticatedEmail = email;
    homePage.querySelector<HTMLInputElement>("input[name=email]")!.value = authenticatedEmail;

    loginForm.reset();

    loginPage.classList.add("off");
    homePage.classList.remove("off");
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

  var email: string = homeForm.querySelector<HTMLFormElement>("input[name=email]")!.value;
  var password: string = homeForm.querySelector<HTMLFormElement>("input[name=password]")!.value;
  var newPassword: string = homeForm.querySelector<HTMLFormElement>("input[name=new-password]")!.value;
  var newPasswordConfirmation: string = homeForm.querySelector<HTMLFormElement>(
    "input[name=new-password-confirmation]"
  )!.value;

  try {
    updateUserPassword(email, password, newPassword, newPasswordConfirmation);
    alert("password successfully changed");
    homeForm.reset();

    homePage.classList.add("off");
    loginPage.classList.remove("off");
  } catch (error: any) {
    alert(error.message);
  }
};
