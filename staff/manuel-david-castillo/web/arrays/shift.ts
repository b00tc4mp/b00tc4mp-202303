export default function shift(array: Array<any>): any {
    let newArray: Array<any> = []
    for (let i = 1; i < array.length; i++) {
        newArray.push(array[i])
    }
    return (array[0], newArray)
}