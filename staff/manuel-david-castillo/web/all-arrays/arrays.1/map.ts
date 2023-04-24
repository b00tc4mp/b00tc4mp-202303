export default function map(array: Array<any>, callBack: Function): Array<any> {
    let newArray: Array<any> = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callBack(array[i])
    }
    return newArray
}