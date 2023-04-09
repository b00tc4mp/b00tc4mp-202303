function login(email, password) {
  if (typeof email !== "string") throw new Error("the email is not a string");
  if (!email) throw new Error("email is empty");
  if (typeof password !== "string")
    throw new Error("the password is not a string");
  if (!password) throw new Error("password is empty");

  var foundUser = accounts[searchId(email)];

  if (!foundUser) throw new Error("user not found");
  if (foundUser.password !== password) throw new Error("wrong password");
}

function register(name, email, password, confirmPassword) {
  if (typeof name !== "string") throw new Error("the name is not a string");
  if (!name) throw new Error("name is empty");
  if (typeof email !== "string") throw new Error("the email is not a string");
  if (!email) throw new Error("email is empty");
  if (typeof password !== "string")
    throw new Error("the password is not a string");
  if (!password) throw new Error("password is empty");
  if (typeof confirmPassword !== "string")
    throw new Error("the confirm password is not a string");
  if (!confirmPassword) throw new Error("confirm password is empty");

  var foundUser = accounts[searchId(email)];

  if (foundUser) throw new Error("users already exists");
  if (password !== confirmPassword) throw new Error("different password");

  var user = {
    name: name,
    email: email,
    password: password,
    bodyweight: "",
    height: "",
    rmBenchPress: "",
    rmPullUp: "",
  };

  accounts.push = user;
}

function updatePassword(currentPassword, newPassword, confirmNewPassword) {
  if (typeof currentPassword !== "string")
    throw new Error("Current password is not a string");
  if (!currentPassword) throw new Error("Current password is empty");
  if (typeof newPassword !== "string")
    throw new Error("New password is not a string");
  if (!newPassword) throw new Error("New password is empty");
  if (typeof confirmNewPassword !== "string")
    throw new Error("Confirm new password is not a string");
  if (!confirmNewPassword) throw new Error("Confirm new password is empty");

  if (accounts[id].password !== currentPassword)
    throw new Error("Wrong current password");
  if (newPassword !== confirmNewPassword)
    throw new Error("Different passwords");

  accounts[id].password = newPassword;
}

function rmBenchPress(kg, reps) {
  let result = kg / (1.0278 - 0.0278 * reps);
  let wholeResult = result.toFixed();
  return wholeResult;
}

function rmPullUp(kg, reps, bodyweight) {
  let result = (kg + bodyweight) / (1.0278 - 0.0278 * reps) - bodyweight;
  let wholeResult = result.toFixed();
  return wholeResult;
}
