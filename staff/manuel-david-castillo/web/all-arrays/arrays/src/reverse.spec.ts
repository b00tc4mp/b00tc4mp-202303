import reverse from "./reverse";

describe('reverse', () => {
    it('should return the same array in reverse, ["three", "two", "one"]', () => {
        const array1 = ['one', 'two', 'three'];

        expect(reverse(array1)).toEqual(["three", "two", "one"])
    })
    it('should return the same array in reverse, [8, 7, 6, 5, 4, 3, 2, 1]', () => {
        const array2 = [1, 2, 3, 4, 5, 6, 7, 8]

        expect(reverse(array2)).toEqual([8, 7, 6, 5, 4, 3, 2, 1])
    })
})

