import shift from "./shift";

describe('shift', () => {
    it('should delete the first element of the array and retunt it', () => {
        var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];

        expect(shift(miPescado)).toEqual('ángel')
        expect(miPescado).toEqual(['payaso', 'mandarín', 'cirujano'])
    })
    it('should delete the first element of the array and retunt it', () => {
        var miPescado = ['payaso', 'mandarín', 'cirujano'];

        expect(shift(miPescado)).toEqual('payaso')
        expect(miPescado).toEqual(['mandarín', 'cirujano'])
    })
    it('should delete the first element of the array and retunt it', () => {
        var miPescado = ['mandarín', 'cirujano'];

        expect(shift(miPescado)).toEqual('mandarín')
        expect(miPescado).toEqual(['cirujano'])
    })
})