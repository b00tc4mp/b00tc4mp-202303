console.log('unshift demo')
import unshift from "./unshift";

let arr = [1, 2];
console.log('case 0')
console.log(unshift(arr, 0)); // resultado de la llamada es 3, la nueva longitud del array
console.log(arr) // arr es [0, 1, 2]

console.log('case 1')
console.log(unshift(arr, -2, -1)); // = 5
console.log(arr)// arr es [-2, -1, 0, 1, 2]

console.log('case 2')
console.log(unshift(arr, [-3]));
console.log(arr)// arr es [[-3], -2, -1, 0, 1, 2]