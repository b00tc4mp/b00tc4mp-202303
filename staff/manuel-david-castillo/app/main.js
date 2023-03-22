let loginPage = {};
let createAccountPage = {};
let imageAndForm = {};
let homePage = {};
let calendar = {};
let calculator = {};

loginPage.container = document.querySelector(".log-in-form");
createAccountPage.container = document.querySelector(".create-account-form");
imageAndForm.container = document.querySelector(".image-and-form");
homePage.container = document.querySelector(".home-calendar");
calendar.container = document.querySelector(".calendar");
calculator.container = document.querySelector(".calculator");

loginPage.container.style.display = "flex";
createAccountPage.container.style.display = "none";
imageAndForm.container.style.display = "flex";
homePage.container.style.display = "none";
calendar.container.style.display = "none";
calculator.container.style.display = "none";

loginPage.container.querySelector("a").onclick = function (event) {
  event.preventDefault();

  loginPage.container.style.display = "none";
  createAccountPage.container.style.display = "flex";
};

createAccountPage.container.querySelector("a").onclick = function (event) {
  event.preventDefault();

  createAccountPage.container.style.display = "none";
  loginPage.container.style.display = "flex";
};

document.querySelector(".input-log-in").onclick = function (event) {
  event.preventDefault();
  console.log("hola");
  if (
    document.querySelector(".input-e-mail").value === "" ||
    document.querySelector(".input-password").value === ""
  ) {
    document.querySelector(".mensaje").innerText = "Campo incompleto";
    loginPage.container.querySelector(".mensaje").style.display = "flex";
  }
  if (
    (loginPage.container.querySelector(".input-e-mail").value ===
      "manuelda27999@gmail.com") &
    (loginPage.container.querySelector(".input-password").value === "123123")
  ) {
    document.querySelector(".image-and-form").style.display = "none";
    homePage.container.style.display = "flex";
  }
};

homePage.container.querySelector(".index-menu").onclick = function (event) {
  event.preventDefault();
  calculator.container.style.display = "none";
  calendar.container.style.display = "none";
  document.querySelector(".h2").innerText = "Menu";
};

homePage.container.querySelector(".index-calendar").onclick = function (event) {
  event.preventDefault();
  calculator.container.style.display = "none";
  calendar.container.style.display = "grid";
  document.querySelector(".h2").innerText = "Calendar";
};

homePage.container.querySelector(".index-calculator").onclick = function (
  event
) {
  event.preventDefault();
  calculator.container.style.display = "flex";
  calendar.container.style.display = "none";
  document.querySelector(".h2").innerText = "Calculator";
};

/* No funciona */
calculator.container.querySelector(".input-bench-press").onclick = function (
  event
) {
  event.preventDefault();
  console.log("funciono");
  calculator.container.querySelector(".result-1").innerText =
    Number(calculator.container.querySelector("kg-bench-press").value) /
    (1.0278 -
      0.0278 *
        Number(calculator.container.querySelector("reps-bench-press").value));
};

/*MENSAJE DE ERROR DE CREATE-ACCOUNT, NO FUNCIONA*/
/* document.querySelector("input-create-account").onclick = function (event) {
  event.preventDefault();
  if (
    document.querySelector(".name").value === "" ||
    document.querySelector(".last-name").value === "" ||
    document.querySelector(".input-e-mail").value === "" ||
    document.querySelector(".input-password").value === "" ||
    document.querySelector(".confirm-password").value === ""
  ) {
    document.querySelector(".mensaje").innerText = "Campo incompleto";
    loginPage.container.querySelector(".mensaje").style.display = "block";
  } else if (
    document.querySelector(".password").value !=
    document.querySelector(".confirm-password").value
  ) {
    document.querySelector(".mensaje").innerText = "Contraseña diferente";
  }
}; */

/*FUNCIONES DE LA CALCULADORA*/
/* document.querySelector("input-bench-press").onclick = function () {
  document.querySelector("result-1").innerText =
    Number(document.querySelector("kg-bench-press").value) /
    (1.0278 -
      0.0278 * Number(document.querySelector("reps-bench-press").value));
};

document.querySelector("input-pull-up").onclick = function () {
  document.querySelector("result-2").innerText =
    (Number(document.querySelector("kilos-2").value) +
      Number(document.querySelector("Bodyweight").value)) /
      (1.0278 - 0.0278 * Number(document.querySelector("reps-2").value)) -
    Number(document.querySelector("Bodyweight").value);
}; */
