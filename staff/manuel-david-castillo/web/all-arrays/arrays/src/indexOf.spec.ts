import indexOf from "./indexOf";

describe('indexOf', () => {
    it('should return the index 0', () => {
        var array = [2, 9, 9];

        expect(indexOf(array, 2)).toEqual(0)
    })
    it('should return the index -1', () => {
        var array = [2, 9, 9];

        expect(indexOf(array, 7)).toEqual(-1)
    })
    it('should return the index 2', () => {
        var array = [2, 9, 9];

        expect(indexOf(array, 9, 2)).toEqual(2)
    })
    it('should return the index -1', () => {
        var array = [2, 9, 9];

        expect(indexOf(array, 2, -1)).toEqual(-1)
    })
    it('should return the index 0', () => {
        var array = [2, 9, 9];

        expect(indexOf(array, 2, -3)).toEqual(0)
    })
})