export default function join(array: Array<any>, string?: any): string {
    let newString = "";

    for (let i = 0; i < array.length; i++) {
        newString += array[i];

        if (i < array.length - 1) {
            newString += typeof string !== 'undefined' ? string : ','
        }
    }

    return newString
}