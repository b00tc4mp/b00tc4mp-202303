/* Partes de la web */
let id;
let email;
let password;

let loginPanel = document.querySelector(".log-in-form");
let loginForm = loginPanel.querySelector("form");
let registerPanel = document.querySelector(".create-account-form");
let registerForm = registerPanel.querySelector("form");
let initialPage = document.querySelector(".image-and-form");
let homePage = document.querySelector(".home");
let calendarPanel = document.querySelector(".calendar");
let calculatorPanel = document.querySelector(".calculator");
let profilePanel = document.querySelector(".profile");

/* Función para pasar de log-in a create an account */
loginPanel.querySelector("a").onclick = function (event) {
  event.preventDefault();

  loginPanel.classList.add("off");
  registerPanel.classList.remove("off");
};

/* Función para pasar de create-account a log-in */
registerPanel.querySelector("a").onclick = function (event) {
  event.preventDefault();

  registerPanel.classList.add("off");
  loginPanel.classList.remove("off");
};

/* Funciones del botón de log-in */
loginForm.onsubmit = function (event) {
  event.preventDefault();

  let email = loginForm.querySelector(".input-e-mail").value;
  let password = loginForm.querySelector(".input-password").value;

  try {
    login(email, password);

    initialPage.classList.add("off");
    homePage.classList.remove("off");

    loginForm.reset();

    let newName = "Hello " + accounts[id].name;
    profilePanel.querySelector(".h3-name").innerText = newName;
    profilePanel.querySelector(".p-bodyweight").value = accounts[id].bodyweight;
    profilePanel.querySelector(".p-height").value = accounts[id].height;
    profilePanel.querySelector(".p-rm-benchpress").value =
      accounts[id].rmBenchPress;
    profilePanel.querySelector(".p-rm-pull-up").value = accounts[id].rmPullUp;
    profilePanel.querySelector(".p-email").innerText = email;
  } catch (error) {
    alert(error.message);
  }
};

/* Funciones del botón create-account */
registerForm.onsubmit = function (event) {
  event.preventDefault();

  let name = registerForm.querySelector(".name").value;
  let email = registerForm.querySelector(".input-e-mail").value;
  let password = registerForm.querySelector(".input-password").value;
  let confirmPassword = registerForm.querySelector(".confirm-password").value;

  try {
    register(name, email, password, confirmPassword);
    alert("user successfully registered");

    registerPanel.classList.add("off");
    loginPanel.classList.remove("off");

    registerForm.reset();
  } catch (error) {
    alert(error.message);
  }
};

/* Funciones del menu */
homePage.querySelector(".index-menu").onclick = function (event) {
  event.preventDefault();
  calculatorPanel.classList.add("off");
  calendarPanel.classList.add("off");
  profilePanel.classList.add("off");
  document.querySelector(".h2").innerText = "Menu";
};

homePage.querySelector(".index-calendar").onclick = function (event) {
  event.preventDefault();
  if (calendarPanel.classList[1] === "off") {
    document.querySelector(".h2").innerText = "Calendar";
    calendarPanel.classList.remove("off");
    profilePanel.classList.add("off");
    calculatorPanel.classList.add("off");
  } else {
    calendarPanel.classList.add("off");
    document.querySelector(".h2").innerText = "Menu";
  }
};

homePage.querySelector(".index-calculator").onclick = function (event) {
  event.preventDefault();

  if (calculatorPanel.classList[1] === "off") {
    document.querySelector(".h2").innerText = "Calculator";
    calendarPanel.classList.add("off");
    profilePanel.classList.add("off");
    calculatorPanel.classList.remove("off");
  } else {
    calculatorPanel.classList.add("off");
    document.querySelector(".h2").innerText = "Menu";
  }
};

homePage.querySelector(".index-profile").onclick = function (event) {
  event.preventDefault();

  if (profilePanel.classList[1] === "off") {
    document.querySelector(".h2").innerText = "Profile";
    calendarPanel.classList.add("off");
    profilePanel.classList.remove("off");
    calculatorPanel.classList.add("off");
  } else {
    profilePanel.classList.add("off");
    document.querySelector(".h2").innerText = "Menu";
  }
};

homePage.querySelector(".index-sing-out").onclick = function (event) {
  event.preventDefault();
  homePage.classList.add("off");
  initialPage.classList.remove("off");
  document.querySelector(".h2").innerText = "Menu";
};

/* Funciones de la calculadora */
calculatorPanel.querySelector(".input-bench-press").onclick = function (event) {
  event.preventDefault();
  calculatorPanel.querySelector(".result-1").innerText =
    Number(calculatorPanel.querySelector(".kg-bench-press").value) /
    (1.0278 -
      0.0278 *
        Number(calculatorPanel.querySelector(".reps-bench-press").value));
};

calculatorPanel.querySelector(".input-pull-up").onclick = function (event) {
  event.preventDefault();
  console.log("funciono");
  calculatorPanel.querySelector(".result-2").innerText =
    (Number(document.querySelector(".kg-pull-up").value) +
      Number(document.querySelector(".bodyweight").value)) /
      (1.0278 -
        0.0278 * Number(document.querySelector(".reps-pull-up").value)) -
    Number(document.querySelector(".bodyweight").value);
};

/* Funciones de profile */
profilePanel.querySelector(".change-user-data").onclick = function (event) {
  event.preventDefault();

  profilePanel.querySelector(".change-user-data").classList.add("off");
  profilePanel.querySelector(".save-changes").classList.remove("off");
  profilePanel.querySelector(".delete-all").classList.add("off");

  for (i = 0; i < accounts.length; i++) {
    profilePanel.querySelectorAll("input")[i].readOnly = false;
  }
};

profilePanel.querySelector(".save-changes").onclick = function (event) {
  event.preventDefault();

  profilePanel.querySelector(".change-user-data").classList.remove("off");
  profilePanel.querySelector(".save-changes").classList.add("off");
  profilePanel.querySelector(".delete-all").classList.remove("off");

  accounts[id].bodyweight = profilePanel.querySelector(".p-bodyweight").value;
  accounts[id].height = profilePanel.querySelector(".p-height").value;
  accounts[id].rmBenchPress =
    profilePanel.querySelector(".p-rm-benchpress").value;
  accounts[id].rmPullUp = profilePanel.querySelector(".p-rm-pull-up").value;

  for (i = 0; i < accounts.length; i++) {
    profilePanel.querySelectorAll("input")[i].readOnly = true;
  }
};

profilePanel.querySelector(".delete-all").onclick = function (event) {
  event.preventDefault();

  profilePanel.querySelector(".message-delete-all").classList.remove("off");
  profilePanel.querySelector(".change-user-data").classList.add("off");
  profilePanel.querySelector(".delete-all").classList.add("off");
};

profilePanel.querySelector(".yes-delete-all").onclick = function (event) {
  event.preventDefault();
  console.log("yes");

  accounts[id].bodyweight = "";
  accounts[id].height = "";
  accounts[id].rmBenchPress = "";
  accounts[id].rmPullUp = "";

  profilePanel.querySelector(".p-bodyweight").value = "";
  profilePanel.querySelector(".p-height").value = "";
  profilePanel.querySelector(".p-rm-benchpress").value = "";
  profilePanel.querySelector(".p-rm-pull-up").value = "";

  profilePanel.querySelector(".message-delete-all").classList.add("off");
  profilePanel.querySelector(".change-user-data").classList.remove("off");
  profilePanel.querySelector(".delete-all").classList.remove("off");
};
