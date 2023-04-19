import pop from "./pop";

describe('pop', () => {
    it('should return the last value of the array', () => {
        const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

        expect(pop(plants)).toEqual("tomato")
    })
})

