export default function push(array: Array<any>, element: any): any {
    let arrayString = array.toString()
    arrayString += ","
    if (typeof element === "object") {
        let elementString = element.toString()
        arrayString += elementString
        array = arrayString.split(",");
        return (array.length, array);
    } else {
        arrayString += element
        array = arrayString.split(",");
        return (array.length, array);
    }
}