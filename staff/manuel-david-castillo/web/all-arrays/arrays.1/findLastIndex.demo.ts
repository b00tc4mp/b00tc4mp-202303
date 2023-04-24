console.log('findLastIndex demo')
import findLastIndex from "./findLastIndex";

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log('case 0')
console.log(findLastIndex(array1, isLargeNumber));
// Expected output: 4
console.log(array1[findLastIndex(array1, isLargeNumber)]);
// Expected output: 44

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const searchFruit = (fruit) => fruit === "blueberries";

console.log('case 1')
console.log(findLastIndex(fruits, searchFruit)); // 3
console.log(fruits[findLastIndex(fruits, searchFruit)]); // blueberries