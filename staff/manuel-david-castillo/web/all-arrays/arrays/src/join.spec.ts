import join from "./join";

describe('join', () => {
    it('return a string separated by ,', () => {
        const elements = ['Fire', 'Air', 'Water'];

        expect(join(elements)).toEqual("Fire,Air,Water")
    })
    it('return a string with all element together', () => {
        const elements = ['Fire', 'Air', 'Water'];

        expect(join(elements, '')).toEqual("FireAirWater")
    })
    it('return a string separated by -', () => {
        const elements = ['Fire', 'Air', 'Water'];

        expect(join(elements, '-')).toEqual("Fire-Air-Water")
    })
    it('return a string separated by 10', () => {
        const elements = ['Fire', 'Air', 'Water'];

        expect(join(elements, 10)).toEqual("Fire10Air10Water")
    })
})