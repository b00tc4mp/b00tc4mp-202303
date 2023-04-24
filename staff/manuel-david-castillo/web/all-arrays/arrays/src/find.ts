export default function find(array: Array<any>, callback: Function): any {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i]
        }
    }
}