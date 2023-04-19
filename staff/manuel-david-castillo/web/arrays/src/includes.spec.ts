import includes from "./includes";

describe('includes', () => {
    it('should return a boolean according to meet the function condition', () => {
        const array = [1, 2, 3]

        expect(includes(array, 2)).toEqual(true)
        expect(includes(array, 4)).toEqual(false)
        expect(includes(array, 3, 3)).toEqual(false)
        expect(includes(array, 3, -1)).toEqual(true)
        expect(includes(array, [1, 2, NaN], NaN)).toEqual(true)
    })
})