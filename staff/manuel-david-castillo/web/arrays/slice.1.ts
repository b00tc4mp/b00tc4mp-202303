export default function slice(array: Array<any>, principio: number, fin?: number): Array<any> {
    let newArray: Array<any> = [];
    if (principio >= array.length) {
        return newArray
    }
    if (principio < 0) {
        for (let i = array.length + principio; i < array.length; i++) {
            newArray.push(array[i]);
            if (fin === i + 1) {
                return newArray
            }
        }
    } else {
        for (let i = principio; i < array.length; i++) {
            newArray.push(array[i]);
            if (fin === i + 1) {
                return newArray
            }
        }
    }
    return newArray;
}