import findLastIndex from "./findLastIndex";

describe('findLastIndex', () => {
    it('should return the value of the last index which meet witch the function condicion', () => {
        const array1 = [5, 12, 8, 130, 44];

        const isLargeNumber = (element: number) => element > 13;

        expect(findLastIndex(array1, isLargeNumber)).toEqual(4)
        expect(array1[findLastIndex(array1, isLargeNumber)]).toEqual(44)
    })
    it('should return the value of the last index which meet witch the function condicion', () => {
        const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

        const searchFruit = (fruit: string) => fruit === "blueberries";

        expect(findLastIndex(fruits, searchFruit)).toEqual(3)
        expect(fruits[findLastIndex(fruits, searchFruit)]).toEqual("blueberries")
    })
})