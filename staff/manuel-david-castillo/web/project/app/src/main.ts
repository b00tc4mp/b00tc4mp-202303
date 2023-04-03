import {
  login,
  register,
  updatePassword,
  rmBenchPress,
  rmPullUp,
} from "./logic";

import { accounts, id, newUser } from "./data";

/* Partes de la web */

let loginPanel: Element = document.querySelector(".log-in-form")!; 
let loginForm: HTMLFormElement = loginPanel.querySelector("form")!;
let registerPanel: Element = document.querySelector(".create-account-form")!;
let registerForm: HTMLFormElement = registerPanel.querySelector("form")!;
let initialPage: Element = document.querySelector(".image-and-form")!;
let homePage: Element = document.querySelector(".home")!;
let calendarPanel: Element = document.querySelector(".calendar")!;
let calculatorPanel: Element = document.querySelector(".calculator")!;
let profilePanel: Element = document.querySelector(".profile")!;

/* Función para pasar de log-in a create an account */
loginPanel.querySelector("a")!.onclick = function (event) {
  event.preventDefault();

  loginPanel.classList.add("off");
  registerPanel.classList.remove("off");
};

/* Función para pasar de create-account a log-in */
registerPanel.querySelector("a")!.onclick = function (event) {
  event.preventDefault();

  registerPanel.classList.add("off");
  loginPanel.classList.remove("off");
};

/* Funciones del botón de log-in */
loginForm.onsubmit = function (event) {
  event.preventDefault();

  const email: string = loginForm.querySelector<HTMLInputElement>(".input-e-mail")!.value;
  const password: string = loginForm.querySelector<HTMLInputElement>(".input-password")!.value;

  try {
    login(email, password);

    initialPage.classList.add("off");
    homePage.classList.remove("off");

    loginForm.reset();

    let newName: string = "Hello " + accounts[id].name;
    profilePanel.querySelector<HTMLTitleElement>(".h3-name")!.innerText = newName;
    profilePanel.querySelector<HTMLInputElement>(".p-bodyweight")!.value = accounts[id].bodyweight;
    profilePanel.querySelector<HTMLInputElement>(".p-height")!.value = accounts[id].height;
    profilePanel.querySelector<HTMLInputElement>(".p-rm-benchpress")!.value =
      accounts[id].rmBenchPress;
    profilePanel.querySelector<HTMLInputElement>(".p-rm-pull-up")!.value = accounts[id].rmPullUp;
    profilePanel.querySelector<HTMLInputElement>(".p-email")!.innerText = email;
  } catch (error: any) {
    alert(error.message);
  }
};

/* Funciones del botón create-account */
registerForm.onsubmit = function (event) {
  event.preventDefault();

  const name: string = registerForm.querySelector<HTMLInputElement>(".name")!.value;
  const email: string = registerForm.querySelector<HTMLInputElement>(".input-e-mail")!.value;
  const password: string = registerForm.querySelector<HTMLInputElement>(".input-password")!.value;
  const confirmPassword: string = registerForm.querySelector<HTMLInputElement>(".confirm-password")!.value;

  try {
    register(name, email, password, confirmPassword);
    newUser(name, email, password);
    alert("user successfully registered");

    registerPanel.classList.add("off");
    loginPanel.classList.remove("off");

    registerForm.reset();
  } catch (error: any) {
    alert(error.message);
  }
};

/* Funciones del menu */
homePage.querySelector<HTMLAnchorElement>(".index-menu")!.onclick = function (event) {
  event.preventDefault();
  calculatorPanel.classList.add("off");
  calendarPanel.classList.add("off");
  profilePanel.classList.add("off");
  document.querySelector<HTMLTitleElement>(".h2")!.innerText = "Menu";
};

homePage.querySelector<HTMLAnchorElement>(".index-calendar")!.onclick = function (event) {
  event.preventDefault();
  if (calendarPanel.classList[1] === "off") {
    document.querySelector<HTMLTitleElement>(".h2")!.innerText = "Calendar";
    calendarPanel.classList.remove("off");
    profilePanel.classList.add("off");
    calculatorPanel.classList.add("off");
  } else {
    calendarPanel.classList.add("off");
    document.querySelector<HTMLTitleElement>(".h2")!.innerText = "Menu";
  }
};

homePage.querySelector<HTMLTitleElement>(".index-calculator")!.onclick = function (event) {
  event.preventDefault();

  if (calculatorPanel.classList[1] === "off") {
    document.querySelector<HTMLAnchorElement>(".h2")!.innerText = "Calculator";
    calendarPanel.classList.add("off");
    profilePanel.classList.add("off");
    calculatorPanel.classList.remove("off");
  } else {
    calculatorPanel.classList.add("off");
    document.querySelector<HTMLTitleElement>(".h2")!.innerText = "Menu";
  }
};

homePage.querySelector<HTMLAnchorElement>(".index-profile")!.onclick = function (event) {
  event.preventDefault();

  if (profilePanel.classList[1] === "off") {
    document.querySelector<HTMLTitleElement>(".h2")!.innerText = "Profile";
    calendarPanel.classList.add("off");
    profilePanel.classList.remove("off");
    calculatorPanel.classList.add("off");
  } else {
    profilePanel.classList.add("off");
    document.querySelector<HTMLTitleElement>(".h2")!.innerText = "Menu";
  }
};

homePage.querySelector<HTMLAnchorElement>(".index-sing-out")!.onclick = function (event) {
  event.preventDefault();
  homePage.classList.add("off");
  initialPage.classList.remove("off");
  document.querySelector<HTMLTitleElement>(".h2")!.innerText = "Menu";
};

/* Funciones de la calculadora */
calculatorPanel.querySelector<HTMLAnchorElement>(".input-bench-press")!.onclick = function (event) {
  event.preventDefault();
  const kg: number = Number(calculatorPanel.querySelector<HTMLInputElement>(".kg-bench-press")!.value);
  const reps: number = Number(calculatorPanel.querySelector<HTMLInputElement>(".reps-bench-press")!.value);

  calculatorPanel.querySelector<HTMLInputElement>(".result-1")!.innerText = rmBenchPress(kg, reps);

  if (rmBenchPress(kg, reps) > accounts[id].rmBenchPress) {
    console.log("nuevo rm");
    calculatorPanel
      .querySelector(".update-rm-bench-press")!
      .classList.remove("off");
  }
};

calculatorPanel.querySelector<HTMLAnchorElement>(".yes-update-benchpress")!.onclick = function (
  event
) {
  event.preventDefault();
  const kg: number = Number(calculatorPanel.querySelector<HTMLInputElement>(".kg-bench-press")!.value);
  const reps: number = Number(calculatorPanel.querySelector<HTMLInputElement>(".reps-bench-press")!.value);

  accounts[id].rmBenchPress = rmBenchPress(kg, reps);
  profilePanel.querySelector<HTMLInputElement>(".p-rm-benchpress")!.value = rmBenchPress(kg, reps);
  alert("RM bench press update");

  calculatorPanel.querySelector<HTMLElement>(".update-rm-bench-press")!.classList.add("off");
};

calculatorPanel.querySelector<HTMLAnchorElement>(".input-pull-up")!.onclick = function (event) {
  event.preventDefault();
  const kg: number = Number(document.querySelector<HTMLInputElement>(".kg-pull-up")!.value);
  const reps: number = Number(document.querySelector<HTMLInputElement>(".reps-pull-up")!.value);
  const bodyweight: number = Number(document.querySelector<HTMLInputElement>(".bodyweight")!.value);

  calculatorPanel.querySelector<HTMLInputElement>(".result-2")!.innerText = rmPullUp(
    kg,
    reps,
    bodyweight
  );

  if (
    parseInt(rmPullUp(kg, reps, bodyweight)) > parseInt(accounts[id].rmPullUp)
  ) {
    console.log("nuevo rm");
    calculatorPanel.querySelector<HTMLElement>(".update-rm-pull-up")!.classList.remove("off");
  }
};

calculatorPanel.querySelector<HTMLAnchorElement>(".yes-update-pullup")!.onclick = function (event) {
  event.preventDefault();
  const kg = Number(document.querySelector<HTMLInputElement>(".kg-pull-up")!.value);
  const reps = Number(document.querySelector<HTMLInputElement>(".reps-pull-up")!.value);
  const bodyweight = Number(document.querySelector<HTMLInputElement>(".bodyweight")!.value);

  accounts[id].rmPullUp = rmPullUp(kg, reps, bodyweight);
  profilePanel.querySelector<HTMLInputElement>(".p-rm-pull-up")!.value = rmPullUp(
    kg,
    reps,
    bodyweight
  );
  alert("RM pull up update");

  calculatorPanel.querySelector<HTMLElement>(".update-rm-pull-up")!.classList.add("off");
};

calculatorPanel.querySelector<HTMLAnchorElement>(".no-update")!.onclick = function (event) {
  event.preventDefault();

  calculatorPanel.querySelector<HTMLElement>(".update-rm-bench-press")!.classList.add("off");
};

calculatorPanel.querySelector<HTMLAnchorElement>(".no-update-2")!.onclick = function (event) {
  event.preventDefault();

  calculatorPanel.querySelector<HTMLElement>(".update-rm-pull-up")!.classList.add("off");
};

/* Funciones de profile */
profilePanel.querySelector<HTMLAnchorElement>(".change-user-data")!.onclick = function (event) {
  event.preventDefault();

  profilePanel.querySelector<HTMLElement>(".change-user-data")!.classList.add("off");
  profilePanel.querySelector<HTMLElement>(".save-changes")!.classList.remove("off");
  profilePanel.querySelector<HTMLElement>(".delete-all")!.classList.add("off");

  for (let i = 0; i < accounts.length; i++) {
    profilePanel.querySelectorAll("input")[i].readOnly = false;
  }
};

profilePanel.querySelector<HTMLAnchorElement>(".save-changes")!.onclick = function (event) {
  event.preventDefault();

  profilePanel.querySelector<HTMLElement>(".change-user-data")!.classList.remove("off");
  profilePanel.querySelector<HTMLElement>(".save-changes")!.classList.add("off");
  profilePanel.querySelector<HTMLElement>(".delete-all")!.classList.remove("off");

  accounts[id].bodyweight = profilePanel.querySelector<HTMLInputElement>(".p-bodyweight")!.value;
  accounts[id].height = profilePanel.querySelector<HTMLInputElement>(".p-height")!.value;
  accounts[id].rmBenchPress =
    profilePanel.querySelector<HTMLInputElement>(".p-rm-benchpress")!.value;
  accounts[id].rmPullUp = profilePanel.querySelector<HTMLInputElement>(".p-rm-pull-up")!.value;

  for (let i = 0; i < accounts.length; i++) {
    profilePanel.querySelectorAll("input")[i].readOnly = true;
  }
};

profilePanel.querySelector<HTMLAnchorElement>(".delete-all")!.onclick = function (event) {
  event.preventDefault();

  profilePanel.querySelector<HTMLElement>(".message-delete-all")!.classList.remove("off");
  profilePanel.querySelector<HTMLElement>(".change-user-data")!.classList.add("off");
  profilePanel.querySelector<HTMLElement>(".delete-all")!.classList.add("off");
};

profilePanel.querySelector<HTMLAnchorElement>(".yes-delete-all")!.onclick = function (event) {
  event.preventDefault();

  accounts[id].bodyweight = "";
  accounts[id].height = "";
  accounts[id].rmBenchPress = "";
  accounts[id].rmPullUp = "";

  profilePanel.querySelector<HTMLInputElement>(".p-bodyweight")!.value = "";
  profilePanel.querySelector<HTMLInputElement>(".p-height")!.value = "";
  profilePanel.querySelector<HTMLInputElement>(".p-rm-benchpress")!.value = "";
  profilePanel.querySelector<HTMLInputElement>(".p-rm-pull-up")!.value = "";

  profilePanel.querySelector<HTMLElement>(".message-delete-all")!.classList.add("off");
  profilePanel.querySelector<HTMLElement>(".change-user-data")!.classList.remove("off");
  profilePanel.querySelector<HTMLElement>(".delete-all")!.classList.remove("off");
};

profilePanel.querySelector<HTMLAnchorElement>(".no-delete-all")!.onclick = function (event) {
  event.preventDefault();

  profilePanel.querySelector<HTMLElement>(".message-delete-all")!.classList.add("off");
  profilePanel.querySelector<HTMLElement>(".change-user-data")!.classList.remove("off");
  profilePanel.querySelector<HTMLElement>(".delete-all")!.classList.remove("off");
};

profilePanel.querySelector<HTMLAnchorElement>(".change-password")!.onclick = function (event) {
  event.preventDefault();

  profilePanel.querySelector<HTMLElement>(".user-data")!.classList.add("off");
  profilePanel.querySelector<HTMLElement>(".div-change-password")!.classList.remove("off");
  profilePanel.querySelector<HTMLElement>(".change-password")!.classList.add("off");
  profilePanel.querySelector<HTMLElement>(".update-password")!.classList.remove("off");
  profilePanel.querySelector<HTMLElement>(".update-password-back")!.classList.remove("off");
};

profilePanel.querySelector<HTMLAnchorElement>(".update-password-back")!.onclick = function (event) {
  event.preventDefault();

  profilePanel.querySelector<HTMLElement>(".user-data")!.classList.remove("off");
  profilePanel.querySelector<HTMLElement>(".div-change-password")!.classList.add("off");
  profilePanel.querySelector<HTMLElement>(".change-password")!.classList.remove("off");
  profilePanel.querySelector<HTMLElement>(".update-password")!.classList.add("off");
  profilePanel.querySelector<HTMLElement>(".update-password-back")!.classList.add("off");
};

profilePanel.querySelector<HTMLAnchorElement>(".update-password")!.onclick = function (event) {
  event.preventDefault();

  let currentPassword: string = profilePanel.querySelector<HTMLInputElement>(
    ".input-current-password"
  )!.value;
  let newPassword: string = profilePanel.querySelector<HTMLInputElement>(".input-new-password")!.value;
  let confirmNewPassword: string = profilePanel.querySelector<HTMLInputElement>(
    ".input-confirm-new-password"
  )!.value;

  try {
    updatePassword(currentPassword, newPassword, confirmNewPassword);

    alert("password changed successfully");

    profilePanel.querySelector<HTMLElement>(".user-data")!.classList.remove("off");
    profilePanel.querySelector<HTMLElement>(".div-change-password")!.classList.add("off");
    profilePanel.querySelector<HTMLElement>(".change-password")!.classList.remove("off");
    profilePanel.querySelector<HTMLElement>(".update-password")!.classList.add("off");
    profilePanel.querySelector<HTMLElement>(".update-password-back")!.classList.add("off");
  } catch (error: any) {
    alert(error.message);
  }
};
