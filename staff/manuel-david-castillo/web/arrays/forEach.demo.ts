console.log('forEach demo')
import forEach from "./forEach";

const array1 = ['a', 'b', 'c'];
function consoleLog(element: any): any {
    console.log(element)
}
console.log('case 0')
forEach(array1, consoleLog);

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const array2 = [1, 2, 3, 4, 5, 6]
let sumAll = 0;
function sum(element: any): any {
    sumAll += element
}

console.log('case 1')
forEach(array2, sum)
console.log(sumAll)

