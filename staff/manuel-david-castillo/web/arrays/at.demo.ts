console.log("at demo")

import at from "./at"

const array1: Array<any> = [5, 12, 8, 130, 44];

let index: number = 2;
console.log("case 0")
console.log(at(array1, index));
// Expected output: "Using an index of 2 the item returned is 8"

console.log("case 1")
index = -2;
console.log(at(array1, index));
// Expected output: "Using an index of -2 item returned is 130"