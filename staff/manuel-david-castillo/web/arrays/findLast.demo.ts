console.log('findLast demo')
import findLast from "./findLast";

const array1 = [5, 12, 50, 130, 44];

const found = findLast(array1, (element) => element > 45);

console.log('case 0')
console.log(found);
// Expected output: 130