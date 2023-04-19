console.log('findIndex demo')
import findIndex from "./findeIndex";

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log('case 0')
console.log(findIndex(array1, isLargeNumber));
// Expected output: 3

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const searchFruit = (fruit) => fruit === "blueberries";

console.log('case 1')
console.log(findIndex(fruits, searchFruit)); // 3
console.log(fruits[findIndex(fruits, searchFruit)]); // blueberries