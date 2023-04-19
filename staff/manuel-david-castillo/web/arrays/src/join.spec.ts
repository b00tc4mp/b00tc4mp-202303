import join from "./join";

describe('join', () => {
    it('return a string separated by the element indicated', () => {
        const elements = ['Fire', 'Air', 'Water'];

        expect(join(elements)).toEqual("Fire,Air,Water")
    })
    it('return a string separated by the element indicated', () => {
        const elements = ['Fire', 'Air', 'Water'];

        expect(join(elements, '')).toEqual("FireAirWater")
    })
    it('return a string separated by the element indicated', () => {
        const elements = ['Fire', 'Air', 'Water'];

        expect(join(elements, '-')).toEqual("Fire-Air-Water")
    })
    it('return a string separated by the element indicated', () => {
        const elements = ['Fire', 'Air', 'Water'];

        expect(join(elements, 10)).toEqual("Fire10Air10Water")
    })
})