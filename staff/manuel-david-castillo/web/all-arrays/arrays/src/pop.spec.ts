import pop from "./pop";

describe('pop', () => {
    it('should return tomato', () => {
        const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

        expect(pop(plants)).toEqual("tomato")
    })
})

