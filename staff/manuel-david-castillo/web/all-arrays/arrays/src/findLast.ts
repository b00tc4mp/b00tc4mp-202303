export default function findLast(array: Array<any>, callback: Function): any {
    for (let i = array.length - 1; i >= 0; i--) {
        if (callback(array[i])) {
            return array[i]
        }
    }
}