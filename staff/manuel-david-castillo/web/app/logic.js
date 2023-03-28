function authenticateUser(email, password) {
  if (typeof email !== "string") throw new Error("email is not a string");
  if (!email) throw new Error("email is empty");
  if (typeof password !== "string") throw new Error("password is not string");
  if (!password) throw new Error("password is empty");

  var foundUser = findUserByEmail(email);

  if (!foundUser) {
    throw new Error("user not found");
  }

  if (foundUser.password !== password) {
    throw new Error("wrong password");
  }
}

function registerUser(name, email, password) {
  if (typeof name !== "string") throw new Error("name is not a string");
  if (!name) throw new Error("name is empty");
  if (typeof email !== "string") throw new Error("email is not a string");
  if (!email) throw new Error("email is empty");
  if (typeof password !== "string") throw new Error("password is not a string");
  if (!password) throw new Error("password is empty");

  var foundUser = findUserByEmail(email);

  if (foundUser) throw new Error("users already exists");

  var user = {
    name: name,
    email: email,
    password: password,
  };

  users.push = user;
}

function updateUserPassword(
  email,
  password,
  newPassword,
  newPasswordConfirmation
) {
  if (typeof email !== "string") throw new Error("email is not a string");
  if (!email) throw new Error("email is empty");
  if (typeof password !== "string") throw new Error("password is not a string");
  if (!password) throw new Error("password is empty");
  if (typeof newPassword !== "string")
    throw new Error("new password is not a string");
  if (!newPassword) throw new Error("new password is empty");
  if (typeof newPasswordConfirmation !== "string")
    throw new Error("new password confirmation is not a string");
  if (!newPasswordConfirmation)
    throw new Error("new password confirmation is empty");

  if (email !== users[id].email) throw new Error("wrong email");
  if (password !== users[id].password) throw new Error("wrong password");
  if (newPassword !== newPasswordConfirmation)
    throw new Error("different password");

  users[id].password = newPassword;
}
