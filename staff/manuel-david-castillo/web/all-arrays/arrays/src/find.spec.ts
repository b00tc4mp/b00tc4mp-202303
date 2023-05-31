import find from "./find";

describe('find', () => {
    it('should return the value of the element which meet the condition of the function', () => {
        const inventario: Array<object> = [
            { nombre: 'manzanas', cantidad: 2 },
            { nombre: 'bananas', cantidad: 0 },
            { nombre: 'cerezas', cantidad: 5 }
        ];

        function esCereza(fruta: any) {
            return fruta.nombre === 'cerezas';
        }
        expect(find(inventario, esCereza)).toEqual({ nombre: 'cerezas', cantidad: 5 })
    })
})