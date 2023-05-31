import isArray from "./isArray";

describe('isArray', () => {
    it('return true for a Array', () => {
        expect(isArray([])).toEqual(true)
    })
    it('return true for a Array', () => {
        expect(isArray([1])).toEqual(true)
    })
    it('return true for a new Array', () => {
        expect(isArray(new Array())).toEqual(true)
    })
    it('return true for a new Array', () => {
        expect(isArray(new Array('a', 'b', 'c', 'd'))).toEqual(true)
    })
    it('return true for a new Array', () => {
        expect(isArray(new Array(3))).toEqual(true)
    })
    it('return false for a Array.prototype', () => {
        expect(isArray(Array.prototype)).toEqual(false)
    })
    it('return false for a object', () => {
        expect(isArray({})).toEqual(false)
    })
    it('return false for a null', () => {
        expect(isArray(null)).toEqual(false)
    })
    it('return false for a undefined', () => {
        expect(isArray(undefined)).toEqual(false)
    })
    it('return false for a number', () => {
        expect(isArray(17)).toEqual(false)
    })
    it('return false por a string', () => {
        expect(isArray('Array')).toEqual(false)
    })
    it('return false for a boolean', () => {
        expect(isArray(true)).toEqual(false)
    })
    it('returns false for a boolean', () => {
        expect(isArray(false)).toEqual(false)
    })
    it('returns false for a function', () => {
        expect(isArray(function () { })).toEqual(false)
    })
})