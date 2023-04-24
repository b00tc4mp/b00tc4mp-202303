import findLast from "./findLast";

describe('findLast', () => {
    it('should return the value of the last element of the array which meet with the function condition, in this case 130', () => {
        const array1 = [5, 12, 50, 130, 44];

        const found = findLast(array1, (element: number) => element > 45);

        expect(found).toEqual(130)
    })
})