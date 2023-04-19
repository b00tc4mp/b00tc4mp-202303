console.log('splice demo')
import splice from "./splice";

const months = ['Jan', 'March', 'April', 'June'];
console.log('case 0')
splice(months, 1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

console.log('case 1')
splice(months, 4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

const abc = ['a', 'b', 'b', 'b', 'c', 'd'];
console.log('case 2');
splice(abc, 2, 2); /* Delete 2 element at index 2 */
console.log(abc) /* Expected output: Array['a', 'b', 'c', 'd'] */

console.log('case 3')
splice(abc, 4, 1, 'e', 'f', 'g')
console.log(abc)
/* Expected output: Array['a', 'b', 'c', 'd'] */