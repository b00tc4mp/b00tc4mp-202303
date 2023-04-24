import at from './at'

describe('at', () => {
    it('should return the value of the given index', () => {
        const array1 = [5, 12, 8, 130, 44];

        const index = 2;

        expect(at(array1, index)).toEqual(8)
    })

    it('should return the value of the given negative index', () => {
        const array1 = [5, 12, 8, 130, 44];

        const index = -2;

        expect(at(array1, index)).toEqual(130)
    })
})