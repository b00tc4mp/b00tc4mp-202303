import isArray from "./isArray";
/* FUNCIONA A MEDIAS */
// las siguientes llamadas devuelven true
console.log(isArray([]));
console.log(isArray([1]));
console.log(isArray(new Array()));
console.log(isArray(new Array('a', 'b', 'c', 'd')));
console.log(isArray(new Array(3)));
// Hecho poco conocido: prototype es también un array:
console.log(isArray(Array.prototype)); /* Esto no va */

// todas las siguientes llamadas devuelven false
/* console.log(isArray()); ESTO NO FUNCIONA*/
console.log(isArray({}));
console.log(isArray(null));
console.log(isArray(undefined));
console.log(isArray(17));
console.log(isArray('Array'));
console.log(isArray(true));
console.log(isArray(false));
console.log(isArray({ __proto__: Array.prototype })); /* Esto no va */