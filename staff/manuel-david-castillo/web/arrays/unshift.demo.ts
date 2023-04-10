import unshift from "./unshift";

var arr = [1, 2];

console.log(unshift(arr, 0)); // resultado de la llamada es 3, la nueva longitud del array
// arr es [0, 1, 2]

console.log(unshift(arr, [-2, -1])); // = 5
// arr es [-2, -1, 0, 1, 2]

console.log(unshift(arr, [-3]));
// arr es [[-3], -2, -1, 0, 1, 2]