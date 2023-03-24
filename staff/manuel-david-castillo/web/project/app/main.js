/* Perfiles de la app */
const accounts = [
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
const loginPanel = {};
const registerPanel = {};
const initialPage = {};
const homePage = {};
const calendarPanel = {};
const calculatorPanel = {};

loginPanel.container = document.querySelector(".log-in-form");
registerPanel.container = document.querySelector(".create-account-form");
initialPage.container = document.querySelector(".image-and-form");
homePage.container = document.querySelector(".home");
calendarPanel.container = document.querySelector(".calendar");
calculatorPanel.container = document.querySelector(".calculator");

/* Función para pasar de log-in a create an account */
loginPanel.container.querySelector("a").onclick = function (event) {
  event.preventDefault();

  loginPanel.container.classList.add("off");
  registerPanel.container.classList.remove("off");
};

/* Función para pasar de create-account a log-in */
registerPanel.container.querySelector("a").onclick = function (event) {
  event.preventDefault();

  registerPanel.container.classList.add("off");
  loginPanel.container.classList.remove("off");
};

/* Funciones del botón de log-in */
loginPanel.container.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  if (
    loginPanel.container.querySelector(".input-e-mail").value === "" ||
    loginPanel.container.querySelector(".input-password").value === ""
  ) {
    loginPanel.container.querySelector(".mensaje").innerText =
      "Campo incompconsto";
    loginPanel.container.querySelector(".mensaje").style.display = "flex";
  }

  for (i = 0; i < accounts.length; i++) {
    if (
      (loginPanel.container.querySelector(".input-e-mail").value ===
        accounts[i].eMail) &
      (loginPanel.container.querySelector(".input-password").value ===
        accounts[i].password)
    ) {
      initialPage.container.classList.add("off");
      homePage.container.classList.remove("off");
    }
  }
};

/* Funciones del botón create-account */
registerPanel.container.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  if (
    registerPanel.container.querySelector(".name").value === "" ||
    registerPanel.container.querySelector(".last-name").value === "" ||
    registerPanel.container.querySelector(".input-e-mail").value === "" ||
    registerPanel.container.querySelector(".input-password").value === "" ||
    registerPanel.container.querySelector(".confirm-password").value === ""
  ) {
    registerPanel.container.querySelector(".mensaje").innerText =
      "Campo incompconsto";
    registerPanel.container.querySelector(".mensaje").style.display = "flex";
  }

  if (
    registerPanel.container.querySelector(".input-password").value !=
    registerPanel.container.querySelector(".confirm-password").value
  ) {
    registerPanel.container.querySelector(".mensaje").innerText =
      "Contraseñas diferentes";
    registerPanel.container.querySelector(".mensaje").style.display = "flex";
  }

  for (i = 0; i < accounts.length; i++) {
    if (
      registerPanel.container.querySelector(".input-e-mail").value ===
      accounts[i].eMail
    ) {
      alert("Ya tienes cuenta");
      registerPanel.container.classList.add("off");
      loginPanel.container.classList.remove("off");
      loginPanel.container.querySelector(".input-e-mail").value =
        accounts[i].eMail;
    }
  }

  for (i = 0; i < accounts.length; i++) {
    if (
      registerPanel.container.querySelector(".name").value === accounts[i].name
    ) {
      registerPanel.container.querySelector(".mensaje").innerText =
        "Nombre no disponible";
      registerPanel.container.querySelector(".mensaje").style.display = "flex";
    }
  }
};

/* Funciones del menu */
homePage.container.querySelector(".index-menu").onclick = function (event) {
  event.preventDefault();
  calculatorPanel.container.classList.add("off");
  calendarPanel.container.classList.add("off");
  document.querySelector(".h2").innerText = "Menu";
};

homePage.container.querySelector(".index-calendar").onclick = function (event) {
  event.preventDefault();
  document.querySelector(".h2").innerText = "Calendar";
  if (calendarPanel.container.classList[1] === "off") {
    calendarPanel.container.classList.remove("off");
  } else {
    calendarPanel.container.classList.add("off");
  }
};

homePage.container.querySelector(".index-calculator").onclick = function (
  event
) {
  event.preventDefault();
  document.querySelector(".h2").innerText = "Calculator";
  if (calculatorPanel.container.classList[1] === "off") {
    calculatorPanel.container.classList.remove("off");
  } else {
    calculatorPanel.container.classList.add("off");
  }
};

homePage.container.querySelector(".index-sing-out").onclick = function (event) {
  event.preventDefault();
  homePage.container.classList.add("off");
  initialPage.container.classList.remove("off");
  document.querySelector(".h2").innerText = "Menu";
};

/* Funciones de la calculadora */
calculatorPanel.container.querySelector(".input-bench-press").onclick =
  function (event) {
    event.preventDefault();
    calculatorPanel.container.querySelector(".result-1").innerText =
      Number(calculatorPanel.container.querySelector(".kg-bench-press").value) /
      (1.0278 -
        0.0278 *
          Number(
            calculatorPanel.container.querySelector(".reps-bench-press").value
          ));
  };

calculatorPanel.container.querySelector(".input-pull-up").onclick = function (
  event
) {
  event.preventDefault();
  console.log("funciono");
  calculatorPanel.container.querySelector(".result-2").innerText =
    (Number(document.querySelector(".kg-pull-up").value) +
      Number(document.querySelector(".bodyweight").value)) /
      (1.0278 -
        0.0278 * Number(document.querySelector(".reps-pull-up").value)) -
    Number(document.querySelector(".bodyweight").value);
};
