import push from "./push";

describe('push', () => {
    it('should put the new element cows at the end of the array and return the new array length 4', () => {
        const animals = ['pigs', 'goats', 'sheep'];

        expect(push(animals, "cows")).toEqual(4)
        expect(animals).toEqual(["pigs", "goats", "sheep", "cows"])
    })
    it('should put the new elements chickens, cats and dogs at the end of the array and return the new array length 7', () => {
        const animals = ['pigs', 'goats', 'sheep', 'cows'];
        const element = ['chickens', 'cats', 'dogs']

        expect(push(animals, element)).toEqual(7)
        expect(animals).toEqual(["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"])
    })
})