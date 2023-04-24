console.log('reduce demo')
import reduce from "./reduce"

var carrito = [{ nombre: 'camiseta', precio: 10, cantidad: 5 },
{ nombre: 'zapas', precio: 50, cantidad: 2 },
{ nombre: 'vaqueros', precio: 30, cantidad: 6 }]

function precio(acumulador, producto) {
    return acumulador + (producto.precio * producto.cantidad)
}

console.log('case 0')
console.log(reduce(carrito, precio, 0))