import hello from './hello';

describe('hello', () => {
    it('should say hello', () => {
        expect(hello('Manuel')).toEqual('hello Manuel')
    })
})