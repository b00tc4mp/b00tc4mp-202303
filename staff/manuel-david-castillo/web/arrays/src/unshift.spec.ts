import unshift from "./unshift";

describe('unshift', () => {
    it('should add the value of the beggining of the array and return the new array lengh', () => {
        let arr = [1, 2];

        expect(unshift(arr, 0)).toEqual(3)
        expect(arr).toEqual([0, 1, 2])
    })
    it('should add the value of the beggining of the array and return the new array lengh', () => {
        let arr = [0, 1, 2];

        expect(unshift(arr, -2, -1)).toEqual(5)
        expect(arr).toEqual([-2, -1, 0, 1, 2])
    })
    it('should add the value of the beggining of the array and return the new array lengh', () => {
        let arr = [-2, -1, 0, 1, 2];

        expect(unshift(arr, [-3])).toEqual(6)
        expect(arr).toEqual([[-3], -2, -1, 0, 1, 2])
    })
})