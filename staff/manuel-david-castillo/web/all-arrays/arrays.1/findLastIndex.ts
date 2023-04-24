export default function findLastIndex(array: Array<any>, callback: Function): number {
    for (let i = array.length - 1; i >= 0; i--) {
        if (callback(array[i])) {
            return i
        }
    }
    return -1
}