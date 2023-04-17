console.log('slice demo')
import slice from "./slice";

var nombres: Array<any> = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
console.log('case 0')
console.log(slice(nombres, 1, 3)); /* Pedro, Miguel */
console.log('case 1')
console.log(slice(nombres, -2)); /* Ana Vanesa */
console.log('case 2')
console.log(slice(nombres, 7)); /*  */
console.log('case 3')
console.log(slice(nombres, -3, 4)); /* Miguel, Ana */
