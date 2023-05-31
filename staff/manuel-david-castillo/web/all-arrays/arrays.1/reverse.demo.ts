console.log('reverse demo')
import reverse from "./reverse";


const array1 = ['one', 'two', 'three'];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]
console.log('case 0')
console.log(reverse(array1));
// Expected output: "reversed:" Array ["three", "two", "one"]
console.log('case 1')
console.log(reverse(array2));

