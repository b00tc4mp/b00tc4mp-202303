import findIndex from "./findIndex";

describe('findIndex', () => {
    it('should return the value of the index which meet witch the function condicion', () => {
        const array1 = [5, 12, 8, 130, 44];

        const isLargeNumber = (element: number) => element > 13;

        expect(findIndex(array1, isLargeNumber)).toEqual(3)
    })
    it('should return the value of the index which meet witch the function condicion', () => {
        const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

        const searchFruit = (fruit: string) => fruit === "blueberries";

        expect(findIndex(fruits, searchFruit)).toEqual(3)
        expect(fruits[findIndex(fruits, searchFruit)]).toEqual('blueberries')
    })
})
