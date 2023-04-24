import includes from "./includes";

describe('includes', () => {
    it('should return true because 2 are includes', () => {
        const array = [1, 2, 3]

        expect(includes(array, 2)).toEqual(true)
    })
    it('should return false because 4 arent includes', () => {
        const array = [1, 2, 3]

        expect(includes(array, 4)).toEqual(false)
    })
    it('should return false because 3 arent includes in 3 index', () => {
        const array = [1, 2, 3]

        expect(includes(array, 3, 3)).toEqual(false)
    })
    it('should return true because 3 are includes', () => {
        const array = [1, 2, 3]

        expect(includes(array, 3, -1)).toEqual(true)
    })
    it('should return true because are includes', () => {
        const array1 = [1, 2, NaN]

        expect(includes(array1, NaN)).toEqual(true)
    })
})