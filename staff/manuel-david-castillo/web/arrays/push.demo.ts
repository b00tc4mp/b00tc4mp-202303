import push from "./push";

const animals = ['pigs', 'goats', 'sheep'];

console.log(push(animals, "cows"));
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

const element = ['chickens', 'cats', 'dogs']
console.log(push(animals, element));
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]