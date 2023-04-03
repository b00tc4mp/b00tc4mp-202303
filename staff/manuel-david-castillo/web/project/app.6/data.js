/* Perfiles de la app */
export let accounts = [
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

export let id;

export function searchId(email) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].email === email) {
      id = i;

      return id;
    }
  }
}

export function newUser(name, email, password) {
  let user = {
    name: name,
    email: email,
    password: password,
    bodyweight: "",
    height: "",
    rmBenchPress: "",
    rmPullUp: "",
  };

  accounts.push(user);
}
