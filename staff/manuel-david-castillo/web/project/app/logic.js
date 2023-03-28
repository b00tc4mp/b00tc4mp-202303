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
