import map from "./map"

describe('map', () => {
    it('should return an array with the values modified by the function', () => {
        var numbers = [1, 5, 10, 15];
        function doubles(x: number) {
            return x * 2;
        };

        expect(map(numbers, doubles)).toEqual([2, 10, 20, 30])
    })
    it('should return an array with the values modified by the function', () => {
        var numbers = [1, 4, 9];
        function roots(num: number) {
            return Math.sqrt(num);
        };

        expect(map(numbers, roots)).toEqual([1, 2, 3])
    })
    it('should return an array with the values modified by the function', () => {
        var kvArray = [{ clave: 1, valor: 10 },
        { clave: 2, valor: 20 },
        { clave: 3, valor: 30 }];

        function reformattedArray(obj: any) {
            var rObj = {};
            rObj[obj.clave] = obj.valor;
            return rObj;
        };

        expect(map(kvArray, reformattedArray)).toEqual([{ 1: 10 }, { 2: 20 }, { 3: 30 }])
    })
})