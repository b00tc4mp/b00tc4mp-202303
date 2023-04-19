import forEach from "./forEach";

describe('forEach', () => {
    it('should execute the function on each element og the array', () => {
        const array1 = ['a', 'b', 'c'];
        function consoleLog(element: any): any {
            console.log(element)
        }

        expect(forEach(array1, consoleLog)).toEqual(undefined)
    })
    it('should execute the function on each element og the array', () => {
        const array2 = [1, 2, 3, 4, 5, 6]
        let sumAll: number = 0;
        function sum(element: number): any {
            sumAll += element
        }


        expect(forEach(array2, sum)).toEqual(undefined)
        expect(sumAll).toEqual(21)
    })
})


