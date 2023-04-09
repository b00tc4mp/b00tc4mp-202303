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

function searchId(email) {
  for (i = 0; i < accounts.length; i++) {
    if (accounts[i].email === email) {
      id = i;

      return id;
    }
  }
}
