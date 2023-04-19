import isArray from "./isArray";

describe('isArray', () => {
    it('return true if is a Array, return false if no', () => {
        expect(isArray([])).toEqual(true)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray([1])).toEqual(true)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray(new Array())).toEqual(true)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray(new Array('a', 'b', 'c', 'd'))).toEqual(true)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray(new Array(3))).toEqual(true)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray(Array.prototype)).toEqual(true)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray({})).toEqual(false)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray(null)).toEqual(false)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray(undefined)).toEqual(false)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray(17)).toEqual(false)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray('Array')).toEqual(false)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray(true)).toEqual(false)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray(false)).toEqual(false)
    })
    it('return true if is a Array, return false if no', () => {
        expect(isArray({ __proto__: Array.prototype })).toEqual(false)
    })
})