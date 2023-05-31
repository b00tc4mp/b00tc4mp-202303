let loginPage = {};
let createAccountPage = {};
let homePage = {};

loginPage.container = document.querySelector(".log-in-form");
createAccountPage.container = document.querySelector(".create-account-form");
homePage.container = document.querySelector(".home-calendar");

createAccountPage.container.style.display = "none";
homePage.container.style.display = "none";

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
    (loginPage.container.querySelector(".input-password").value === "123123123")
  ) {
    document.querySelector(".image-and-form").style.display = "none";
    homePage.container.style.display = "flex";
  }
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
/* document.getElementById("input-benchpress").onclick = function () {
  document.getElementById("result-1").innerText =
    Number(document.getElementById("kilos").value) /
    (1.0278 - 0.0278 * Number(document.getElementById("reps").value));
};

document.getElementById("input-pullup").onclick = function () {
  document.getElementById("result-2").innerText =
    (Number(document.getElementById("kilos-2").value) +
      Number(document.getElementById("Bodyweight").value)) /
      (1.0278 - 0.0278 * Number(document.getElementById("reps-2").value)) -
    Number(document.getElementById("Bodyweight").value);
};
 */
