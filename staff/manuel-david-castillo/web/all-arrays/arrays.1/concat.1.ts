export default function concat(array1: Array<any>, array2: Array<any>): Array<any> {
    let stringArray1 = array1.toString();
    let stringArray2 = array2.toString();
    let newArray = stringArray1 + "," + stringArray2
    return newArray.split(",");
}