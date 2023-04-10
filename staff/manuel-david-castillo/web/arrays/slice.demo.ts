import slice from "./slice";

var nombres: Array<any> = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
console.log(slice(nombres, 1, 3));
console.log(slice(nombres, -2));
console.log(slice(nombres, 7));
console.log(slice(nombres, -3, 4));
