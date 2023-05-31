import slice from "./slice";

describe('slice', () => {
    it('should return the elements Pedro and Miguel of the array which indicates the index', () => {
        var nombres: Array<any> = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

        expect(slice(nombres, 1, 3)).toEqual(['Pedro', 'Miguel'])
    })
    it('should return the elements Ana and Vanesa of the array which indicates the index', () => {
        var nombres: Array<any> = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

        expect(slice(nombres, -2)).toEqual(['Ana', 'Vanesa'])
    })
    it('should return a empty array', () => {
        var nombres: Array<any> = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

        expect(slice(nombres, 7)).toEqual([])
    })
    it('should return the elements Miguel and Ana of the array which indicates the index', () => {
        var nombres: Array<any> = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

        expect(slice(nombres, -3, 4)).toEqual(['Miguel', 'Ana'])
    })
})
