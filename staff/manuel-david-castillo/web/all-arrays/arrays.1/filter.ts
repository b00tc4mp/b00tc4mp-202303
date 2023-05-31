export default function filter(array: Array<any>, callback: Function): Array<any> {
    let newArray: Array<any> = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray[newArray.length] = array[i]
        }
    }

    return newArray;
}