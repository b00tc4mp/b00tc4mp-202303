console.log('funciono')

var a = [1, 2, 3, 4, 5, 6]
function sum1(currentValue: any, index: any, array: Array<any>): any {
    console.log(currentValue + 1)
}

a.forEach(sum1)

let sumAll = 0;
function sumAllFunction(currentValue: any, index: any, array: Array<any>) {
    sumAll += currentValue
}

a.forEach(sumAllFunction)
console.log(sumAll)


