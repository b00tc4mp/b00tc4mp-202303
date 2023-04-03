/* Perfiles de la app */
export type Account = {
  name: string,
  email: string,
  password: string,
  bodyweight: string,
  height: string,
  rmBenchPress: string,
  rmPullUp: string
}

export let accounts: Array<Account> = [
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
    bodyweight: "90",
    height: "1.70",
    rmBenchPress: "200",
    rmPullUp: "120",
  },
];

export let id: number;
/* ESTO NO QUIERE FUNCIONAR */
export function searchId(email: string): number | null {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].email === email) {
      id = i;

      return id;
    }
  }
  return null;
}

export function newUser(name: string, email: string, password: string) {
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