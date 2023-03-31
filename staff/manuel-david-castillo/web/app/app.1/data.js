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

function findUserByEmail(email) {
  var foundUser;

  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.email === email) {
      foundUser = user;
      id = i;

      break;
    }
  }
  return foundUser;
}
