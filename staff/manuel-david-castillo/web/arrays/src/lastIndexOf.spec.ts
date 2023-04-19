import lastIndexOf from "./lastIndexOf";

describe('lastIndexOf', () => {
    it('return the index the last given value', () => {
        const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

        expect(lastIndexOf(animals, 'Dodo')).toEqual(3)
    })
    it('return the index the last given value', () => {
        const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

        expect(lastIndexOf(animals, 'Tiger')).toEqual(1)
    })
    it('return the index the last given value', () => {
        const array = [2, 5, 9, 2];

        expect(lastIndexOf(array, 2)).toEqual(3)
    })
    it('return the index the last given value', () => {
        const array = [2, 5, 9, 2];

        expect(lastIndexOf(array, 7)).toEqual(-1)
    })
    it('return the index the last given value', () => {
        const array = [2, 5, 9, 2];

        expect(lastIndexOf(array, 2, 3)).toEqual(3)
    })
    it('return the index the last given value', () => {
        const array = [2, 5, 9, 2];

        expect(lastIndexOf(array, 2, 2)).toEqual(0)
    })
    it('return the index the last given value', () => {
        const array = [2, 5, 9, 2];

        expect(lastIndexOf(array, 2, -2)).toEqual(0)
    })
    it('return the index the last given value', () => {
        const array = [2, 5, 9, 2];

        expect(lastIndexOf(array, 2, -1)).toEqual(3)
    })
})
