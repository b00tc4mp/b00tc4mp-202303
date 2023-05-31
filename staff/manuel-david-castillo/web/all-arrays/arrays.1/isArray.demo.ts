console.log('isArray demo')

import isArray from "./isArray";
/* FUNCIONA A MEDIAS */
// las siguientes llamadas devuelven true
console.log('case 0')
console.log(isArray([]));
console.log('case 1')
console.log(isArray([1]));
console.log('case 2')
console.log(isArray(new Array()));
console.log('case 3')
console.log(isArray(new Array('a', 'b', 'c', 'd')));
console.log('case 4')
console.log(isArray(new Array(3)));
// Hecho poco conocido: prototype es también un array:
console.log('case 5')
console.log(isArray(Array.prototype)); /* Esto no va */

// todas las siguientes llamadas devuelven false
/* console.log(isArray()); ESTO NO FUNCIONA*/
console.log('case 6')
console.log(isArray({}));
console.log('case 7')
console.log(isArray(null));
console.log('case 8')
console.log(isArray(undefined));
console.log('case 9')
console.log(isArray(17));
console.log('case 10')
console.log(isArray('Array'));
console.log('case 11')
console.log(isArray(true));
console.log('case 12')
console.log(isArray(false));
console.log('case 13')
console.log(isArray({ __proto__: Array.prototype })); /* Esto no va */