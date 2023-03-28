/* DATA LAYER */
/* Perfiles de la app */
const accounts = [
  {
    name: "ManuelDa",
    email: "manuelda27999@gmail.com",
    password: "manuel123",
    bodyweight: "85",
    height: "1.83",
    rmBenchPress: "125",
    rmPullUp: "60",
  },
  {
    name: "Nico",
    email: "nico@gmail.com",
    password: "nico123",
    bodyweight: "",
    height: "",
    rmBenchPress: "",
    rmPullUp: "",
  },
  {
    name: "Manuel Barzi",
    email: "manuelbarzi@gmail.com",
    password: "barzi123",
    bodyweight: "",
    height: "",
    rmBenchPress: "",
    rmPullUp: "",
  },
  {
    name: "Paco",
    email: "paco@gmail.com",
    password: "paco123",
    bodyweight: "",
    height: "",
    rmBenchPress: "",
    rmPullUp: "",
  },
  {
    name: "Benito",
    email: "benito@gmail.com",
    password: "benito123",
    bodyweight: "",
    height: "",
    rmBenchPress: "",
    rmPullUp: "",
  },
];

/* BUSINESS LOGIC LAYER */
function login(email, password) {
  for (i = 0; i < accounts.length; i++) {
    if (accounts[i].email === email) {
      id = i;
      if (accounts[i].password === password) {
        return true;
      }
    }
  }

  if (email === "" || password === "") {
    return "incomplete field";
  } else if (
    (accounts[i].email === email) &
    (accounts[i].password != password)
  ) {
    return "incorrect password";
  } else if (accounts[i].email != email) {
    return "user not found";
  }
}

/* PRESENTATION LAYER */
/* Partes de la web */
const loginPanel = {};
const registerPanel = {};
const initialPage = {};
const homePage = {};
const calendarPanel = {};
const calculatorPanel = {};
const profilePanel = {};
let id;
let email;
let password;

loginPanel.container = document.querySelector(".log-in-form");
registerPanel.container = document.querySelector(".create-account-form");
initialPage.container = document.querySelector(".image-and-form");
homePage.container = document.querySelector(".home");
calendarPanel.container = document.querySelector(".calendar");
calculatorPanel.container = document.querySelector(".calculator");
profilePanel.container = document.querySelector(".profile");

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

  let email = loginPanel.container.querySelector(".input-e-mail").value;
  let password = loginPanel.container.querySelector(".input-password").value;

  if (login(email, password) === true) {
    initialPage.container.classList.add("off");
    homePage.container.classList.remove("off");

    let newName = "Hello " + accounts[id].name;
    profilePanel.container.querySelector(".h3-name").innerText = newName;

    let newBodyweight = accounts[id].bodyweight;
    profilePanel.container.querySelector(".p-bodyweight").value = newBodyweight;

    let newHeight = accounts[id].height;
    profilePanel.container.querySelector(".p-height").value = newHeight;

    let newBenchPress = accounts[id].rmBenchPress;
    profilePanel.container.querySelector(".p-rm-benchpress").value =
      newBenchPress;

    let newPullUp = accounts[id].rmPullUp;
    profilePanel.container.querySelector(".p-rm-pull-up").value = newPullUp;

    profilePanel.container.querySelector(".p-email").innerText = email;
  } else if (login(email, password) === "incomplete field") {
    alert("incomplete field");
  } else if (login(email, password) === "user not found") {
    alert("user not found"); /* not working */
  } else if (login(email, password) === "incorrect password") {
    alert("incorrect password"); /* not working */
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
  profilePanel.container.classList.add("off");
  document.querySelector(".h2").innerText = "Menu";
};

homePage.container.querySelector(".index-calendar").onclick = function (event) {
  event.preventDefault();
  if (calendarPanel.container.classList[1] === "off") {
    document.querySelector(".h2").innerText = "Calendar";
    calendarPanel.container.classList.remove("off");
    profilePanel.container.classList.add("off");
    calculatorPanel.container.classList.add("off");
  } else {
    calendarPanel.container.classList.add("off");
    document.querySelector(".h2").innerText = "Menu";
  }
};

homePage.container.querySelector(".index-calculator").onclick = function (
  event
) {
  event.preventDefault();

  if (calculatorPanel.container.classList[1] === "off") {
    document.querySelector(".h2").innerText = "Calculator";
    calendarPanel.container.classList.add("off");
    profilePanel.container.classList.add("off");
    calculatorPanel.container.classList.remove("off");
  } else {
    calculatorPanel.container.classList.add("off");
    document.querySelector(".h2").innerText = "Menu";
  }
};

homePage.container.querySelector(".index-profile").onclick = function (event) {
  event.preventDefault();

  if (profilePanel.container.classList[1] === "off") {
    document.querySelector(".h2").innerText = "Profile";
    calendarPanel.container.classList.add("off");
    profilePanel.container.classList.remove("off");
    calculatorPanel.container.classList.add("off");
  } else {
    profilePanel.container.classList.add("off");
    document.querySelector(".h2").innerText = "Menu";
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

/* Funciones de profile */
profilePanel.container.querySelector(".change-user-data").onclick = function (
  event
) {
  event.preventDefault();

  profilePanel.container
    .querySelector(".change-user-data")
    .classList.add("off");
  profilePanel.container.querySelector(".save-changes").classList.remove("off");
  profilePanel.container.querySelector(".delete-all").classList.add("off");

  for (i = 0; i < accounts.length; i++) {
    profilePanel.container.querySelectorAll("input")[i].readOnly = false;
  }
};

profilePanel.container.querySelector(".save-changes").onclick = function (
  event
) {
  event.preventDefault();

  profilePanel.container
    .querySelector(".change-user-data")
    .classList.remove("off");
  profilePanel.container.querySelector(".save-changes").classList.add("off");
  profilePanel.container.querySelector(".delete-all").classList.remove("off");

  accounts[id].bodyweight =
    profilePanel.container.querySelector(".p-bodyweight").value;
  accounts[id].height = profilePanel.container.querySelector(".p-height").value;
  accounts[id].rmBenchPress =
    profilePanel.container.querySelector(".p-rm-benchpress").value;
  accounts[id].rmPullUp =
    profilePanel.container.querySelector(".p-rm-pull-up").value;

  for (i = 0; i < accounts.length; i++) {
    profilePanel.container.querySelectorAll("input")[i].readOnly = true;
  }
};

profilePanel.container.querySelector(".delete-all").onclick = function (event) {
  event.preventDefault();

  profilePanel.container
    .querySelector(".message-delete-all")
    .classList.remove("off");
  profilePanel.container
    .querySelector(".change-user-data")
    .classList.add("off");
  profilePanel.container.querySelector(".delete-all").classList.add("off");
};

profilePanel.container.querySelector(".yes-delete-all").onclick = function (
  event
) {
  event.preventDefault();
  console.log("yes");

  accounts[id].bodyweight = "";
  accounts[id].height = "";
  accounts[id].rmBenchPress = "";
  accounts[id].rmPullUp = "";

  profilePanel.container.querySelector(".p-bodyweight").value = "";
  profilePanel.container.querySelector(".p-height").value = "";
  profilePanel.container.querySelector(".p-rm-benchpress").value = "";
  profilePanel.container.querySelector(".p-rm-pull-up").value = "";

  profilePanel.container
    .querySelector(".message-delete-all")
    .classList.add("off");
  profilePanel.container
    .querySelector(".change-user-data")
    .classList.remove("off");
  profilePanel.container.querySelector(".delete-all").classList.remove("off");
};
