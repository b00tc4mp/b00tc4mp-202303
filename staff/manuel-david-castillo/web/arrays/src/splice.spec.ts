import splice from "./splice";

describe('splice', () => {
    it('should return a new array modified', () => {
        const months = ['Jan', 'March', 'April', 'June'];
        splice(months, 1, 0, 'Feb')

        expect(months).toEqual(["Jan", "Feb", "March", "April", "June"])
    })
    it('should return a new array modified', () => {
        const months = ["Jan", "Feb", "March", "April", "June"];
        splice(months, 4, 1, 'May')

        expect(months).toEqual(["Jan", "Feb", "March", "April", "May"])
    })
    it('should return a new array modified', () => {
        const abc = ['a', 'b', 'b', 'b', 'c', 'd'];
        splice(abc, 2, 2)

        expect(abc).toEqual(['a', 'b', 'c', 'd'])
    })
    it('should return a new array modified', () => {
        const abc = ['a', 'b', 'c', 'd'];
        splice(abc, 4, 1, 'e', 'f', 'g');
        debugger
        expect(abc).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
    })
})