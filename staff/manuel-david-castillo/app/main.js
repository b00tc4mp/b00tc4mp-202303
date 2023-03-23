/* Perfiles de la app */
let accounts = [
  (manuelDa = {
    name: "Manuel David",
    eMail: "manuelda27999@gmail.com",
    password: "manuel123",
  }),
  (nico = {
    name: "Nico",
    eMail: "nico@gmail.com",
    password: "nico123",
  }),
  (manuelBarzi = {
    name: "Manuel Barzi",
    eMail: "manuelbarzi@gmail.com",
    password: "barzi123",
  }),
  (paco = {
    name: "Paco",
    eMail: "paco@gmail.com",
    password: "paco123",
  }),
  (benito = {
    name: "Benito",
    eMail: "benito@gmail.com",
    password: "benito123",
  }),
];

/* Partes de la web */
let loginPage = {};
let createAccountPage = {};
let imageAndForm = {};
let homePage = {};
let calendar = {};
let calculator = {};

loginPage.container = document.querySelector(".log-in-form");
createAccountPage.container = document.querySelector(".create-account-form");
imageAndForm.container = document.querySelector(".image-and-form");
homePage.container = document.querySelector(".home");
calendar.container = document.querySelector(".calendar");
calculator.container = document.querySelector(".calculator");

/* Función para pasar de log-in a create an account */
loginPage.container.querySelector("a").onclick = function (event) {
  event.preventDefault();

  loginPage.container.classList.add("off");
  createAccountPage.container.classList.remove("off");
};

/* Función para pasar de create-account a log-in */
createAccountPage.container.querySelector("a").onclick = function (event) {
  event.preventDefault();

  createAccountPage.container.classList.add("off");
  loginPage.container.classList.remove("off");
};

/* Funciones del botón de log-in */
loginPage.container.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  if (
    loginPage.container.querySelector(".input-e-mail").value === "" ||
    loginPage.container.querySelector(".input-password").value === ""
  ) {
    loginPage.container.querySelector(".mensaje").innerText =
      "Campo incompleto";
    loginPage.container.querySelector(".mensaje").style.display = "flex";
  }

  for (i = 0; i < accounts.length; i++) {
    if (
      (loginPage.container.querySelector(".input-e-mail").value ===
        accounts[i].eMail) &
      (loginPage.container.querySelector(".input-password").value ===
        accounts[i].password)
    ) {
      imageAndForm.container.classList.add("off");
      homePage.container.classList.remove("off");
    }
  }
};

/* Funciones del botón create-account */
createAccountPage.container.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  if (
    createAccountPage.container.querySelector(".name").value === "" ||
    createAccountPage.container.querySelector(".last-name").value === "" ||
    createAccountPage.container.querySelector(".input-e-mail").value === "" ||
    createAccountPage.container.querySelector(".input-password").value === "" ||
    createAccountPage.container.querySelector(".confirm-password").value === ""
  ) {
    createAccountPage.container.querySelector(".mensaje").innerText =
      "Campo incompleto";
    createAccountPage.container.querySelector(".mensaje").style.display =
      "flex";
  }

  if (
    createAccountPage.container.querySelector(".input-password").value !=
    createAccountPage.container.querySelector(".confirm-password").value
  ) {
    createAccountPage.container.querySelector(".mensaje").innerText =
      "Contraseñas diferentes";
    createAccountPage.container.querySelector(".mensaje").style.display =
      "flex";
  }

  for (i = 0; i < accounts.length; i++) {
    if (
      createAccountPage.container.querySelector(".input-e-mail").value ===
      accounts[i].eMail
    ) {
      alert("Ya tienes cuenta");
      createAccountPage.container.classList.add("off");
      loginPage.container.classList.remove("off");
      loginPage.container.querySelector(".input-e-mail").value =
        accounts[i].eMail;
    }
  }

  for (i = 0; i < accounts.length; i++) {
    if (
      createAccountPage.container.querySelector(".name").value ===
      accounts[i].name
    ) {
      createAccountPage.container.querySelector(".mensaje").innerText =
        "Nombre no disponible";
      createAccountPage.container.querySelector(".mensaje").style.display =
        "flex";
    }
  }
};

/* Funciones del menu */
homePage.container.querySelector(".index-menu").onclick = function (event) {
  event.preventDefault();
  calculator.container.classList.add("off");
  calendar.container.classList.add("off");
  document.querySelector(".h2").innerText = "Menu";
};

homePage.container.querySelector(".index-calendar").onclick = function (event) {
  event.preventDefault();
  document.querySelector(".h2").innerText = "Calendar";
  if (calendar.container.classList[1] === "off") {
    calendar.container.classList.remove("off");
  } else {
    calendar.container.classList.add("off");
  }
};

homePage.container.querySelector(".index-calculator").onclick = function (
  event
) {
  event.preventDefault();
  document.querySelector(".h2").innerText = "Calculator";
  if (calculator.container.classList[1] === "off") {
    calculator.container.classList.remove("off");
  } else {
    calculator.container.classList.add("off");
  }
};

homePage.container.querySelector(".index-sing-out").onclick = function (event) {
  event.preventDefault();
  homePage.container.classList.add("off");
  imageAndForm.container.classList.remove("off");
  document.querySelector(".h2").innerText = "Menu";
};

/* Funciones de la calculadora */
calculator.container.querySelector(".input-bench-press").onclick = function (
  event
) {
  event.preventDefault();
  calculator.container.querySelector(".result-1").innerText =
    Number(calculator.container.querySelector(".kg-bench-press").value) /
    (1.0278 -
      0.0278 *
        Number(calculator.container.querySelector(".reps-bench-press").value));
};

calculator.container.querySelector(".input-pull-up").onclick = function (
  event
) {
  event.preventDefault();
  console.log("funciono");
  calculator.container.querySelector(".result-2").innerText =
    (Number(document.querySelector(".kg-pull-up").value) +
      Number(document.querySelector(".bodyweight").value)) /
      (1.0278 -
        0.0278 * Number(document.querySelector(".reps-pull-up").value)) -
    Number(document.querySelector(".bodyweight").value);
};
