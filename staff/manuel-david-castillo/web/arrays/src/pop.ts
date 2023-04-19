export default function pop(array: Array<any>): any {
    if (array) {
        let lastElement = array[array.length - 1]
        array.length--
        return lastElement
    } else {
        return null;
    }

}