import reduce from "./reduce"

describe('reduce', () => {
    it('should return the value of the entire purchose', () => {
        const carrito = [{ nombre: 'camiseta', precio: 10, cantidad: 5 },
        { nombre: 'zapas', precio: 50, cantidad: 2 },
        { nombre: 'vaqueros', precio: 30, cantidad: 6 }]

        function precio(acumulador: number, producto: any) {
            return acumulador + (producto.precio * producto.cantidad)
        }

        expect(reduce(carrito, precio, 0)).toEqual(330)
    })
})