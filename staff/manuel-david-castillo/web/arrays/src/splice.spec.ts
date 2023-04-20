import splice from "./splice";

describe('splice', () => {
    it('should return a new array modified with Feb in the index 1', () => {
        const months = ['Jan', 'March', 'April', 'June'];
        splice(months, 1, 0, 'Feb')

        expect(months).toEqual(["Jan", "Feb", "March", "April", "June"])
    })
    it('should return a new array modified with May in the index 4', () => {
        const months = ["Jan", "Feb", "March", "April", "June"];
        splice(months, 4, 1, 'May')

        expect(months).toEqual(["Jan", "Feb", "March", "April", "May"])
    })
    it('should return a new array modified with 2b deleted', () => {
        const abc = ['a', 'b', 'b', 'b', 'c', 'd'];
        splice(abc, 2, 2)

        expect(abc).toEqual(['a', 'b', 'c', 'd'])
    })
    it('should return a new array modified with e, f, g in the 4 index', () => {
        const abc = ['a', 'b', 'c', 'd'];
        splice(abc, 4, 1, 'e', 'f', 'g');
        debugger
        expect(abc).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
    })
})