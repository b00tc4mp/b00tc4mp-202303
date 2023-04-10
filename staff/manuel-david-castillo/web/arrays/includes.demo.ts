import includes from "./includes";

const array = [1, 2, 3]

console.log(includes(array, 2));     // true
console.log(includes(array, 4));     // false
console.log(includes(array, 3, 3));  // false
console.log(includes(array, 3, -1)); // true
console.log(includes([1, 2, NaN], NaN)) // true /* No pasa por el true cuando son iguales */