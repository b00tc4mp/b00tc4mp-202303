export default function reverse(array: Array<any>): Array<any> {
    let reverseArray: Array<any> = [];
    for (let i = 0; i < array.length; i++) {
        reverseArray[i] = array[array.length - (i + 1)]
    }
    return reverseArray
}