// data layer

var users = [];

var user = {
  name: "Pepito Grillo",
  email: "pepito@grillo.com",
  password: "123123123",
};

users.push(user);

var user = {
  name: "Peter Pan",
  email: "peter@pan.com",
  password: "123123123",
};

users.push(user);

var user = {
  name: "Wendy Darling",
  email: "wendy@darling.com",
  password: "123123123",
};

users.push(user);

// business logic layer

function authenticateUser(email, password) {
  var foundUser;

  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.email === email) {
      foundUser = user;
      id = i;

      break;
    }
  }

  if (foundUser === undefined || foundUser.password !== password) {
    return false;
  } else {
    return true;
  }
}

function registerUser(name, email, password) {
  var foundUser;

  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.email === email) {
      foundUser = user;

      break;
    }
  }

  if (foundUser !== undefined) {
    return false;
  } else {
    var user = {
      name: name,
      email: email,
      password: password,
    };

    users.push(user);

    return true;
  }
}

function updateUserPassword(
  email,
  password,
  newPassword,
  newPasswordConfirmation
) {
  if (
    (users[id].email === email) &
    (users[id].password === password) &
    (newPassword === newPasswordConfirmation)
  ) {
    users[id].password = newPassword;
    return true;
  } else {
    return false;
  }
}

// presentation layer

var loginPage = {};
var registerPage = {};
var homePage = {};
var authenticatedEmail;
var id;

loginPage.container = document.querySelector(".login");
registerPage.container = document.querySelector(".register");
homePage.container = document.querySelector(".home");

loginPage.container.querySelector("a").onclick = function (event) {
  event.preventDefault();

  loginPage.container.classList.add("off");
  registerPage.container.classList.remove("off");
};

registerPage.container.querySelector("a").onclick = function (event) {
  event.preventDefault();

  registerPage.container.classList.add("off");
  loginPage.container.classList.remove("off");
};

loginPage.container.querySelector("form").onsubmit = function (event) {
  event.preventDefault();

  var email = loginPage.container
    .querySelector("form")
    .querySelector("input[name=email]").value;
  var password = loginPage.container
    .querySelector("form")
    .querySelector("input[name=password]").value;

  var result = authenticateUser(email, password);

  if (result === false) {
    alert("wrong credentials");
  } else {
    authenticatedEmail = email;
    homePage.container.querySelector("input[name=email]").value =
      authenticatedEmail;

    loginPage.container.classList.add("off");
    homePage.container.classList.remove("off");
  }
};

registerPage.container.querySelector("form").onsubmit = function (event) {
  event.preventDefault();

  var name = registerPage.container
    .querySelector("form")
    .querySelector("input[name=name]").value;
  var email = registerPage.container
    .querySelector("form")
    .querySelector("input[name=email]").value;
  var password = registerPage.container
    .querySelector("form")
    .querySelector("input[name=password]").value;

  var result = registerUser(name, email, password);

  if (result === false) {
    alert("user already exists");
  } else {
    registerPage.container.classList.add("off");
    loginPage.container.classList.remove("off");
  }
};

homePage.container.querySelector("form").onsubmit = function (event) {
  event.preventDefault();

  var email = homePage.container
    .querySelector("form")
    .querySelector("input[name=email]").value;

  var password = homePage.container
    .querySelector("form")
    .querySelector("input[name=password]").value;

  var newPassword = homePage.container
    .querySelector("form")
    .querySelector("input[name=new-password]").value;

  var newPasswordConfirmation = homePage.container
    .querySelector("form")
    .querySelector("input[name=new-password-confirmation]").value;

  var result = updateUserPassword(
    email,
    password,
    newPassword,
    newPasswordConfirmation
  );

  if (result === false) {
    alert("password sucessfully changed");
    homePage.container.classList.add("off");
    loginPage.container.classList.remove("off");
  } else {
    alert("wrong credentials");
  }
};
