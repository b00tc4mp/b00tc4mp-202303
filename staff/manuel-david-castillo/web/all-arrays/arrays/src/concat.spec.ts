import concat from "./concat";

describe('concat', () => {
    it('should return a new array with two previus array', () => {
        const array1 = ['a', 'b', 'c'];
        const array2 = ['d', 'e', 'f'];

        expect(concat(array1, array2)).toEqual(["a", "b", "c", "d", "e", "f"])
    })
})
