import filter from "./filter";

describe('filter', () => {
    it('should returns an array with the elements that meet the function s condition', () => {
        function esSuficientementeGrande(elemento: number) {
            return elemento >= 10;
        }
        var filtrados = [12, 5, 8, 130, 44]

        expect(filter(filtrados, esSuficientementeGrande)).toEqual([12, 130, 44])
    })
})