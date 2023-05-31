export default function unshift(array: Array<any>, element: number | Array<any>): any {
    let newArray: Array<any> = [];
    if (typeof element === "number") {
        newArray.push(element)
        newArray = newArray.concat(array)
    }
    if (typeof element === "object") {
        newArray = newArray.concat(element)
        newArray = newArray.concat(array)
    }
    return (newArray.length, newArray)
}