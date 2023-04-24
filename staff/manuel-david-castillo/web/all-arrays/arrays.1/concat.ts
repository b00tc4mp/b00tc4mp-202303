export default function concat(array1: Array<any>, array2: Array<any>): Array<any> {
    let c: Array<any> = [];
    for (let i = 0; i < array1.length; i++) {
        c[i] = array1[i]
    }
    for (let i = 0; i < array1.length; i++) {
        c[i + array1.length] = array2[i]
    }
    return c
}