import at from './at'

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(at(array1, index));
// Expected output: 8

index = -2;

console.log(at(array1, index));
// Expected output: 130