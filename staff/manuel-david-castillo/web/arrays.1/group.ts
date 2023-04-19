export default function group(array: Array<any>, callback: Function): Object {
    let newObject: Object = {}
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newObject[callback(array[i])] = []
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newObject[callback(array[i])][newObject[callback(array[i])].length] = array[i]
        }
    }
    return newObject
}