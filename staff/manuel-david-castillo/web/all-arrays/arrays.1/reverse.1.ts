export default function reverse(array: Array<any>): Array<any> {
    let reverseArray: Array<any> = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i])
    }
    return reverseArray
}