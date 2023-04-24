export default function findIndex(array: Array<any>, callback: Function): number {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return i
        }
    }
    return -1
}