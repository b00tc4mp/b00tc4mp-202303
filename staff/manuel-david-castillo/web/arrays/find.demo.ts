console.log('find demo')
import find from "./find";

const inventario = [
    { nombre: 'manzanas', cantidad: 2 },
    { nombre: 'bananas', cantidad: 0 },
    { nombre: 'cerezas', cantidad: 5 }
];

function esCereza(fruta) {
    return fruta.nombre === 'cerezas';
}

console.log('case 0')
console.log(find(inventario, esCereza));
// { nombre: 'cerezas', cantidad: 5 }