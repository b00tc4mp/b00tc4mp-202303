export default function push(array: Array<any>, element: any): any {
    if (typeof element === "object") {
        for (let i = 0; i < element.length; i++) {
            array[array.length] = element[i]
        }
    } else {
        array[array.length] = element
        return array.length
    }

}