export default function join(array: Array<any>, string?: any): string {
    let newString = "";

    if (typeof string !== "undefined") {
        for (let i = 0; i < array.length; i++) {
            newString += array[i];
            if (i < array.length - 1) {
                newString += string
            }
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            newString += array[i];
            if (i < array.length - 1) {
                newString += ","
            }
        }
    }

    return newString
}