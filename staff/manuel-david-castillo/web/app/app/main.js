import { authenticateUser, registerUser, updateUserPassword } from "./logic";

var authenticatedEmail;

var loginPage = document.querySelector(".login");
var loginForm = loginPage.querySelector("form");
var registerPage = document.querySelector(".register");
var registerForm = registerPage.querySelector("form");
var homePage = document.querySelector(".home");
var homeForm = homePage.querySelector("form");

loginPage.querySelector("a").onclick = function (event) {
  event.preventDefault();

  loginPage.classList.add("off");
  registerPage.classList.remove("off");
};

registerPage.querySelector("a").onclick = function (event) {
  event.preventDefault();

  registerPage.classList.add("off");
  loginPage.classList.remove("off");
};

loginForm.onsubmit = function (event) {
  event.preventDefault();

  var email = loginForm.querySelector("input[name=email]").value;
  var password = loginForm.querySelector("input[name=password]").value;

  try {
    authenticateUser(email, password);

    authenticatedEmail = email;
    homePage.querySelector("input[name=email]").value = authenticatedEmail;

    loginForm.reset();

    loginPage.classList.add("off");
    homePage.classList.remove("off");
  } catch (error) {
    alert(error.message);
  }
};

registerForm.onsubmit = function (event) {
  event.preventDefault();

  var name = registerForm.querySelector("input[name=name]").value;
  var email = registerForm.querySelector("input[name=email]").value;
  var password = registerForm.querySelector("input[name=password]").value;

  try {
    registerUser(name, email, password);
    alert("user successfully registered");
    registerForm.reset();

    registerPage.classList.add("off");
    loginPage.classList.remove("off");
  } catch (error) {
    alert(error.message);
  }
};

homeForm.onsubmit = function (event) {
  event.preventDefault();

  var email = homeForm.querySelector("input[name=email]").value;
  var password = homeForm.querySelector("input[name=password]").value;
  var newPassword = homeForm.querySelector("input[name=new-password]").value;
  var newPasswordConfirmation = homeForm.querySelector(
    "input[name=new-password-confirmation]"
  ).value;

  try {
    updateUserPassword(email, password, newPassword, newPasswordConfirmation);
    alert("password successfully changed");
    homeForm.reset();

    homePage.classList.add("off");
    loginPage.classList.remove("off");
  } catch (error) {
    alert(error.message);
  }
};
