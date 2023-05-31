console.log('push demo')
import push from "./push";

const animals = ['pigs', 'goats', 'sheep'];

console.log('case 0')
console.log(push(animals, "cows"));
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

console.log('case 1')
const element = ['chickens', 'cats', 'dogs']
console.log(push(animals, element));
/* Expected output: 7 */
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]