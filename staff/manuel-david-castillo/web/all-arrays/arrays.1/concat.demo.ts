console.log('concat demo')
import concat from "./concat";

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
console.log('case 0')
console.log(concat(array1, array2));
// Expected output: Array ["a", "b", "c", "d", "e", "f"]